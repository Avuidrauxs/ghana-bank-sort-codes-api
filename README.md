# Ghana Banks Sort Codes/Routing Number API
[![codecov](https://codecov.io/gh/Avuidrauxs/ghana-bank-sort-codes-api/branch/master/graph/badge.svg)](https://codecov.io/gh/Avuidrauxs/ghana-bank-sort-codes-api)
[![CircleCI](https://circleci.com/gh/Avuidrauxs/ghana-bank-sort-codes-api/tree/master.svg?style=svg)](https://circleci.com/gh/Avuidrauxs/ghana-bank-sort-codes-api/tree/master)

This was scrapped from Ghana Banks Sort codes from The Ghana Interbank Payment and Settlement Systems website to acquire all the banks in Ghana sort codes and routing numbers.

## List Of Ghana Banks included

  * ACCESS BANK
  * ADB BANK
  * APEX RURAL BANK
  * BANK OF AFRICA
  * BANK OF BARODA
  * BANK OF GHANA
  * BARCLAYS BANK
  * BEIGE BANK
  * BSIC GHANA LTD
  * CAL BANK LTD
  * CAPITAL BANK
  * ECOBANK (GH) LTD
  * ENERGY BANK
  * FAB
  * FBN BANK LTD
  * FIDELITY BANK GHANA
  * FIRST NATIONAL BANK
  * GCB BANK LTD
  * GN BANK LTD
  * GUARANTY TRUST BANK
  * HERITAGE BANK
  * NATIONAL INVESTMENT BANK
  * OMNIBANK GHANA LIMITED
  * PREMIUM BANK GHANA LTD
  * PRUDENTIAL BANK LTD
  * REPUBLIC BANK
  * REPUBLIC BANK GH
  * SOCIETE GENERALE GHANA
  * SOVEREIGN BANK LTD
  * STANBIC BANK GHANA LTD
  * STANDARD CHARTERED BANK
  * THE ROYAL BANK
  * UNIBANK GHANA LTD
  * UNICREDIT GHANA LIMITED
  * UNITED BANK FOR AFRICA(GH) LTD
  * UNIVERSAL MERCHANT BANK
  * UT BANK
  * ZENITH BANK (GH) LTD


  ## How to install

`npm i -S ghana-bank-sort-codes-api`

**OR**

`yarn add ghana-bank-sort-codes-api`

  ## Usage

  ```javascript
  const { bank } = require('ghana-bank-sort-codes-api');
  ```
**OR**

```javascript
  import { bank } from 'ghana-bank-sort-codes-api';
```


##### Get bank sort codes for a particular bank(fetchBankSortCodes([bankName]))

```javascript
  bank.fetchBankSortCodes('access bank')
    .then(bankData => {
      // This will return an array of objects with all access bank branch names and sort codes
    })
```

##### Get bank sort code for a particular bank branch(fetchBankSortCodes([bankName]))

```javascript
  bank.fetchBankBranchSortCodes('access bank', 'hatso')
    .then(sortCode => {
      console.log(sortCode);
      // will display 280126
    })
```

## License

[MIT]('LICENSE')
