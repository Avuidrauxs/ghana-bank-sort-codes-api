const request = require('request-promise');
const $ = require('cheerio');

const { parseRawBankData } = require('./helpers');

const ghipss = 'https://ghipss.net/products-services/cheque-codeline-clearing/bank-sort-codes';

let bankData;

request(ghipss)
  .then(data => {
    const pattern = '#customers > tbody > tr'
    let table  = $(pattern, data).text();
    bankData = parseRawBankData(table);
    return bankData;
  })
  .catch(err => {
    console.error(err, 'An error has occured');
    return false
  });
