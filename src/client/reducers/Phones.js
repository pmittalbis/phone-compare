import { ADD_TO_COMPARE, GET_PHONES, REMOVE_FROM_COMPARE } from '../constants/ActionTypes.js';
import { toast } from 'react-toastify';

let phones = [
  {
    "id": 1,
    "model": "Samsung Galaxy J7 (2018)",
    "Release date": "June 2018",
    "Form factor": "Touchscreen",
    "Screen size (inches)": "5.50",
    "Touchscreen": "Yes",
    "Resolution": "720x1080 pixels",
    "Expandable storage": "Yes",
    "Expandable storage type": "microSD",
    "Rear camera": "13-megapixel",
    "Rear Flash": "LED",
    "Front camera": "13-megapixel",
    "Operating System": "Android",
    "Wi-Fi": "Yes",
    "Bluetooth": "Yes",
    "Number of SIMs": "2",
    "SIM 1": "",
    "SIM Type": "Nano-SIM",
    "GSM/CDMA": "GSM",
    "3G": "Yes",
    "4G/ LTE": "Yes",
    "SIM 2": "",
    "Accelerometer": "Yes",
    "image": "https://cdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-j7-2018-.jpg"
  },
  {
    "model": "Sony Xperia XZ2 Premium",
    "Release date": "April 2018",
    "Form factor": "Touchscreen",
    "Screen size (inches)": "5.80",
    "Touchscreen": "Yes",
    "Resolution": "2160x3840 pixels",
    "Expandable storage": "Yes",
    "Expandable storage type": "microSD",
    "Rear camera": "19-megapixel",
    "Rear Flash": "Dual LED",
    "Front camera": "13-megapixel",
    "Operating System": "Android 8.0",
    "Wi-Fi": "Yes",
    "Bluetooth": "Yes, v 5.00",
    "Number of SIMs": "2",
    "SIM 1": "",
    "SIM Type": "Nano-SIM",
    "GSM/CDMA": "GSM",
    "3G": "Yes",
    "4G/ LTE": "Yes",
    "SIM 2": "",
    "Accelerometer": "Yes",
    "image": "https://cdn2.gsmarena.com/vv/pics/sony/sony-xperia-xz2-premium-1.jpg",
    "Dimensions (mm)": "158.00 x 80.00 x 11.90",
    "Weight (g)": "236.00",
    "Battery capacity (mAh)": "3540mAh",
    "Removable battery": "No",
    "Colours": "Chrome Black, Chrome Silver",
    "Processor": "octa-core",
    "Processor make": "Qualcomm Snapdragon 845",
    "RAM": "6GB",
    "Internal storage": "64GB",
    "Expandable storage up to (GB)": "400",
    "Front Flash": "No",
    "Wi-Fi standards supported": "802.11 a/g/n/ac",
    "GPS": "Yes",
    "NFC": "Yes",
    "USB OTG": "Yes",
    "Supports 4G in India (Band 40)": "Yes",
    "Compass/ Magnetometer": "Yes",
    "Proximity sensor": "Yes",
    "Gyroscope": "Yes"
  },
  {
    "model": "HTC U12+",
    "Release date": "May 2018",
    "Form factor": "Touchscreen",
    "Screen size (inches)": "6.00",
    "Touchscreen": "Yes",
    "Resolution": "1440x2880 pixels",
    "Expandable storage": "Yes",
    "Expandable storage type": "microSD",
    "Rear camera": "12-Ultrapixel",
    "Rear Flash": "Dual LED",
    "Front camera": "8-megapixel",
    "Operating System": "Android 8.0",
    "Wi-Fi": "Yes",
    "Bluetooth": "Yes, v 5.00",
    "Number of SIMs": "2",
    "SIM 1": "",
    "SIM Type": "Nano-SIM",
    "GSM/CDMA": "GSM",
    "3G": "Yes",
    "4G/ LTE": "Yes",
    "SIM 2": "",
    "Accelerometer": "Yes",
    "image": "https://cdn2.gsmarena.com/vv/bigpic/htc-u12-plus-.jpg",
    "Dimensions (mm)": "156.60 x 73.90 x 9.70",
    "Weight (g)": "188.00",
    "Battery capacity (mAh)": "3500",
    "Removable battery": "No",
    "Colours": "Ceramic Black, Flame Red, Translucent Blue",
    "Pixels per inch (PPI)": "537",
    "Processor": "2.8GHz octa-core",
    "Processor make": "Qualcomm Snapdragon 845",
    "RAM": "6GB",
    "Internal storage": "64GB",
    "Expandable storage up to (GB)": "2000",
    "Front Flash": "No",
    "Skin": "HTC Sense",
    "Wi-Fi standards supported": "802.11 a/b/g/n/ac",
    "GPS": "Yes",
    "NFC": "Yes",
    "Supports 4G in India (Band 40)": "Yes",
    "Compass/ Magnetometer": "Yes",
    "Proximity sensor": "Yes",
    "Ambient light sensor": "Yes",
    "Gyroscope": "Yes",
    "Barometer": "No",
    "Temperature sensor": "No"
  },
  {
    "model": "Moto Z3 Play",
    "Release date": "June 2018",
    "Form factor": "Touchscreen",
    "Screen size (inches)": "6.01",
    "Touchscreen": "Yes",
    "Resolution": "1080x2160 pixels",
    "Expandable storage": "Yes",
    "Expandable storage type": "microSD",
    "Rear camera": "12-megapixel",
    "Rear Flash": "No",
    "Front camera": "8-megapixel",
    "Operating System": "Android 8.1 Oreo",
    "Wi-Fi": "Yes",
    "Bluetooth": "Yes, v 5.00",
    "Number of SIMs": "2",
    "SIM 1": "",
    "SIM Type": "Nano-SIM",
    "GSM/CDMA": "GSM",
    "3G": "Yes",
    "4G/ LTE": "Yes",
    "SIM 2": "",
    "Accelerometer": "Yes",
    "image": "https://cdn2.gsmarena.com/vv/bigpic/motorola-moto-z3-play-.jpg",
    "Dimensions (mm)": "156.50 x 76.50 x 6.75",
    "Weight (g)": "156.00",
    "Battery capacity (mAh)": "3000",
    "Colours": "Deep Indigo",
    "Processor": "1.8GHz octa-core",
    "Processor make": "Qualcomm Snapdragon 636",
    "RAM": "4GB",
    "Internal storage": "32GB",
    "Expandable storage up to (GB)": "200",
    "Wi-Fi standards supported": "802.11 a/b/g/n/ac",
    "GPS": "Yes",
    "NFC": "Yes",
    "Compass/ Magnetometer": "Yes",
    "Proximity sensor": "Yes",
    "Ambient light sensor": "Yes",
    "Gyroscope": "Yes"
  }
];

var compareList = [];
export const Phones = (state = { phones, compareList } , action) => {
  function notify(msg) {
    toast(msg);
  }
  switch(action.type) {

    case ADD_TO_COMPARE:
      if (state.compareList.length === 2) {
        return notify('You can compare 2 phones at once!');
      } else if (state.compareList.includes(action.payload)) {
        return notify('You are trying to compare same phone!')
      }
      var temp = [...state.compareList];
      temp.push(action.payload);
        return {
          ...state,
          compareList: temp,
      }

    case REMOVE_FROM_COMPARE:
      var temp = [...state.compareList];
      var index = temp.indexOf(action.payload);
      temp.splice(index, 1);
      return {
        ...state,
        compareList: temp,
      }
      
    default:
      return state;
  }
}
