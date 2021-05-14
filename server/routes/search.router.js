const express = require('express');
const router = express.Router();
const axios = require('axios');
const { response } = require('express');
const request = require('request');

// set up server file to look at the .env file
require('dotenv').config();

const GIPHY_KEY = process.env.GIPHY_API_KEY;

// router.get('/', (req, res) => {
//     console.log(req.body);
//     axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${GIPHY_KEY}&q="${req.body}`)
//     .then(response => {
//         console.log(`Data from giphy:`, response.data);
//         res.send(response.data);
//     })
//     .catch(error => {
//         console.log(`Error getting search from giphy`, error);
//         res.sendStatus(500);
//     })
// })

router.post('/', (req, res, next) => {
    console.log(req.body.query);
    const query = req.body.query;
    const url = `http://api.giphy.com/v1/gifs/search?api_key=${GIPHY_KEY}&limit=20&q="${query}"`;
    console.log(url);
    request.get(url, (err, response, body) => {
      if(err) { console.error(err) }
  
      body = JSON.parse(body);
      //console.log(response.body);
  
      res.send(response.body);
    });
  });


module.exports = router;