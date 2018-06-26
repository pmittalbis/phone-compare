const mongoose = require('mongoose');
const express = require('express');
const Brands = require('./models/brands.js');
const Phones = require('./models/phones.js');
const PhoneDetails = require('./models/phoneDetails.js');

mongoose.connect('mongodb://localhost:27017/phone-compare');
mongoose.connection.once('open', () => {
  console.log('connected to db...');
});

const server = express();
// server.use(cors());
const PORT = 5003;

async function count() {
  var count = 0;
  var brands = await Brands.find();
  console.log(brands[0]);
  for (var i = 0; i < brands.length; i++) {
    count += brands[i].devices;
  }
  var phones = await Phones.find();
  var details = await PhoneDetails.find();
  console.log("Total brands = ", brands.length);
  console.log("Total phones = ", phones.length);
  console.log("Total details = ", details.length);
  console.log("Total devices = ", count);
}
count();
// 9169 devices
server.listen(PORT, () => { console.log(`Server is now running at Port ${PORT}`); });
