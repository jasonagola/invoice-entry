const mysql = require('mysql')

const db = mysql.createPool({
    connectionLimit: 10,
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE
});

db.on('error', function (err) {
    console.log('caught this error: ' + err.toString());
});

module.exports = db