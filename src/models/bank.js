const { getAllGhanaBanksData } = require('../async-data');
const { SORT_CODE_NOT_FOUND } = require('../constants');

class GhanaBank {
  constructor() {
    this.asyncBanksData = getAllGhanaBanksData();
  }

  async getGhanaBanksList() {
    const banks = [];
    const banksData = await this.asyncBanksData;
    banksData.map((bank) => {
      if (bank.bank) {
        banks.push(bank.bank);
      }
    });
    console.log([...new Set(banks)]);
    return [...new Set(banks)];
  }

  async fetchBankSortCodes(bankName) {
    const bankBranches = [];
    const banksData = await this.asyncBanksData;
    banksData.map((bank) => {
      if (bank.bank === bankName) {
        bankBranches.push(bank);
      }
    });
    return bankBranches;
  }

  async fetchBankBranchSortCode(bankName, branchName) {
    let sortCode = SORT_CODE_NOT_FOUND;
    if (!bankName || !branchName) {
      return sortCode;
    }
    const banksData = await this.asyncBanksData;
    banksData.map((bank) => {
      if (bank.bank) {
        if (bank.bank === bankName.toUpperCase()
          && bank.branch_name.includes(branchName.toUpperCase())) {
          sortCode = bank.sort_code;
        }
      }
    });
    console.log(sortCode, 'sortCode');
    return sortCode;
  }
}

new GhanaBank().getGhanaBanksList()   //('gn bank ltd', 'Obuasi');

module.exports = new GhanaBank();
