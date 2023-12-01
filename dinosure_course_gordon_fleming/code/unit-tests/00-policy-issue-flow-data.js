/* global expect moment ReactivationOption InvalidRequestError AlteredPolicy AlterationPackage QuotePackage Application Policy generatePolicyNumber Joi RequotePolicy root */

// This file is used by the 'rp test -u' unit testing command and allows you to write and run unit tests locally.
// This file automatically get's commented out by the CLI tool when being pushed to Root.
// This ensures that it does not interfere with production execution.

// Example of valid quote data
const validQuoteData = {
  type: 'dinosure_gordon_ext_dev',
  start_date: '2021-01-01',
  cover_amount: 96000,
  birth_date: '2000-01-01',
  species: 'Tyrannosaurus Rex',
  health_check: true,
};

// Example of invalid quote data
const invalidQuoteData = {
  type: 'dinosure_gordon_ext_dev',
  start_date: '2021-01-01',
  cover_amount: 999999999,
  birth_date: moment().subtract(100, 'years').format(),
  species: 'Tyrannosaurus',
  health_check: true,
};

// A 20-year-old Tyrannosaurus Rex with R90,000.00 has a premium of R1458.00
const trexQuoteData = {
  type: 'dinosure_gordon_ext_dev',
  start_date: '2021-01-01',
  cover_amount: 90000,
  birth_date: moment().subtract(20, 'years').format(),
  species: 'Tyrannosaurus Rex',
  health_check: true,
};

// A 36-year-old Velociraptor with R50,000.00 has a premium of R1368.00
const vraptorQuoteData = {
  type: 'dinosure_gordon_ext_dev',
  start_date: '2021-01-01',
  cover_amount: 50000,
  birth_date: moment().subtract(36, 'years').format(),
  species: 'Velociraptor',
  health_check: true,
};

// A 16-year-old Brachiosaurus with R65,000.00 has a premium of R1372.80
const brachQuoteData = {
  type: 'dinosure_gordon_ext_dev',
  start_date: '2021-01-01',
  cover_amount: 65000,
  birth_date: moment().subtract(16, 'years').format(),
  species: 'Brachiosaurus',
  health_check: true,
};

// Example application data
const applicationData = {
  // app-data
};
