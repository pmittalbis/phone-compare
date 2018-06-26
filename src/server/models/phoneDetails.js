const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const specsObj = new Schema({
  id: false,
  _id: false,
  name: String,
  value: String,
});
const spec_detailObj = new Schema({
  id: false,
  _id: false,
  category: String,
  specs: [specsObj],
});
const phoneDetailsSchema = new Schema({
  phoneId: Schema.ObjectId,
  title: String,
  img: String,
  img_url: String,
  spec_detail: [spec_detailObj],
  quick_spec: {
    display_size: String,
    display_res: String,
    camera_pixels: String,
    video_pixels: String,
    ram_size: String,
    chipset: String,
    battery_size: String,
    battery_type: String,
  },
});

module.exports = mongoose.model('PhoneDetails', phoneDetailsSchema);
