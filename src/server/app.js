const express = require('express');
const axios = require('axios');
const cors = require('cors');
const restify = require('restify');
const cheerio = require('cheerio');
const request = require('request');
const mongoose = require('mongoose');
const Brands = require('./models/brands.js');
const Phones = require('./models/phones.js');
const PhoneDetails = require('./models/phoneDetails.js');
const corsMiddleware = require('restify-cors-middleware');

mongoose.connect('mongodb://localhost:27017/phone-compare');
mongoose.connection.once('open', () => {
  console.log('connected to db...');
});

const server = express();
server.use(cors());
const PORT = 5000;

server.get('/brands', function(req, res) {
  Brands.find({}, (err, data) => {
    if (err) { console.log('Error ', err); }
    res.send(data);
  });
})

server.get('/phones', function(req, res) {
  Phones.find({}, (err, data) => {
    if (err) { console.log('Error ', err); }
    res.send(data);
  });
})

server.get('/details', async function(req, res) {
  const data = await PhoneDetails.find({});
  res.send(data);
})

server.listen(PORT, () => { console.log(`Server is now running at Port ${PORT}`); });
