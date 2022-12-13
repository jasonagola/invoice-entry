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
        // await page.goto(req.query.url)
        // const screenShot = await page.screenshot({
        //         fullPage: true
        //     });
        // await browser.close();
        // res.send(screenShot)
        // console.log(screenShot)
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
        await page.waitForSelector('.row .shipment-row')
        await page.waitForTimeout(4000)
        const itemList = await page.evaluate(() => {
            Array.from(document.querySelectorAll('.row .shipment-row .col-xs-1 a')).forEach((el) => {console.log(el.text)})
        })
        // await page.evaluate(() => {
        //     const itemList = Array.from(document.querySelectorAll('.row .shipment-row .col-xs-1 a').map(el => el.innerText))
        //     return itemList

        // })
       
        // await page.evaluate(() => {
        //     const rows = document.querySelectorAll('.row.shipment-row'), 
        //     rows.forEach((row) => {
        //         const item = {
        //             id: row.querySelector('.col-xs-1 a').text
        //         }
        //         return item
        //     })
        //     itemList.push(item)
        // })
        // const itemInfo = await rows.map((row) => row.querySelector('a .col-xs-1'))
        // const rows = await page.evaluate(() => Array.from(document.querySelectorAll('.row.shipment-row')))
            // const id = row.querySelector('a .col-xs-1 href')
            // items[id] = row.querySelector('.col-xs-1')
        // const itemList = shipmentRows.map((item) => {
        //     document.querySelector('.')
        // })

        // const pageData = await page.evaluate(() => document.querySelector('*').outerHTML)
        console.log(itemList)
        res.send(itemList)
        await browser.close()
        // const cookiesQBP = await page.cookies()
        // console.log(cookiesQBP)
        // res.send(cookiesQBP)
        
        // await page.goto(req.query.url)
        // const screenShot = await page.screenshot({
        //         fullPage: true
        //     });
        // await browser.close();
        // res.send(screenShot)
        // console.log(screenShot)
    } catch(error) {
        console.log(error)
    }
})



////Creating visuals for page loaded
// async function getSreenshot() {
//     const browser = await puppeteer.launch({headless:false})
//     const page = await browser.newPage()

//     await page.goto(url)

//     const screenShot = await page.screenshot({
//         path: "./",
//         type: "png",
//         fullPage: true
//     })
// }

