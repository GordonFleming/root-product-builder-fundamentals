/**
 * Validates the quote request data.
 * @param {Record<string, any>} data The data received in the body of the
 *     [Create a quote](https://docs.rootplatform.com/reference/getting-a-quote-2) request
 *     (without the `type` property).
 * @return {{error: any; result: any}} The [validation result](https://joi.dev/api/?v=12.1.0#validatevalue-schema-options-callback).
 *    If there are no errors, the `value` property will contain the validated data, which is passed to `getQuote`.
 * @see {@link https://docs.rootplatform.com/docs/quote-hook Quote hook}
 */
const validateQuoteRequest = (data) => {
  const validationResult = Joi.validate(
    data,
    Joi.object()
      .keys({
        // The policy start date must be provided, and it must fall within the next 60 days from quote creation.
        start_date: Joi.date()
          .min(moment().toDate())
          .max(moment().add(60, 'days').toDate())
          .required(),
        // The cover amount (sum insured) must be provided, and it must fall between R10,000.00 and R100,000.00 inclusive.
        cover_amount: Joi.number()
          .integer()
          .min(10000 * 100)
          .max(100000 * 100)
          .required(),
        // The year of birth of the dinosaur must be provided. The date of birth must be within 50 years of the current year (in the past).
        birth_date: Joi.date()
          .min(moment().subtract(50, 'years').toDate())
          .max(moment().toDate())
          .required(),
        // The dinosaur species must be one of the following [Tyrannosaurus Rex, Stegosaurus, Velociraptor, Diplodocus, Iguanodon].
        species: Joi.string()
          .valid(
            'Tyrannosaurus Rex',
            'Stegosaurus',
            'Velociraptor',
            'Diplodocus',
            'Iguanodon',
          )
          .required(),
        // The policyholder must indicate whether the dinosaur’s health checks are up to date.
        health_checks_updated: Joi.boolean().required(),
      })
      .required(),
    { abortEarly: false },
  );
  return validationResult;
};

/**
 * Generates an array of quote packages from the quote request data.
 * @param {Record<string, any>} data The validated data returned by `validateQuoteRequest` as `result.value`.
 * @return {QuotePackage[]} The quote package(s) that will be returned by the
 *     [Create a quote](https://docs.rootplatform.com/reference/getting-a-quote-2) endpoint.
 * @see {@link https://docs.rootplatform.com/docs/quote-hook Quote hook}
 */
const getQuote = (data) => {
  const quotePackage = new QuotePackage({
    // Below are standard fields for all products
    package_name: 'DinoSure Protection', // The name of the "package" of cover
    sum_assured: data.cover_amount, // Set the total, aggregated cover amount
    base_premium: corePremiumCalc(data), // Should be an integer, cents
    suggested_premium: corePremiumCalc(data), // Should be an integer, cents
    billing_frequency: 'monthly', // Can be monthly or yearly
    module: {
      // Save any data, calculations, or results here for future re-use.
      type: 'dinosure_course_gordon_fleming',
      ...data,
    },
    input_data: { ...data },
  });
  return [quotePackage];
};

const quoteSchema = Joi.object().keys({
  start_date: Joi.date()
    .min(moment().toDate())
    .max(moment().add(60, 'days').toDate())
    .required(),
  cover_amount: Joi.number()
    .integer()
    .min(10000 * 100)
    .max(100000 * 100)
    .required(),
  birth_date: Joi.date()
    .min(moment().subtract(50, 'years').toDate())
    .max(moment().toDate())
    .required(),
  species: Joi.string()
    .valid(
      'Tyrannosaurus Rex',
      'Stegosaurus',
      'Velociraptor',
      'Diplodocus',
      'Iguanodon',
    )
    .required(),
  health_checks_updated: Joi.boolean().required(),
});
