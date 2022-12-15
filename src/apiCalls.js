////Square APIs
import axios from 'axios';

const devServer = 'http://localhost:8000'

//search for Item with string
export async function searchItem(searchString) {
    const options = {
        method: 'GET', 
        url: 'http://localhost:8000/searchItem', 
        params: {
            search: searchString
        }
    };

    const responseBody = await axios.request(options)
    ///Can Retrieve Item Data for Each Item Listed
    const responseObject = {}
    // console.log(responseBody.data)
    Object.values(responseBody.data).forEach((item) => {
        responseObject[item.id] = item.itemData
    })
    return responseObject
}

//Create Catalog Object
export async function createNewCatalogObject() {
    const options = {
        method: 'GET',
        url: 'http://localhost:8000/newCatalogItem',
        params: {}
    }
}




///Puppeteer Node Server

///Load Invoice
export async function LoadInvoice(invoiceUrl) {
    console.log(invoiceUrl)
    const options = {
        method: 'GET',
        url: 'http://localhost:8100/authorizeQBP',
        params: {
            url: invoiceUrl,
            // cookies: cookiesQBP
        }
    }
    const response = await axios.request(options)
        try {
            console.log(response)
            // parseInvoice(response.data)
            return response.data
        } catch(error) {
            console.log(error)
        }
 }

 ////getPrice
 export async function getPrices(invoice) {
    const options = {
        method: 'GET',
        url: 'http://localhost:8100/getPrices',
        params: {
            invoice: invoice
        }
    }
    const response = await axios.request(options)
        try {
            console.log(response)
            return response.data
        } catch(error) {
            console.log(error)
        }
 }

 ///loadJBIInvoices

 export async function loadJBIInvoices() {
     const url = devServer +'/JBI/Invoices'
     console.log(url)
     const options = {
         method: 'GET',
         url: devServer + '/JBI_Invoices',
     }
     const response = await axios.request(options)
        try {
            console.log(response.data)
            return response.data
        } catch(error) {
            console.log(error)
        }
 }


 /////Database
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
 