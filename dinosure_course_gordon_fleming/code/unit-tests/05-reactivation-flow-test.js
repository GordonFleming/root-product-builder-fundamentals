describe('Reactivation flow', () => {
  // Setup
  let reactivationOption;

  before(() => {
    // @ts-ignore
    reactivationOption = getReactivationOptions(policy_active)[0];
  });

  // Quote hook
  describe('Before reactivation', () => {
    it('should return an error because the policy is already active', async () => {
      var error = null;
      try {
        await beforePolicyReactivated({
          // @ts-ignore
          policy: policy_active,
          reactivationOption: reactivationOption,
        });
      } catch (e) {
        error = e;
      }
      expect(error).to.not.equal(null);
    });

    it('should return without error: lapsed policy', () => {
      var error = null;
      try {
        beforePolicyReactivated({
          // @ts-ignore
          policy: policy_lapsed,
          reactivationOption: reactivationOption,
        });
      } catch (e) {
        error = e;
      }
      expect(error).to.equal(null);
    });

    it('should return without error: cancelled policy', () => {
      var error = null;
      try {
        beforePolicyReactivated({
          // @ts-ignore
          policy: policy_cancelled,
          reactivationOption: reactivationOption,
        });
      } catch (e) {
        error = e;
      }
      expect(error).to.equal(null);
    });

    it('should return an error: expired policy', () => {
      var error = null;
      try {
        beforePolicyReactivated({
          // @ts-ignore
          policy: policy_expired,
          reactivationOption: reactivationOption,
        });
      } catch (e) {
        error = e;
      }
      expect(error).to.not.equal(null);
    });
  });
});
