describe('applyAnnualIncrease schedule function', () => {
  it('A policy younger than a year does not increase in cover on the 1st of January', () => {
    // Change policy start date to be 6 months ago
    validPolicy.start_date = moment().subtract(6, 'months').toISOString();

    const result = applyAnnualIncrease({
      // @ts-ignore
      policy: validPolicy,
    });
    expect(result).to.equal(null);
  });

  it('A policy older than a year does increase in cover on the 1st of January', () => {
    // Change policy start date to be 1 year ago
    validPolicy.start_date = moment('2023-01-01')
      .subtract(1, 'year')
      .toISOString();

    const result = applyAnnualIncrease({
      // @ts-ignore
      policy: validPolicy,
    });

    expect(result).to.deep.equal([
      {
        name: 'update_policy',
        data: {
          // R1620 in cents, since premium was originally R1458
          monthlyPremium: 162000,
          // R100 000 in cents, since cover was originally R90 000
          sumAssured: 10000000,
        },
      },
    ]);
  });

  it('A policy older than a year does not increase in cover on any other date except 1st of January', () => {
    // Change policy start date to be 3 years ago
    validPolicy.start_date = moment().subtract(3, 'year').toISOString();

    const result = applyAnnualIncrease({
      // @ts-ignore
      policy: validPolicy,
    });
    expect(result).to.equal(null);
  });
});
