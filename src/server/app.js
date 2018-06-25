const express = require('express');
const axios = require('axios');
const cors = require('cors');

const server = express();
server.use(cors());
const PORT = 5000;

// var bodyParams = {
//   token: "efd9d07afc27d1a2451c337d37ba4a2f2f0f1aca1b37dcdd"
// }

server.get('/get', (req, res) => {
  axios.get(
  'https://reqres.in/api/users?page=2',
  )
  .then(res => { return res.data.data } )
  .catch(err => console.log('err', err) )
  res.send();
}
);

server.listen(PORT, () => { console.log(`Server is now running at Port ${PORT}`); });
