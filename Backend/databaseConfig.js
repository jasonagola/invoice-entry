const mysql = require('mysql')

const db = mysql.createPool({
    connectionLimit: 10,
    host: db_host,
    user: db_user,
    password: db_password,
    database: db_database
});

db.on('error', function (err) {
    console.log('caught this error: ' + err.toString());
});

module.exports = db