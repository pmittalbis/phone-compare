// for(i=1; i<list.length; i++){
//   for(j=1; j<list[i].children[0].children.length; j++){
//     for(k=1; k<list[i].children[0].children[j].children.length; k++){
//       tempObj[i] = { list[i].children[0].children[j].children[k].innerText: list[i].children[0].children[j].children[k+1].innerText };
//     }
//   }
// }
// list[0].children[0].children[0].innerText


// for(i=0; i<list.length; i++){
//   for(j=0; j<list[i].children[0].children.length; j++){
//     for(k=0; k<list[i].children[0].children[j].children.length; k++){
//       var key = list[i].children[0].children[j].children[k].innerText;
//       var obj = {};
//       var value = list[i].children[0].children[j].children[++k].innerText;
//       obj[key] = value;
//       big.key = value;
//       tempArray.push(obj);
//     }
//   }
// }

// var phones = [];
// var phone = {
//   'model': null,
//   'Release date': null,
//   'Form factor': null,
//   'Screen size (inches)': null,
//   'Touchscreen': null,
//   'Resolution': null,
//   'Expandable storage': null,
//   'Expandable storage type': null,
//   'Rear camera': null,
//   'Rear Flash': null,
//   'Front camera': null,
//   'Operating System': null,
//   'Wi-Fi': null,
//   'Bluetooth': null,
//   'Number of SIMs': null,
//   'SIM 1': null,
//   'SIM Type': null,
//   'GSM/CDMA': null,
//   '3G': null,
//   '4G/ LTE': null,
//   'SIM 2': null,
//   'SIM Type': null,
//   'GSM/CDMA': null,
//   '3G': null, 
//   '4G/ LTE': null,
//   'Accelerometer': null,
//   'image': null,
// };
// phone.model = heading.innerText;
// phone.image = img.src;
// for(i=1; i<list.length; i++){
//   for(j=0; j<list[i].children[0].children.length; j++){
//     for(k=0; k<list[i].children[0].children[j].children.length; k++){
//       var key = list[i].children[0].children[j].children[k].innerText;
//       var value = list[i].children[0].children[j].children[++k].innerText;
//       phone[key] = value;
//     }
//   }
// }
// phones.push(phone);
// copy(phone);

const express = require('express');
const axios = require('axios');
// const cors = require('cors');
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
// server.use(cors());
const PORT = 5000;

var URI = "https://www.gsmarena.com";

const cors = corsMiddleware({
    preflightMaxAge: 5, //Optional 
    origins: ['*'],
})

// Get All Phone Brands Maker from GSM ARENA
const phoneBrands = async (req, res, next) => {
  await request({
      url: URI + '/makers.php3',
      headers: {
          "User-Agent": "request"
      }
  }, (error, response, html) => {
      if (!error) {
        $ = cheerio.load(html)
        let json = [];
        let brands = $('table').find('td')
        brands.each((i, el) => {
          let brand = {
              name: $(el).find('a').text().replace(' devices', '').replace(/[0-9]/g, ""),
              devices: $(el).find('span').text().replace(' devices', ''),
              url: $(el).find('a').attr('href')
          }
          json.push(brand);
          Brands.findOne({name: brand.name}, (err, oldBrand) => {
            if (oldBrand && !err) {
              //dont save
              console.log('Brands already exist.');
              console.log('oldBrand  ', oldBrand);
              phoneBrand(oldBrand.url, oldBrand.id);
            } else {
              const newBrand = new Brands({
                name: brand.name,
                devices: brand.devices,
                url: brand.url,
              });
              newBrand.save((err, savedBrand) => {
                if (err) { console.log('Error ', err); }
                if (savedBrand) {
                  console.log("savedBrand", savedBrand.id);
                  phoneBrand(newBrand.url, newBrand.id);
                  console.log(savedBrand);
                } else {
                  console.log('Brands not being saved!')
                }
              });
            }
          });
        })
      } else {
        console.log("Error failed fetching source");
      }
  })
};
phoneBrands();

