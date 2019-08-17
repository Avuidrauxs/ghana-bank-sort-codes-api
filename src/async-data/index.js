const request = require('request-promise');
const $ = require('cheerio');

const { parseRawBankData } = require('../helpers');
const { SCRAPPING_ERROR, GHIPPS_URL, SCRAPPING_PATTERN } = require('../constants');


/**
 * [getAllGhanaBanksData description]
 * @return {Promise} [description]
 */
const getAllGhanaBanksData = async () => {
  let data, banksTable, banksData;
  try{
    data = await request(GHIPPS_URL);
    banksTable  = $(SCRAPPING_PATTERN, data).text();
    banksData = parseRawBankData(banksTable);
    return banksData;
  } catch (error) {
      console.error(error, SCRAPPING_ERROR);
      return false;
  }
}


module.exports = { getAllGhanaBanksData };
