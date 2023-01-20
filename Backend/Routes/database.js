const express = require('express')
const router = express.Router();
const databaseController = require('../Controllers/databaseController')

router.route('./db/invoices')
    console.log('You have hit the db route')
    .get('/getAll', databaseController.getAllDatabaseInvoices)




module.exports = router