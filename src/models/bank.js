const { getAllGhanaBanksData } = require('../async-data');
const { SORT_CODE_NOT_FOUND } = require('../constants');

class GhanaBank {
  constructor() {
    this.asyncBanksData = getAllGhanaBanksData();
  }

  /**
 * [getGhanaBanksList description]
 * @return {Promise} [description]
 */
  async getGhanaBanksList() {
    const banks = [];
    const banksData = await this.asyncBanksData;
    banksData.map((bank) => {
      if (bank.bank) {
        banks.push(bank.bank);
      }
    });
    return [...new Set(banks)];
  }

  /**
 * [fetchBankSortCodes description]
 * @param  {[type]}  bankName [description]
 * @return {Promise}          [description]
 */
  async fetchBankSortCodes(bankName) {
    const bankBranches = [];
    const banksData = await this.asyncBanksData;
    banksData.map((bank) => {
      if (bank.bank === bankName.toUpperCase()) {
        bankBranches.push(bank);
      }
    });
    return bankBranches;
  }

  /**
 * [fetchBankBranchSortCode description]
 * @param  {[type]}  bankName   [description]
 * @param  {[type]}  branchName [description]
 * @return {Promise}            [description]
 */
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
    return sortCode;
  }
}

module.exports = new GhanaBank();
