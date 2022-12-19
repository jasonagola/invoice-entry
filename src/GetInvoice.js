import axios from 'axios';
import React, { useEffect, useState } from 'react';
import store from './features/store'
import {LoadInvoice} from './utils/apiCalls'
import { loadInvoice } from './features/loadedInvoice/loadedInvoiceSlice';
import searchResultSlice from './features/searchResults/searchResultSlice';
import InvoiceDisplay from './InvoiceDisplay';
const cheerio = require('cheerio')


function GetInvoice() {
    const [url, setUrl] = useState('')
    const [invoiceHTML, setInvoiceHTML] = useState()
    const [invoiceParsed, setInvoiceParsed] = useState()
    const [cookiesQBP, setCookiesQBP] = useState()

    const handleChange = (e) => {
        setUrl(e.target.value)
    }

    ///Obtain Session Cookies for repeatRequest
    
    // async function authorizeQBP(e) {
    //     console.log(e.target.id)
    //     const options = {
    //         method: 'GET', 
    //         url: `http://localhost:8100/authorizeQBP`, 
    //         params: {
    //             url: url
    //         }
    //     };
    //     const response = await axios.request(options)
    //         try {
    //             setCookiesQBP(response.data)
    //         } catch(error) {
    //             console.log(error)
    //         }

    // }


    ///////Moved function the apiCall store
    // async function LoadInvoice() {
    //     console.log(url)
    //     const options = {
    //         method: 'GET',
    //         url: 'http://localhost:8100/authorizeQBP',
    //         params: {
    //             url: url,
    //             // cookies: cookiesQBP
    //         }
    //     }
    //     const response = await axios.request(options)
    //         try {
    //             console.log(response)
    //             parseInvoice(response.data)
    //         } catch(error) {
    //             console.log(error)
    //         }
    //  }

     async function parseInvoice() {
        const response = await LoadInvoice(url)
        const $ = cheerio.load(response)
        const invoiceData = {}
        const itemList = $('.row .shipment-row')
        for (let i = 0; i<itemList.length; i++) {
            const itemName = itemList[i].children[3].children[0].data
            const href = itemList[i].children[1].children[1].attribs.href
            const itemID = itemList[i].children[1].children[1].children[0].data
            const numberOfItems = itemList[i].children[5].children[0].data
            const unitCost = itemList[i].children[9].children[0].data
            const invoiceItem = {
                id: itemID,
                name: itemName,
                url: href, 
                numberOrdered: numberOfItems.replace(/[^-.0-9]/g,''),
                unitCost: unitCost.replace(/[^-.0-9]/g,''),
                inSquare: false
            }
            invoiceData[itemID] = invoiceItem
        }
        
        setInvoiceParsed(invoiceData)
        console.log(invoiceData)
    }
    
    useEffect(() => {
        store.dispatch(loadInvoice(invoiceParsed), [invoiceParsed])
    })


    return (
        <div>
            <h1>Invoice Requests</h1>
            {/* <p>https://www.qbp.com/qbponlinestorefront/account/history/order/detail/0005Z66L?year=2022&month=12&page=1</p> */}
            <input onChange={handleChange} placeholder='url to load'></input>
            {/* <button id='loadInvoice' onClick={LoadInvoice}>ScreenShot Requests</button> */}

            <button id='authorizeQBP' onClick={parseInvoice}>Get Authorization At QBP</button>
            <InvoiceDisplay invoiceParsed={invoiceParsed}/>
        </div>
    )
}

export default GetInvoice