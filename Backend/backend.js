const JSONBig = require('json-bigint');
const puppeteer = require('puppeteer')
const express = require('express');
const cors = require('cors')
const db = require('./databaseConfig')
require('dotenv').config()



const PORT = 8000
const app = express();

app.use(cors())


const { Client, Envirnment, Environment } = require('square');
const { default: axios } = require('axios');

const client = new Client({
    accessToken: process.env.SQUARE_ACCESS_TOKEN,
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

////////////////////Database Queries
//////////Invoice Table
///Get Invoices
app.get('/db/invoices/getAll', (req, res) => {
    db.query("SELECT * FROM Invoices", (err, result) => {
        if(err) {
            console.log(err)
            return res.send(err)
        } else {
            res.send(result)
        }
    })
})

///Post New Invoice
app.put('/db/invoices/insert', (req, res) => {
    console.log('Backend Attempting to add new invoice')
    const {invoiceId, vendor, invoiceDate, invoiceTotal, processed} = req.query
    db.query(
        `INSERT INTO Invoices (Invoice_ID, Vendor, Invoice_Date, Invoice_Total, Processed) VALUES ('${invoiceId}', '${vendor}', '${invoiceDate}', ${invoiceTotal}, ${processed})`, 
    (err, result) => {
        if (err) {
            console.log(err)
            return res.send(err.message)
        } else {
            console.log(result)
            res.send(result)
        }
    }) 
})
///Change Invoice Processed State

//////////Status Table
app.get('/db/status/invoiceScraper', (req, res) => {
    console.log('Getting Status of Invoice Scraper')
    db.query("SELECT * FROM Status WHERE function = 'invoiceScraper'",
    (err, result) => {
        
        if (err) {
            console.log(err)
            res.send(err)
        } else {
            console.log(result)
            res.send(result)
        }
    })
})

//////////Bike Table
app.get("/db/get", (req, res) => {
    db.query("SELECT * FROM Bikes", (err, result) => {
        if (err) {
            console.log(err)
        }
    res.send(result)
    })
})

app.put("/db/newBike", (req, res) => {
    const color = req.query.color
    const make = req.query.make
    const model = req.query.model
    db.query(
        "INSERT INTO Bikes (bike_ID, color, make, model) VALUES (null, 'White', 'Tesch', 'SR22')",
        (err, result) => {
          if (err) {
            console.log(error);
          } else {
            console.log(result)
            // res.send(result);
          }
        }
      );
    });



/////////////////QBP API
const baseUrlQBP = 'https://api1.qbp.com/api/1'
const authQBPHeader = {}

///Return Product Information by SKU
app.get('/QBP/product/sku', async (req, res) => {
    try {
        const options = {
            method: "GET",
            url: baseUrlQBP + `/product/sku/${req.query.sku}`,
            headers: {authQBPHeader}
        }
        const response = await axios.request(options)
        const responseString = JSONBig.stringify(response.data)
        res.send(responseString)
    } catch(error) {
        console.log(error)
    }   
}
)

/////Invoices
///Return QBP invoices by Date
app.get('/QBP/invoices', async (req, res) => {
    try {
        const options = {
            method: "GET",
            url: baseUrlQBP + '/customer/invoice',
            params: {
                endDate: req.query.endDate,
                startDate: req.query.startDate
            },
            headers: {'X-QBPAPI-KEY': process.env.QBP_ACCESS_TOKEN}
        };
        const response = await axios.request(options)
        const responseString = JSONBig.stringify(response.data)
        res.send(responseString)
    } catch(error) {
        console.log(error)
    }
})

///Return QBP Invoice by Invoice Number
app.get('/QBP/invoices/number', async (req, res) => {
    try {
        const options = {
            method: "GET",
            url: baseUrlQBP + `/customer/invoice/${req.query.invoiceNumber}`,
            headers: {'X-QBPAPI-KEY': process.env.QBP_ACCESS_TOKEN}
        };
        const response = await axios.request(options)
        console.log(response)
        const responseString = JSONBig.stringify(response.data)
        res.send(responseString)
    } catch(error) {
        console.log(error)
        res.send(error)
        }
})


