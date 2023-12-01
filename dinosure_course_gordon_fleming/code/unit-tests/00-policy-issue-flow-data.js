/* global expect moment ReactivationOption InvalidRequestError AlteredPolicy AlterationPackage QuotePackage Application Policy generatePolicyNumber Joi RequotePolicy root */

// This file is used by the 'rp test -u' unit testing command and allows you to write and run unit tests locally.
// This file automatically get's commented out by the CLI tool when being pushed to Root.
// This ensures that it does not interfere with production execution.

// Example quote data
const validQuoteData = {
  type: 'dinosure_gordon_ext_dev',
  start_date: '2021-01-01',
  cover_amount: 96000,
  dob_year: 1990,
  species: 'Tyrannosaurus Rex',
  health_check: true,
};

const invalidQuoteData = {
  type: 'dinosure_gordon_ext_dev',
  start_date: '2021-01-01',
  cover_amount: 999999999,
  dob_year: 1840,
  species: 'Tyrannosaurus',
  health_check: true,
};

// Example application data
// const applicationData = {
//   // app-data
// };
