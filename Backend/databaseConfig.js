const mysql = require('mysql')
require('dotenv').config()

const db = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

db.on('error', function (err) {
    console.log('caught this error: ' + err.toString());
});

module.exports = db