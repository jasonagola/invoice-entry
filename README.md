## About 

**Currently being tested and devloped against traditional workflow

This application was built to parse web Invoices from Quality Bicycle Parts (QBP). 

Puppeteer scrapes invoice data, item info, and pricing with a provided invoice url and authentication. The application then matches already existing inventory items to a Square Inventory Library and can provide a quick way to add items along with variations directly to the library without having to manually enter all information. 

Square's Catalog API is pretty limited compared to its in browser functionality.  All item codes on QBP's website are included in the Item Library as SKUs instead of Vendor Codes (lacking in Square's API) to enable lookup. Also missing are unit cost features and Purchase order creation for batch inventory ingress. 


This application is built as an internal tool to process invoices from any number of distributors.  

<strong>The Problem</strong></br>
The Bike Shop deals with 10-15 different distributors on a regular basis thourghout a normal year.  The process of manually collecting invoices and processing the relevent data for use in our Point of Sale (up to date MSRPs, inventory tracking, unit cost, and cost of goods sold information).  Not only is it important in direct sales but it is also extremely important for purposes of business accounting.  The team we have is small and its hard to keep up with a never ending stream of what is otherwise a fairly reptitive and time consuming task.  There is no standardized format, information, or availabilty of these invoices.  

## Technologies
* React
* Redux
* Express.js
* Node.js
* MySQL

## Roadmap
- [ ] Distributor Support
    - [ ] JBI
    - [ ] Velo Orange
    - [ ] Merry Sales
    - [ ] Amazon Business Prime
    - [ ] Highway Two
    - [ ] Simworks
 - [ ] More advanced Item Creation Screen with support for data manipulation available in the Square API
 - [ ] Library MSRP check and update
 - [ ] Purchase Order Integration
    - [ ] CSV Output for direct upload in the browser
    - [ ] Shipping Cost by Vendor
 - [ ] Express Routing and integration into deployed backend (bike-backend)
 
