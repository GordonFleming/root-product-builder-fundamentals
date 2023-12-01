/* global expect moment ReactivationOption InvalidRequestError AlteredPolicy AlterationPackage QuotePackage Application Policy generatePolicyNumber Joi RequotePolicy root */
// This file is used by the 'rp test -u' unit testing command and allows you to write and run unit tests locally.
// This file automatically get's commented out by the CLI tool when being pushed to Root.
// This ensures that it does not interfere with production execution.

describe('Policy issue flow', function () {
  // Setup
  let quotePackage;
  let applicationPackage;
  before(function () {
    quotePackage = getQuote(validQuoteData);
    applicationPackage = getApplication(
      applicationData,
      undefined,
      // @ts-ignore
      quotePackage,
    );
  });

  // Quote hook
  describe('Quote hook', function () {
    // Test valid object
    it('valid data should pass validation', function () {
      const validationResult = validateQuoteRequest(validQuoteData);
      expect(validationResult.error).to.equal(null);
    });

    // Test invalid object
    it('valid data should pass validation', function () {
      const validationResult = validateQuoteRequest(invalidQuoteData);
      expect(validationResult.error).to.not.equal(null);
    });

    it('A 20-year-old Tyrannosaurus Rex with R90,000.00 has a premium of R1458.00', function () {
      expect(trexQuoteData.suggested_premium).to.equal(1458 * 100); // cents
    });

    it('A 36-year-old Velociraptor with R50,000.00 has a premium of R1368.00', function () {
      expect(vraptorQuoteData.suggested_premium).to.equal(1368 * 100); // cents
    });

    it('A 16-year-old Brachiosaurus with R65,000.00 has a premium of R1372.80', function () {
      expect(brachQuoteData.suggested_premium).to.equal(1372.8 * 100); // cents
    });
  });

  // Application hook
  describe('Application hook', function () {
    it('should pass application data validation ', function () {
      const validationResult = validateApplicationRequest(
        applicationData,
        undefined,
        undefined,
      );
      expect(validationResult.error).to.equal(null);
    });
    it('should return the correct module data', function () {
      expect(applicationPackage.module.SOME_PROPERTY).to.equal(
        '<SOME_PROPERTY>',
      );
    });
  });

  // Policy issue hook
  describe('Policy issue hook', function () {
    it('should create a policy with the correct parameters', function () {
      const policy = getPolicy(applicationPackage, undefined, undefined);
      expect(policy.package_name).to.equal('<CORRECT PACKAGE NAME>');
      expect(policy.monthly_premium).to.equal(1234);
      expect(policy.sum_assured).to.equal(12345678);
    });
  });
});
