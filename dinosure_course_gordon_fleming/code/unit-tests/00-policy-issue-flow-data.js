/* global expect moment ReactivationOption InvalidRequestError AlteredPolicy AlterationPackage QuotePackage Application Policy generatePolicyNumber Joi RequotePolicy root */

// This file is used by the 'rp test -u' unit testing command and allows you to write and run unit tests locally.
// This file automatically get's commented out by the CLI tool when being pushed to Root.
// This ensures that it does not interfere with production execution.

// Example of valid quote data
const validQuoteData = {
  start_date: moment().add(7, 'days').toDate(),
  cover_amount: 9600000,
  birth_date: moment().subtract(20, 'years').toDate(),
  species: 'Tyrannosaurus Rex',
  health_checks_updated: true,
};

// Example of invalid quote data
const invalidQuoteData = {
  start_date: moment().subtract(65, 'days').toDate(),
  cover_amount: 999999999,
  birth_date: moment().subtract(100, 'years').toDate(),
  species: 'T-Rex',
  health_checks_updated: true,
};

// A 20-year-old Tyrannosaurus Rex with R90,000.00 has a premium of R1458.00
const trexQuoteData = {
  start_date: moment().add(7, 'days'),
  cover_amount: 90000,
  birth_date: moment().subtract(20, 'years'),
  species: 'Tyrannosaurus Rex',
  health_checks_updated: true,
};

// A 36-year-old Velociraptor with R50,000.00 has a premium of R1368.00
const vraptorQuoteData = {
  start_date: moment().add(7, 'days'),
  cover_amount: 50000,
  birth_date: moment().subtract(36, 'years'),
  species: 'Velociraptor',
  health_checks_updated: true,
};

// A 16-year-old Brachiosaurus with R65,000.00 has a premium of R1372.80
const brachQuoteData = {
  start_date: moment().add(7, 'days'),
  cover_amount: 65000,
  birth_date: moment().subtract(16, 'years'),
  species: 'Brachiosaurus',
  health_checks_updated: true,
};

// Example application data
const applicationData = {
  // app-data
};
