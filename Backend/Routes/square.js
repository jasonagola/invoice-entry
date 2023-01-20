const express = require('express')
const router = express.Router();
const squareController = require('../controllers/squareController')

router.route('/items')
    // .get('/searchItems', squareController.searchItems)
    // .get('/listAllItems', squareController.listAllItems)
    // .post('/createItem', squareController.createItem)


module.exports = router