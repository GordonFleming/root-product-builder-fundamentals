// 07-reactivation-flow
/**
 * Get the reactivation options for inactive policies.
 * @param {PlatformPolicy} policy The policy to be reactivated.
 * @return {ReactivationOption[]} One of these options must be selected whenever an inactive policy is reactivated.
 */
const getReactivationOptions = (policy) => {
  return [
    new ReactivationOption({
      type: 'reactivate',
      description:
        'For a policy to be reinstated, it must be cancelled or lapsed.',
      minimumBalanceRequired: false,
    }),
  ];
};

/**
 * Executed before a policy is reactivated.
 * Can be used to prevent reactivation if certain conditions are not met.
 * @param {object} params
 * @param {PlatformPolicy} params.policy The policy to be reactivated
 * @param {ReactivationOption} params.reactivationOption The reactivation option selected
 * @return {ProductModuleAction[] | void} The actions to be queued by the platform
 */

const beforePolicyReactivated = ({
  policy,
  // @ts-ignore
  policyholder,
  reactivationOption,
}) => {
  // Check policy status is lapsed or cancelled
  const isPolicyLapsedOrCancelled = ['lapsed', 'cancelled'].includes(
    policy.status,
  );
  if (!isPolicyLapsedOrCancelled) {
    throw new Error(
      `Policy with status ${policy.status} cannot be reactivated. Policy status must be one of ['lapsed', 'cancelled'].`,
    );
  }

  // Add reactivation date to policy module data
  const newModule = {
    ...policy.module,
    reactivated_date: moment().toISOString(),
  };

  // Queue actions to be executed after policy is reactivated
  return [
    {
      name: 'update_policy',
      data: {
        module: newModule,
      },
    },
    // { name: 'activate_policy' },
  ];
};
