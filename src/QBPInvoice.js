import React, {useState} from 'react';
import axios from 'axios'

const cheerio = require('cheerio')
const cors = require('cors')




function QBPInvoice() {

    const [urlToSearch, setUrlToSearch] = useState('')

    const options = {
        method: 'GET', 
        url: 'http://localhost:8000/loadInvoice', 
        params: {
            invoiceURL: urlToSearch
        }
    };

///Add check that page loaded is invoice
///Add check that page loaded hasn't already been created?? Might need purchaseOrder verification
const handleChange = (e) => {
    setUrlToSearch(e.target.value)
    console.log(urlToSearch)
}

const handleClick = async () => {
    const invoiceHtml = await axios.request(options)
    console.log(invoiceHtml)
    // const $ = cheerio.load(invoicePage)
}


    return (

        <div>
            <p>https://www.qbp.com/qbponlinestorefront/account/history/order/detail/0005Z66L?year=2022&month=12&page=1</p>
            <input id='urlToSearch' placeholder='Enter URL of invoice page' onChange={handleChange}></input>
            <button onClick={handleClick}>Click To See HTML Row Elements</button>
        </div>
    )
}

export default QBPInvoice