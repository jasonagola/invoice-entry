const dotenv = require('dotenv');
const { Client, Envirnment, Environment } = require('square')
dotenv.config();

const client = new Client({
    accessToken: process.env.SQUARE_ACCESS_TOKEN,
    environment: Environment.Sandbox
});

module.exports = client