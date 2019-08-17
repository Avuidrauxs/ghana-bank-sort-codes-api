const SORT_CODE_NOT_FOUND = 'no sort code found!';
const SCRAPPING_ERROR = 'An error occured while scrapping from GhiPPS';
const GHIPPS_URL = 'https://ghipss.net/products-services/cheque-codeline-clearing/bank-sort-codes';
const SCRAPPING_PATTERN = '#customers > tbody > tr';

module.exports = {
  SORT_CODE_NOT_FOUND,
  SCRAPPING_ERROR,
  GHIPPS_URL,
  SCRAPPING_PATTERN,
};
