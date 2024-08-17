# **Company Details Scraper**

A Puppeteer-based Node.js script designed to scrape company details from LinkedIn via Bing search results. The script automates the process of gathering essential company information, such as the number of employees, industry, specialties, company size, headquarters location, and LinkedIn profile link. The extracted data is useful for data analysis, competitive research, and business intelligence.

### **Prerequisites**

- Node.js (v14 or above)
- Yarn (Node Package Manager)
- Puppeteer

### **Steps**

1. **Clone the repository:**

   ```bash
   git clone https://github.com/encoreshao/bing-search-engine.git
   cd bing-search-engine
   ```

2. **Install the dependencies:**

   ```bash
   npm install
   ```

## **Usage**

Clone the repository, install dependencies, and run the script with a company name as an argument to begin data extraction. The script outputs the extracted information in JSON format, making it easy to integrate with other systems or tools.

### **Basic Usage**

1. **Navigate to the project directory:**

   ```bash
   cd bing-search-engine
   ```

2. **Run the scraper:**

   ```bash
   node bingSearch.js mondaydotcom

   env HEADLESS=false node bingSearch.js linktree
   ```

3. **View the output:**
   The script will output the extracted details in the console.

## **Key Features**

- **Automated Scraping:** Utilizes Puppeteer to navigate Bing search results and extract company details from LinkedIn.
- **Flexible Data Extraction:** Capable of extracting key company metrics like employee count, follower count, industry, specialties, and more.
- **Randomized User-Agent:** Incorporates multiple user agents to simulate different browsing environments, reducing the likelihood of detection.
- **Error Handling:** Robust error handling to manage missing elements and avoid script crashes.
- **Customizable Search:** Allows users to specify the company name to tailor the search results and data extraction.

## **Example Output**

```json
{
  "companyName": "Example Company",
  "industry": "Information Technology & Services",
  "specialties": "Software Development, AI, Cloud Computing",
  "companySize": "500-1000 employees",
  "headquarters": "San Francisco, CA",
  "linkedInLink": "https://www.linkedin.com/company/example-company/",
  "description": "Example Company is a leading provider of innovative technology solutions...",
  "employeesCount": 43
  "followers": 234
}
```

## **Contributing**

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

## **License**

This project is licensed under the MIT License. See the `LICENSE` file for more details.
