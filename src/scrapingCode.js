for(i=1; i<list.length; i++){
  for(j=1; j<list[i].children[0].children.length; j++){
    for(k=1; k<list[i].children[0].children[j].children.length; k++){
      tempObj[i] = { list[i].children[0].children[j].children[k].innerText: list[i].children[0].children[j].children[k+1].innerText };
    }
  }
}
list[0].children[0].children[0].innerText


for(i=0; i<list.length; i++){
  for(j=0; j<list[i].children[0].children.length; j++){
    for(k=0; k<list[i].children[0].children[j].children.length; k++){
      var key = list[i].children[0].children[j].children[k].innerText;
      var obj = {};
      var value = list[i].children[0].children[j].children[++k].innerText;
      obj[key] = value;
      big.key = value;
      tempArray.push(obj);
    }
  }
}

var phones = [];
var phone = {
  'model': null,
  'Release date': null,
  'Form factor': null,
  'Screen size (inches)': null,
  'Touchscreen': null,
  'Resolution': null,
  'Expandable storage': null,
  'Expandable storage type': null,
  'Rear camera': null,
  'Rear Flash': null,
  'Front camera': null,
  'Operating System': null,
  'Wi-Fi': null,
  'Bluetooth': null,
  'Number of SIMs': null,
  'SIM 1': null,
  'SIM Type': null,
  'GSM/CDMA': null,
  '3G': null,
  '4G/ LTE': null,
  'SIM 2': null,
  'SIM Type': null,
  'GSM/CDMA': null,
  '3G': null, 
  '4G/ LTE': null,
  'Accelerometer': null,
  'image': null,
};
phone.model = heading.innerText;
phone.image = img.src;
for(i=1; i<list.length; i++){
  for(j=0; j<list[i].children[0].children.length; j++){
    for(k=0; k<list[i].children[0].children[j].children.length; k++){
      var key = list[i].children[0].children[j].children[k].innerText;
      var value = list[i].children[0].children[j].children[++k].innerText;
      phone[key] = value;
    }
  }
}
phones.push(phone);
copy(phone);