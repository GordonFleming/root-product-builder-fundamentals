/* global expect moment ReactivationOption InvalidRequestError AlteredPolicy AlterationPackage QuotePackage Application Policy generatePolicyNumber Joi RequotePolicy root */
// This file is used by the 'rp test -u' unit testing command and allows you to write and run unit tests locally.
// This file automatically get's commented out by the CLI tool when being pushed to Root.
// This ensures that it does not interfere with production execution.

describe('Amendment alteration hook', function () {
  const alterationHookKey = 'update-cover';

  it('valid data should pass validation', function () {
    const validationResult = validateAlterationPackageRequest({
      alteration_hook_key: alterationHookKey,
      data: validAlterationData,
      policy: undefined,
      policyholder: undefined,
    });
    expect(validationResult.error).to.equal(null);
  });

  it('invalid pet name should generate validation error', function () {
    const validationResult = validateAlterationPackageRequest({
      alteration_hook_key: alterationHookKey,
      data: invalidAlterationData,
      policy: undefined,
      policyholder: undefined,
    });
    expect(validationResult.error.message).to.not.equal(null);
  });

  it('20-year-old T-Rex with R90000 cover changed to R75000 resulting premium R1215', function () {
    const alterationPackage = getAlteration({
      alteration_hook_key: alterationHookKey,
      data: trexAlterationData,
      // @ts-ignore
      policy: trexExamplePolicy,
      policyholder: undefined,
    });

    const alteredPolicy = applyAlteration({
      alteration_hook_key: alterationHookKey,
      policy: trexExamplePolicy,
      policyholder: undefined,
      alteration_package: alterationPackage,
    });

    expect(alteredPolicy.module.cover_amount).to.equal(7500000);
    expect(alteredPolicy.monthly_premium).to.equal(121500);
  });

  it('36-year-old Velociraptor with R50000 cover changed to R75000 resulting R2052', function () {
    const alterationPackage = getAlteration({
      alteration_hook_key: alterationHookKey,
      data: vraptorAlterationData,
      // @ts-ignore
      policy: vraptorExamplePolicy,
      policyholder: undefined,
    });

    const alteredPolicy = applyAlteration({
      alteration_hook_key: alterationHookKey,
      policy: vraptorExamplePolicy,
      policyholder: undefined,
      alteration_package: alterationPackage,
    });

    expect(alteredPolicy.module.cover_amount).to.equal(7500000);
    expect(alteredPolicy.monthly_premium).to.equal(205200);
  });
});
