# **Company Details Scraper**

This project is a web scraping tool that extracts company details from a specific webpage, including LinkedIn links, company names, industries, specialties, company sizes, headquarters, and descriptions. The project uses Puppeteer for browser automation and web scraping.

### **Prerequisites**

- Node.js (v14 or above)
- yarn (Node Package Manager)
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

## **Features**

- **Company Name:** Extracts the company's name.
- **LinkedIn Link:** Extracts the company's LinkedIn profile link.
- **Industry:** Extracts the industry the company operates in.
- **Specialties:** Extracts the company's specialties.
- **Company Size:** Extracts the size of the company.
- **Headquarters:** Extracts the location of the company's headquarters.
- **Description:** Extracts a brief description of the company.

## **Example Output**

```json
{
  "companyName": "Example Company",
  "industry": "Information Technology & Services",
  "specialties": "Software Development, AI, Cloud Computing",
  "companySize": "500-1000 employees",
  "headquarters": "San Francisco, CA",
  "linkedInLink": "https://www.linkedin.com/company/example-company/",
  "description": "Example Company is a leading provider of innovative technology solutions..."
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
