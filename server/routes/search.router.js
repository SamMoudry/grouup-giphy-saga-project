const express = require('express');
const router = express.Router();
const axios = require('axios');
const { response } = require('express');

// set up server file to look at the .env file
require('dotenv').config();

const GIPHY_KEY = process.env.GIPHY_API_KEY;

app.get('/search', (req, res) => {
    axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${GIPHY_KEY}`)
    .then(response => {
        console.log(`Data from giphy:`, response.data);
        res.send(response.data);
    })
    .catch(error => {
        console.log(`Error getting search from giphy`, error);
        res.sendStatus(500);
    })
})

module.exports = router;