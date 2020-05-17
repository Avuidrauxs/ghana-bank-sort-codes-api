const request = require('request-promise');
const $ = require('cheerio');
const fs = require('fs');
const path = require('path');

const { parseRawBankData } = require('../helpers');
const { SCRAPPING_ERROR, GHIPPS_URL, SCRAPPING_PATTERN } = require('../constants');


/**
 * [getAllGhanaBanksData description]
 * @return {Promise} [description]
 */
const getAllGhanaBanksData = async () => {
  let data; let banksTable; let
    banksData;
  try {
    data = await request(GHIPPS_URL);
    banksTable = $(SCRAPPING_PATTERN, data).text(); 
    banksData = JSON.parse(JSON.stringify(parseRawBankData(banksTable)));
    // Handle offline data save
    fs.writeFile(path.join(__dirname, '../json/banksData.json'), JSON.stringify(banksData), (err) => {
      if (err) {
        console.log(err, 'Ellor');
      }
    });
    return banksData;
  } catch (error) {
    console.error(error, SCRAPPING_ERROR);
    throw Error(SCRAPPING_ERROR);
  }
};

module.exports = { getAllGhanaBanksData };
