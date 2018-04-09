const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();

app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/api/offers', (req, res) => {
  let params = {
    scenario: 'deal-finder',
    page: 'foo',
    uid: 'foo',
    productType: 'Hotel'
  }
  let API = 'https://offersvc.expedia.com/offers/v2/getOffers';

  return axios.get(API, {params: params})
    .then(response => res.send(response.data))
    .catch(error => console.dir(error));
})

app.get('/', (req, res) => {
  res.render('dist/index.html');
});

module.exports = app;
