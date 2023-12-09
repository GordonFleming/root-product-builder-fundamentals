/* global expect moment ReactivationOption InvalidRequestError AlteredPolicy AlterationPackage QuotePackage Application Policy generatePolicyNumber Joi RequotePolicy root */
// This file is used by the 'rp test -u' unit testing command and allows you to write and run unit tests locally.
// This file automatically get's commented out by the CLI tool when being pushed to Root.
// This ensures that it does not interfere with production execution.

// valid data for alteration
const validAlterationData = {
  cover_amount: 9600000,
};

// invalid data for alteration
const invalidAlterationData = {
  cover_amount: 960,
};

// T-rex cover changed to R75000
const trexAlterationData = {
  cover_amount: 7500000,
};

// 36 year old velociraptor cover changed to R75000
const vraptorAlterationData = {
  cover_amount: 7500000,
};

// t-rex policy object
const trexExamplePolicy = {
  package_name: 'DinoSure Protection',
  sum_assured: 9000000,
  base_premium: 145800,
  monthly_premium: 145800,
  start_date: '2023-12-06T09:47:52Z',
  end_date: null,
  module: {
    type: 'dinosure_course_gordon_fleming',
    start_date: '2023-12-12T09:47:52.380Z',
    cover_amount: 9000000,
    birth_date: '2003-12-05T09:47:52.381Z',
    species: 'Tyrannosaurus Rex',
    health_checks_updated: true,
    dinosaur_name: 'Dino',
    dinosaur_colour: 'Lilac',
    ndrn: '123456',
  },
};

// velociraptor policy object
const vraptorExamplePolicy = {
  package_name: 'DinoSure Protection',
  sum_assured: 5000000,
  base_premium: 136800,
  monthly_premium: 136800,
  start_date: '2023-12-06T09:47:52Z',
  end_date: null,
  module: {
    type: 'dinosure_course_gordon_fleming',
    start_date: '2023-12-12T09:47:52.380Z',
    cover_amount: 5000000,
    birth_date: '1987-12-05T09:47:52.381Z',
    species: 'Velociraptor',
    health_checks_updated: true,
    dinosaur_name: 'Dino',
    dinosaur_colour: 'Lilac',
    ndrn: '123456',
  },
};
