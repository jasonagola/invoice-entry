const express = require('express')
const router = express.Router();
const databaseController = require('../controllers/databaseController')

router.route('/invoices')
    .get(databaseController.getAllDatabaseInvoices)
    .post(databaseController.addInvoice)


    


router.route('/bikes')
    // .get('/getAll', databaseController.getBikes)
    // .post('/add', databaseController.addBike)


module.exports = router