const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const brandsSchema = new Schema({
  name: String,
  devices: Number,
  url: String,
});

module.exports = mongoose.model('Brands', brandsSchema);
