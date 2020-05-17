const { getAllGhanaBanksData } = require("../../async-data");

const bank = {
  bank: "10103",
  sort_code: "BoG",
  branch_name: "BANK OF GHANA -AGONA SWEDRU"
};

describe("Bank Scrapping ", () => {
  test("makes sure all the banks are scrapped successfully", () => {
    return getAllGhanaBanksData().then(bankData => {
      expect(Array.isArray(bankData)).toBe(true);
    });
  });

  test("makes sure our scrapper is getting the correct fields", () => {
    return getAllGhanaBanksData().then(bankData => {
      expect(bankData[0].hasOwnProperty("bank")).toBe(true);
      expect(bankData[0].hasOwnProperty("sort_code")).toBe(true);
      expect(bankData[0].hasOwnProperty("branch_name")).toBe(true);
    });
  });

  test("Check whether we can find BoG", () => {
    return getAllGhanaBanksData().then(bankData => {
      expect(bankData).toContainEqual(bank);
    });
  });
});
