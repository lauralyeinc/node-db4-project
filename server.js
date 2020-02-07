const express = require('express');

const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send(`
    <h1> 👸 DB Project 4 🐝 </h1> `);
});

module.exports = server; 