const puppeteer = require('puppeteer');

const { getRandomUserAgent } = require('./userAgents');
const { getRandomInt, delay, extractCount, extractCompanyDetails } = require('./utils');

const BING_URL = `https://www.bing.com/`
const HEADLESS = process.env.HEADLESS === 'true' || false;

async function getLinkedInData(companyName) {
    if (!companyName) {
        throw new Error('> Please provide a company name as an argument.');
    }

    const searchQuery = `site:linkedin.com Number of employees in ${companyName}`;
    const browser = await puppeteer.launch({ headless: HEADLESS });
    const page = await browser.newPage();

    await setupPage(page);

    await performSearch(page, BING_URL, searchQuery);

    const companyDetails = await extractCompanyDetails(page);
    const searchResultsOfEmployees = await extractCount(page, 'employees');
    const searchResultsOfFollowers = await extractCount(page, 'followers');

    companyDetails['employeesCount'] = companyDetails && searchResultsOfEmployees.find(el => el.link === companyDetails.linkedInLink)?.count;
    companyDetails['followers'] = companyDetails && searchResultsOfFollowers.find(el => el.link === companyDetails.linkedInLink)?.count;
    companyDetails['searchResults'] = {
        employeesCount: searchResultsOfEmployees,
        followers: searchResultsOfFollowers
    }

    await browser.close();
    return companyDetails;
}

async function setupPage(page) {
    const userAgent = getRandomUserAgent();
    await page.setUserAgent(userAgent);
    await page.setViewport({ width: 1240, height: 1024 });
}

async function performSearch(page, bingUrl, searchQuery) {
    await page.goto(bingUrl, { waitUntil: 'networkidle2' });
    await delay(getRandomInt(2000, 5000)); // Random delay

    await page.type('textarea[name="q"]', searchQuery, { delay: getRandomInt(100, 300) });
    await delay(getRandomInt(1000, 3000)); // Random delay

    await page.keyboard.press('Enter');
    await delay(getRandomInt(3000, 7000)); // Random delay after search

    await page.evaluate(() => window.scrollBy(0, window.innerHeight / 2)); // Scroll down
    await delay(getRandomInt(2000, 4000)); // Random delay after scrolling
}

// Get company name from command line arguments and execute
(async () => {
    const companyName = process.argv[2];

    try {
        console.log(`-> Searching ${companyName} from Bing......`);
        const details = await getLinkedInData(companyName);
        console.log(`-> LinkedIn data of ${details['companyName'] || companyName}:`);
        console.log(JSON.stringify(details, null, 4));
    } catch (error) {
        console.error('-> An error occurred:', error);
    }
})();
