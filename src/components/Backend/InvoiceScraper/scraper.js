const puppeteer = require('puppeteer')
const express = require('express')
const cors = require('cors')
PORT = 8100;

const app = express();
app.use(cors({
    origin: 'http://localhost:3000'
}))

app.listen(PORT, () => console.log(`Scraping server now running on Port:${PORT}`))

app.get('/screenshot', async (req, res) => {
    try { 
        const browser = await puppeteer.launch({headless: false});
        const page = await browser.newPage();
        await page.goto('https://www.qbp.com/qbponlinestorefront/login')
        await page.waitForSelector('#username')
        await page.type('#username', 'LocalBikeShop')
        await page.type('#password', 'PizzaParty69!')
        await page.click('.btn.btn-primary.form-control')
        await page.goto(url)
    } catch(error) {
        console.log(error)
    }
})


app.get('/authorizeQBP', async (req, res) => {
    console.log('Authorizing at QBP.com')
    const invoiceURL = req.query.url
    console.log(invoiceURL)
    try { 
        const browser = await puppeteer.launch({headless: false});
        const page = await browser.newPage();
        await page.goto('https://www.qbp.com/qbponlinestorefront/login')
        await page.waitForSelector('#username')
        await page.type('#username', 'LocalBikeShop')
        await page.type('#password', 'PizzaParty69!')
        await page.click('.btn.btn-primary.form-control')
        await page.waitForSelector('#sectionNav')
        await page.goto(invoiceURL)
        const pageData = await page.evaluate(() => document.querySelector('*').outerHTML)
        console.log(pageData)
        res.send(pageData)
        await browser.close()

    } catch(error) {
        console.log(error)
    }
})

app.get('/getPrices', async (req, res) => {
    console.log('Finding Price of Item')
    const url = req.query.url
    try { 
        const browser = await puppeteer.launch({headless: false});
        const page = await browser.newPage();
        await page.goto('https://www.qbp.com/qbponlinestorefront/login')
        await page.waitForSelector('#username')
        await page.type('#username', 'LocalBikeShop')
        await page.type('#password', 'PizzaParty69!')
        await page.click('.btn.btn-primary.form-control')
        await page.waitForSelector('#sectionNav')
        await page.goto('https://www.qbp.com/qbponlinestorefront' + url)
        const itemMSRP = await page.evaluate(() => document.querySelector('#productPricing .colx-xs-5 .col-md-6 .text-right'))
        console.log(itemMSRP)
        res.send(itemMSRP)
    } catch(error) {
        console.log(error)

    }
})

// app.get('/getPrices', async (req, res) => {
//     console.log('getPrices baby')
//     const invoice = req.query.invoice
//     console.log(invoice)

//     async function urlLoad(page, itemUrl) {
//         await page.goto(itemUrl)
//         console.log('We went there')
//     }

//     try { 
//         const browser = await puppeteer.launch({headless: false});
//         const page = await browser.newPage();
//         await page.goto('https://www.qbp.com/qbponlinestorefront/login')
//         await page.waitForSelector('#username')
//         await page.type('#username', 'LocalBikeShop')
//         await page.type('#password', 'PizzaParty69!')
//         await page.click('.btn.btn-primary.form-control')
//         await page.waitForSelector('#sectionNav')
//         console.log('We made it here')
//         const itemMSRPs = {}
//         console.log('And also here')
//         Object.values(invoice).forEach(async (item) => {
//             const url = item.url
//             const itemUrl = `https://www.qbp.com/qbponlinestorefront${url}`
//             const itemMSRP = await page.evaluate(() => document.querySelector('#productPricing .colx-xs-5 .col-md-6 .text-right')).textContent
//             console.log('looping away')
//             itemMSRPs[item.id] = itemMSRP  
//         })
//         await browser.close()
//         console.log(itemMSRPs)
//         res.send(itemMSRPs)
//     } catch(error) {
//         console.log(error)
//         res.send(error)
//     }
// })

