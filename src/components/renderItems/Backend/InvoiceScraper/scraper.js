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

app.get('/getPrice', async (req, res) => {
    console.log('Finding Price of Item')
    const itemUrl = req.query.link
    try { 
        const browser = await puppeteer.launch({headless: false});
        const page = await browser.newPage();
        await page.goto('https://www.qbp.com/qbponlinestorefront/login')
        await page.waitForSelector('#username')
        await page.type('#username', 'LocalBikeShop')
        await page.type('#password', 'PizzaParty69!')
        await page.click('.btn.btn-primary.form-control')
        await page.waitForSelector('#sectionNav')
        await page.goto('https://www.qbp.com/qbponlinestorefront/' + itemUrl)
        const pageData = await page.evaluate(() => document.querySelector('#productPricing .colx-xs-5 .col-md-6 .text-right'))
        console.log(pageData)
    } catch(error) {
        console.log(error)

    }

})