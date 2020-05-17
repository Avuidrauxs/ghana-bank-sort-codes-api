const { bank } = require("../../models");

const mockBank = {
  bank: "340619",
  sort_code: "CBG",
  branch_name: "TAFO BRANCH"
};

describe("Bank Model", () => {
  test("fetches all the banks names in a list", () =>
    expect(bank.getGhanaBanksList().includes("CBG")).toBe(true));

  test("fetches bank sort codes for a particular bank", () =>
    expect(bank.fetchBankSortCodes("CBG")).toContainEqual(mockBank));

  test("fetches sort code for a particular branch name", () =>
    expect(bank.fetchBankBranchSortCode("CBG", "TAFO BRANCH")).toBe(
      mockBank.bank
    ));
});
