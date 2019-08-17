const { bank } = require('../../models');

const mockBank = {
  bank: 'ACCESS BANK',
  sort_code: '280126',
  branch_name: 'ACCESS BANK- HATSO BRANCH',
};


describe('Bank Model', () => {
  test('fetches all the banks names in a list',
    () => expect(bank.getGhanaBanksList()).resolves.toContainEqual('ACCESS BANK'));

  test('fetches bank sort codes for a particular bank',
    () => expect(bank.fetchBankSortCodes('ACCESS BANK')).resolves.toContainEqual(mockBank));

  test('fetches sort code for a particular branch name',
    () => expect(bank.fetchBankBranchSortCode('access bank', 'hatso')).resolves.toBe(mockBank.sort_code));
});