const phoneBrand = async (url, id, req, res, next) => {
  console.log("id phone = ", id);
  console.log("url phone = ", url);
  await request({
    url: URI + '/' + url,
    headers: {
        "User-Agent": "request"
    }
  }, (error, response, html) => {
    if (!error) {
      $ = cheerio.load(html)
      let json = [];

      // Get all list phone
      let phones = $('.makers').find('li')
      phones.each((i, el) => {
        let phone = {
          name: $(el).find('span').text(),
          img: $(el).find('img').attr('src'),
          url: $(el).find('a').attr('href'),
          description: $(el).find('img').attr('title')
        }
        json.push(phone);
        Phones.findOne({name: phone.name}, (err, oldPhone) => {
          if (oldPhone && !err) {
            // dont save
            console.log('Phones already exist.');
            // console.log('oldPhone ', oldPhone);
            phoneDetail(oldPhone.url, oldPhone.id)
          } else {
            var newPhone = new Phones({
              name: phone.name,
              image: phone.img,
              description: phone.description,
              url: phone.url,
              brandId: id,
            });
            newPhone.save((err, savedPhone) => {
              if (err) { console.log('Error ', err); }
              if (savedPhone) {
                phoneDetail(newPhone.url, newPhone.id)
                // console.log('savedPhone ', savedPhone)
              } else {
                console.log('Phone not saved!');
              }
            })
          }
        });
      })
      // get next and prev page link
      let nextPage = $('a.pages-next').attr('href');
      let prevPage = $('a.pages-prev').attr('href');
      console.log(json);
      let data = {
        data: json,
        next: nextPage,
        prev: prevPage
      }
    } else {
      console.log("Error failed fetching source");
    }
  })
};

// Get phone detail
const phoneDetail = async (url, id, req, res, next) => {
  console.log("id details = ", id);
  console.log("url details = ", url);
  await request({
    url: URI + '/' + url,
    headers: {
        "User-Agent": "request"
    }
}, function (error, response, html) {
    if (!error) {
      $ = cheerio.load(html)
      let json = [];

      // Get phone detail
      let display_size = $('span[data-spec=displaysize-hl]').text();
      let display_res = $('div[data-spec=displayres-hl]').text();
      let camera_pixels = $('.accent-camera').text();
      let video_pixels = $('div[data-spec=videopixels-hl]').text();
      let ram_size = $('.accent-expansion').text();
      let chipset = $('div[data-spec=chipset-hl]').text();
      let battery_size = $('.accent-battery').text();
      let battery_type = $('div[data-spec=battype-hl]').text();

      let quick_spec = {
        display_size: display_size,
        display_res: display_res,
        camera_pixels: camera_pixels,
        video_pixels: video_pixels,
        ram_size: ram_size,
        chipset: chipset,
        battery_size: battery_size,
        battery_type: battery_type
      }
      // console.log('quick_spec', quick_spec);

      let title = $('.specs-phone-name-title').text();
      let img = $('.specs-photo-main a img').attr('src');
      let img_url = $('.specs-photo-main a').attr('href');

      let specNode = $('table')
      let spec_detail = []
      specNode.each((i, el) => {
        let specList = []
        let category = $(el).find('th').text();
        let specN = $(el).find('tr')
        specN.each((index, ele) => {
          let a = {
            name: $('td.ttl', ele).text(),
            value: $('td.nfo', ele).text()
          }
          specList.push(a)
          // console.log('a>>', a)
        });
        // console.log('specList>>', specList);

        spec_detail.push({
          category: category,
          specs: specList
        })
      });
      // console.log('spec_detail', spec_detail);
      // get next and prev page link


      data = {
        title: title,
        img: img,
        img_url: img_url,
        spec_detail: spec_detail,
        quick_spec: quick_spec
      }
      console.log(spec_detail);
      PhoneDetails.findOne({title: title}, (err, oldDetail) => {
        if (oldDetail && !err) {
          //dont save
          console.log('Details already exist.');
          console.log('Details ', oldDetail);
        } else {
          const newDetails = new PhoneDetails({
            phoneId: id,
            title: title,
            img: img,
            img_url: img_url,
            spec_detail: spec_detail,
            quick_spec: quick_spec,
          });
          newDetails.save((err, savedDetail) => {
            if (err) {
              console.log('Error ', err);
            } else {
              console.log('data', savedDetail.title);
            }
          });
        }
      });
    } else {
      console.log("Error failed fetching source");
    }
  })
};

server.listen(PORT, () => { console.log(`Server is now running at Port ${PORT}`); });
