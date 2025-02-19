// 06-scheduled-functions
/**
 * Executed on the schedule defined in `.root-config.json`.
 * @param {object} params
 * @param {PlatformPolicy} params.policy The policy for which the scheduled function is running.
 * @param {PlatformPolicyholder} params.policyholder The policyholder linked to the policy
 * @return {ProductModuleAction[] | void} The actions to be queued by the platform.
 */
const applyAnnualIncrease = ({ policy, policyholder }) => {
  // Check if the policy is older than a year
  const policyStartDate = moment(policy.start_date);
  const today = moment();
  const policyAge = today.diff(policyStartDate, 'years');

  // Check for older than a year
  // Will only ever run on 1st Jan so no need to check '01-01'
  if (policyAge >= 1) {
    // Increase the cover by R10 000
    const newCover = policy.sum_assured + 10000 * 100;

    // Update the cover amount to have the new premium calculated
    const newPremium = corePremiumCalc({
      ...policy.module,
      cover_amount: newCover,
    });

    return [
      {
        name: 'update_policy',
        data: {
          monthlyPremium: newPremium,
          sumAssured: newCover,
        },
      },
    ];
  } else {
    return null;
  }
};
