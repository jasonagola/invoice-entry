////Square APIs
import axios from 'axios';


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
 export async function getPrice(itemUrl) {
    console.log(itemUrl)
    const options = {
        method: 'GET',
        url: 'https://localhost:8100/getPrice',
        params: {
            itemUrl: itemUrl
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