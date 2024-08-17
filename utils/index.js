// Helper functions for random delays and intervals
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

async function extractCount(page, keyword) {
    return await page.evaluate((keyword) => {
        const elements = Array.from(document.querySelectorAll('main ol li.b_algo, main ol li.b_ans div.b_slidebar div.slide'))
            .filter(el => el.innerText.includes(keyword));
        const regexKeyword = new RegExp(`([0-9,]+) ${keyword}`, 'i');

        return elements.map(resultElement => {
            const textContent = resultElement.innerText;
            const match = textContent.match(regexKeyword);
            if (match) {
                return {
                    link: (resultElement.querySelector('h2 a') || resultElement.querySelector('div.b_algo h2 a'))?.href,
                    linkText: (resultElement.querySelector('h2 a') || resultElement.querySelector('div.b_algo h2 a'))?.innerText?.replace(/ \| LinkedIn/i, ''),
                    caption: (resultElement.querySelector('div.b_caption') || resultElement.querySelector('a.df_alsocon_link span.b_primtxt'))?.innerText,
                    count: parseInt(match[1].replace(/,/g, '')),
                }
            } else {
              return null
            }
        }).filter(Boolean)
    }, keyword);
}

async function extractCompanyDetails(page) {
    // Helper function to extract text content
    async function extractText(selector) {
        try {
            return await page.$eval(selector, el => el.textContent.trim());
        } catch (error) {
            return null;
        }
    }

    // Check if the '.b_ans' sector exists
    const companySectionExists = await page.$('aside .b_ans');
    if (!companySectionExists) {
        console.log('-> Company details section not found.');
        return {};
    }

    // Extract details using the helper function
    const linkedInLink = await page.$eval('aside .b_ans a[href*="linkedin.com"]', el => el.href)
        .catch(() => null);
    const companyName = await extractText('aside .b_ans .spl_logoheader_ttl span');
    const industry = await extractText('aside .b_ans .l_ecrd_vqfcts_row:nth-child(1) span');
    const specialties = await extractText('aside .b_ans .l_ecrd_vqfcts_row:nth-child(2) span');
    const companySize = await extractText('aside .b_ans .l_ecrd_vqfcts_row:nth-child(3) span');
    const headquarters = await extractText('aside .b_ans .l_ecrd_vqfcts_row:nth-child(4) span');
    const description = await extractText('aside .b_ans .spl_logoheader_desc');

    // Return the extracted information as an object
    return {
        companyName,
        industry,
        specialties,
        companySize,
        headquarters,
        linkedInLink,
        description,
    };
}

module.exports = { getRandomInt, delay, extractCount, extractCompanyDetails }