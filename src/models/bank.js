const data = require("../json/banksData.json");
const { SORT_CODE_NOT_FOUND } = require("../constants");

class GhanaBank {
  constructor() {
    this.data = data;
  }

  /**
 * [getGhanaBanksList description]
 * @return Array [description]
 */
  getGhanaBanksList() {
    const banks = [];
    this.data.map(bank => {
      if (bank.bank && !Number.isInteger(Number(bank.bank))) {
        banks.push(bank.bank);
      } else if (Number.isInteger(Number(bank.bank))) {
        banks.push(bank.sort_code);
      }
    });

    return [...new Set(banks)];
  }

  /**
 * [fetchBankSortCodes description]
 * @param  {[type]}  bankName [description]
 * @return Array        [description]
 */
  fetchBankSortCodes(bankName) {
    const bankBranches = [];
    this.data.map(bank => {
      if (
        bank.bank === bankName.toUpperCase() ||
        bank.sort_code === bankName.toUpperCase()
      ) {
        bankBranches.push(bank);
      }
    });
    return bankBranches;
  }

  /**
 * [fetchBankBranchSortCode description]
 * @param  {[type]}  bankName   [description]
 * @param  {[type]}  branchName [description]
 * @return  Integer            [description]
 */
  fetchBankBranchSortCode(bankName, branchName) {
    let sortCode = SORT_CODE_NOT_FOUND;
    if (!bankName || !branchName) {
      return sortCode;
    }
    // const banksData = await this.asyncBanksData;
    this.data.map(bank => {
      if (bank.bank) {
        if (
          (bank.bank === bankName.toUpperCase() ||
            bank.sort_code === bankName.toUpperCase()) &&
          bank.branch_name.includes(branchName.toUpperCase())
        ) {
          sortCode = Number.isInteger(Number(bank.sort_code))
            ? bank.sort_code
            : bank.bank;
        }
      }
    });
    return sortCode;
  }
}

module.exports = new GhanaBank();
