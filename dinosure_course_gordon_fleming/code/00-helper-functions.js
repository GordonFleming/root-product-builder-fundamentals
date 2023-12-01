// 00-helper-functions

// add helper functions here

// core_premium
function corePremiumCalc(data) {
  const age = moment().diff(moment(data.birth_date), 'years');
  let corePremium = data.cover_amount * (0.01 * (age * 0.001));

  switch (data.species) {
    case 'Tyrannosaurus Rex':
      corePremium *= 0.81;
      break;
    case 'Stegosaurus':
      corePremium *= 1.19;
      break;
    case 'Velociraptor':
      corePremium *= 0.76;
      break;
    case 'Diplodocus':
      corePremium *= 1.32;
      break;
    case 'Iguanodon':
      corePremium *= 1.07;
      break;
  }

  if (data.health_check_updated !== true) {
    corePremium += 250 * 100;
  }

  return corePremium;
}
