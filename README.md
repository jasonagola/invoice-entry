This application was built to parse web Invoices from Quality Bicycle Parts (QBP). 

Puppeteer scrapes invoice data, item info, and pricing with a provided invoice url and authentication. The application then matches already existing inventory items to a Square Inventory Library and can provide a quick way to add items along with variations directly to the library without having to manually enter all information. 

Square's Catalog API is pretty limited compared to its in browser functionality.  All item codes on QBP's website are included in the Item Library as SKUs instead of Vendor Codes (lacking in Square's API) to enable lookup. Also missing are unit cost features and Purchase order creation for batch inventory ingress. 
