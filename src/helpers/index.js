
/**
 * [parseRawBankData description]
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */
const parseRawBankData = (data) => {
  const bankList = [];
  const rawData = data.replace(/\n\n/g, ',');
  const partialRawData = rawData.split(',');

  partialRawData.map((raw) => {
    const bank = raw.split(/\n/g);
    if (bank[1]) {
      bankList.push({
        bank: bank[1].toUpperCase(),
        sort_code: bank[2],
        branch_name: bank[3].toUpperCase(),
      });
    }
  });

  return bankList.slice(1);
};

module.exports = { parseRawBankData };
