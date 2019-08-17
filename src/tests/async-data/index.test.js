const { getAllGhanaBanksData } = require('../../async-data');

const bank = {
  bank: 'ACCESS BANK',
  sort_code: '280126',
  branch_name: 'ACCESS BANK- HATSO BRANCH',
};

describe('Bank Scrapping ', () => {
  test('makes sure all the banks are scrapped successfully',
    () => expect(getAllGhanaBanksData()).resolves.toContainEqual(bank));
});
