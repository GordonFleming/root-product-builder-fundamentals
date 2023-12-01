// 00-helper-functions

// add helper functions here

// base_premium
function basePremiumCalc(data) {
  const age = moment().diff(moment(data.birth_date), 'years');
  let basePremium = data.cover_amount * (0.01 * (age * 0.001));

  switch (data.species) {
    case 'Tyrannosaurus Rex':
      basePremium *= 0.81;
      break;
    case 'Stegosaurus':
      basePremium *= 1.19;
      break;
    case 'Velociraptor':
      basePremium *= 0.76;
      break;
    case 'Diplodocus':
      basePremium *= 1.32;
      break;
    case 'Iguanodon':
      basePremium *= 1.07;
      break;
  }

  if (data.health_check_updated !== true) {
    basePremium += 250 * 100;
  }

  return basePremium;
}
