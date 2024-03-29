////Square APIs
import axios from 'axios';
import { qbpMsrpFromXML } from './qbpInvoiceHelpers';

const backendUrl = process.env.REACT_APP_BACKEND_URL
console.log(backendUrl)

//search for Item with string





///Puppeteer Node Server

///Load Invoice
// export async function LoadInvoice(invoiceUrl) {
//     console.log(invoiceUrl)
//     const options = {
//         method: 'GET',
//         url: 'http://localhost:8100/authorizeQBP',
//         params: {
//             url: invoiceUrl,
//             // cookies: cookiesQBP
//         }
//     }
//     const response = await axios.request(options)
//         try {
//             console.log(response)
//             // parseInvoice(response.data)
//             return response.data
//         } catch(error) {
//             console.log(error)
//         }
//  }

//  ////getPrice
//  export async function getPrices(invoice) {
//     const options = {
//         method: 'GET',
//         url: 'http://localhost:8100/getPrices',
//         params: {
//             invoice: invoice
//         }
//     }
//     const response = await axios.request(options)
//         try {
//             console.log(response)
//             return response.data
//         } catch(error) {
//             console.log(error)
//         }
//  }

//  ///loadJBIInvoices

//  export async function loadJBIInvoices() {
//      const url = backendUrl +'/JBI/Invoices'
//      console.log(url)
//      const options = {
//          method: 'GET',
//          url: url
//      }
//      const response = await axios.request(options)
//         try {
//             console.log(response.data)
//             return response.data
//         } catch(error) {
//             console.log(error)
//         }
//  }


////////////////////Database

///getAll Invoices 
export async function getAllDatabaseInvoices() {
    const options = {
        method: "GET",
        url: backendUrl + '/db/invoices/getAll'
    }
    const response = await axios.request(options)
        try {
            return response
        } catch (error) {
            console.log(error)
        }
}

 export async function getDatabase() {
     const options = {
         method: 'GET',
         url: 'http://localhost:8000/db/get',
     };
     const response = await axios.request(options)
        try {
            console.log(response)
        } catch(error) {
            console.log(error)
        }
     }
 
///Upload new Invoice
export async function insertNewInvoice(invoiceId, vendor, invoiceDate, invoiceTotal, processed) {
    const options = {
        method: 'PUT',
            url: backendUrl + '/db/invoices/insert',
        params: {
            invoiceId: invoiceId,
            vendor: vendor,
            invoiceDate: invoiceDate,
            invoiceTotal: invoiceTotal,
            processed: processed
        }
    };
    const response = await axios.request(options)
        try {
            console.log(response)
        } catch(error) {
            console.log(error)
        }
}

///Check When Invoices Last Scraped 
export async function getInvoiceScrapeStatus() {
    const options = {
        method: 'GET',
        url: backendUrl + '/db/status/invoiceScraper'
    }
    const response = await axios.request(options)
        try {
            // console.log(response)
            return response.data
        } catch(error) {
            console.log(error)
        }
}

///Insert New Bike
export async function insertNewBike(color, make, model) {
    const options ={
        method: 'PUT',
        url: backendUrl + '/db/newBike', 
        params: {
            color: color, 
            make: make,
            model: model
        }
    }
    const response = axios.request(options)
        try {
            console.log(response)
        } catch(error) {
            console.log(response)
        }
}

////////// QBP API

///Get product by Sku
export async function getQbpBySku(sku) {
    try {
        const options = {
            method: "GET",
            url: backendUrl + '/QBP/product/sku',
            params: {
                sku: sku
            }
        }
        const response = await axios.request(options)
        return response.data
    } catch(error) {
        console.log(error)
    }
}

/////Invoice Functions

///Get invoices within a date range
export async function getQbpInvoices(endDate, startDate) {
    try {
        const options = {
            method: "GET", 
            url: backendUrl + '/QBP/invoices',
            params: {
                endDate: endDate,
                startDate: startDate
            }
        }
        const response = await axios.request(options)
        return response.data
    } catch(error) {
        console.log(error)
    }
}

///Get QBP Invoice by Invoice Number
export async function getQbpInvoiceByNumber(invoiceNumber) {
    try {
        const options = {
            method: 'GET',
            url: backendUrl + '/QBP/invoices/number',
            params: {
                invoiceNumber: invoiceNumber
            }
        }
        const response = await axios.request(options)
        return response.data
    } catch(error) {
        console.log(error)
    }
}

///Get MSRP from Vendor, passing through vendor and sku
export async function getItemMsrp(vendor, sku) {
    try {
        const options = {
            method: 'GET', 
            url: backendUrl + `/${vendor}/itemMsrp`,
            params: {
                sku: sku
            }
        }
        const response = await axios.request(options)

        return qbpMsrpFromXML(response.data)  
    } catch(error) {
        console.log(error)
    }
}


////////Invoice By Number with Vendor Passthrough
export async function getInvoiceFromVendor(vendor, invoiceNumber) {
    let vendorPath = ''
    switch (vendor) {
        case 'QBP':
            vendorPath = '/QBP/invoices/number'
            break;
        case 'JBI':
            vendorPath = 'JBI/invoices/number'
    }
    try {
        const options = {
            method: 'GET',
            url: backendUrl + vendorPath,
            params: {
                invoiceNumber: invoiceNumber
            }
        }
        const response = await axios.request(options)
        return response.data
    } catch(error) {
        console.log(error)
    }
}