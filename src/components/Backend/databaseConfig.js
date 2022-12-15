const mysql = require('mysql')

const db = mysql.createConnection({
    host:'191.101.79.52',
    user: 'u844101523_localbikeshop',
    password: 'PizzaParty69!',
    database: 'u844101523_bikeShopdb'
})

module.exports = db