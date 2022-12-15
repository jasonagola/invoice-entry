const JSONBig = require('json-bigint');
const puppeteer = require('puppeteer')
const express = require('express');
const cors = require('cors')
const db = require('./databaseConfig')
require('dotenv').config()



const PORT = 8000
const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}))


const { Client, Envirnment, Environment } = require('square');
const { default: axios } = require('axios');

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


///////Scraping
app.get('/JBI/Invoices', async (req, res) => {
    try { 
        const browser = await puppeteer.launch({headless: false});
        const page = await browser.newPage();
        await page.goto('https://www.jbi.bike/site/login.php')
        await page.waitForSelector('#fld1')
        await page.type('#fld1', '120208')
        await page.type('#fld2', 'localbikeshopnfk')
        await page.type('#fld3', 'FuckTrek2406')
        await page.click("#fld4")
        await page.click('.checkbox input')
        await page.click('https://www.jbi.bike/site/order_history_received.php')
        // await page.click('.btn.btn-primary.form-control')
        // await page.goto(url)
        await browser.close()
    } catch(error) {
        console.log(error)
    }
})

///////Database Queries
app.get("/db/get", (req, res) => {
    db.query("SELECT * FROM posts", (err, result) => {
        if (err) {
            console.log(err)
        }
    res.send(result)
    })
})






////Put Need to Create Form with dynamic entry for multiple variations
// app.put('/createCatalogObject', async (req, res) => {
//     try {
//         const response = await client.catalopApi.upsertCatalogObject({
//             idempotencyKey: '///////////',
//             object: {
//                 type: 'ITEM',
//                 id: '#New_Item',
//                 itemData: {

//                 }
//             }
//         })
//     }
// })

