const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const phonesSchema = new Schema({
  name: String,
  image: String,
  description: String,
  url: String,
  brandId: Schema.ObjectId,
});

module.exports = mongoose.model('Phones', phonesSchema);
  