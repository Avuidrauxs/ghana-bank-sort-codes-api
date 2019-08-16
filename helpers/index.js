const parseRawBankData = (data) => {
  const bank_list = [];
  let rawData = data.replace(/\n\n/g,',');
  const partialRawData = rawData.split(',');

  partialRawData.map(raw => {
    const bank = raw.split(/\n/g);
    bank_list.push({
      bank: bank[1],
      sort_code: bank[2],
      branch_name: bank[3]
    })
  });

  return bank_list.slice(1);
}

module.exports = { parseRawBankData }
