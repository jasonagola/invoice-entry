//////Check Database for Dashboard Parameters
///Check Last Date Invoices Scraped

const { getInvoiceScrapeStatus } = require("./apiCalls");

export async function checkInvoiceScrapeStatus() {
    const response = await getInvoiceScrapeStatus()
    console.log(response)
}