const db = require('../databaseConfig')

///////////////////Database Queries
//////////Invoice Table
///Get Invoices

const getAllDatabaseInvoices = (req, res) => {
    db.query("SELECT * FROM Invoices", (err, result) => {
        if(err) {
            console.log(err)
            return res.send(err)
        } else {
            res.send(result)
        }
    })
}

///Post New Invoice
// app.put('/db/invoices/insert', (req, res) => {
const addInvoice = (req, res) => {
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
}
///Change Invoice Processed State

//////////Status Table
// app.get('/db/status/invoiceScraper', 
const getInvoiceScraperStatus = (req, res) => {
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
}

//////////Bike Table
// app.get("/db/get", 
const getBikes = (req, res) => {
    db.query("SELECT * FROM Bikes", (err, result) => {
        if (err) {
            console.log(err)
        }
    res.send(result)
    })
}

// app.put("/db/newBike", 
const addBike = (req, res) => {
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
    }


module.exports = {
    getAllDatabaseInvoices, 
    addInvoice, 
    getInvoiceScraperStatus,
    getBikes, 
    addBike

}