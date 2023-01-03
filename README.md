
**Currently being tested and developed against traditional workflow.  Backend Tools will be integrated into /bike-backend which is already up and running on a VPS. 

## The Problem
The bike shop deals with 10-15 different distributors on a regular basis thourghout a normal year.  Normal workflow includes the manual collection of invoices and processing the relevent data for use in our Point of Sale (up to date MSRPs, inventory tracking, unit cost, and cost of goods sold information).  This process is not only is it important in direct sales but it is also extremely important for purposes of business accounting.  The team we have is small and its hard to keep up with a never ending stream of what is otherwise a fairly reptitive and time consuming task.  There is no standardized format, information, or availabilty of these invoices.  

## About
    This application is built as an internal tool to process invoices from any number of distributors.  Currently the project is able to process invoices from Quality Bicycle Parts (QBP) with plans to integrate other scraping and api collection for other distributors

    Where applicable APIs or Puppeteer collects invoice data, item info, and pricing.   The application then matches already existing inventory items to a Square's Inventory Library and can provide a quick way to add items along with variations directly to the library without having to manually collecdt and enter all information. 

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
 - [ ] 

## Notable Libraries
* Puppeteer 
 
