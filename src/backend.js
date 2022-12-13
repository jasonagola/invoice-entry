const JSONBig = require('json-bigint');
const express = require('express');
const cors = require('cors')
const PORT = 8000
const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}))

const dotenv = require('dotenv');
const { Client, Envirnment, Environment } = require('square');
const { default: axios } = require('axios');
dotenv.config();

const client = new Client({
    accessToken: 'EAAAECtA59bweiwrqwC8v22ykyvKMNabTQhGNrIO8eGMIqYj4-8wnpFkuQadlg54',
    environment: Environment.Production
});


app.listen(PORT, () => console.log(`Square Backend is Running on Port:${PORT}`))

app.get('/listItems', async (req, res) => {
    try {
        const response = await client.catalogApi.listCatalog();
        console.log(response.result)
        res.send(response.result)
    } catch(error) {
        console.log(error)
    }
})

app.get('/searchItem', async (req, res) => {
    try {
        const searchTerm = req.query.search
        console.log(searchTerm)
        console.log(`Searching with "${searchTerm}" from input field`)
        const response = await client.catalogApi.searchCatalogItems({
            textFilter: searchTerm,
            productTypes: [
                'REGULAR'
            ]
        });
        // const resposneString = JSON.stringify(response).result
        const responseString = JSONBig.stringify(response.result.items)
        res.send(responseString)
        console.log(response)
        
    } catch(error) {
        console.log(error)
    }
})

/////Moving functionality to Node puppeteer solution with cookies and 
// app.get('/loadInvoice', async (req, res) => {
    
//     // const invoiceUrl = req.query.invoiceUrl
//     try {
//         console.log('Hello')
//         const invoicehtml = await axios.get('https://www.qbp.com/qbponlinestorefront/account/history/order/detail/0005Z66L?year=2022&month=12&page=1')
//         res.send(invoicehtml.data)
//         // res.send(invoicehtml)
//     } catch(error) {
//         console.log(error)
//     }
// })

