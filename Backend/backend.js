const JSONBig = require('json-bigint');
const puppeteer = require('puppeteer')
const express = require('express');
const cors = require('cors')

require('dotenv').config()
const squareRoute = require('./Routes/square')
const dbRoute = require('./Routes/database')


const PORT = 8000
const app = express();

app.use(cors())

const { default: axios } = require('axios');



app.listen(PORT, () => console.log(`Square Backend is Running on Port:${PORT}`))
app.use('/square', squareRoute)
app.use('/db', dbRoute)


app.get('/', (req, res) => {
    res.send('You have hit the backend')
})

