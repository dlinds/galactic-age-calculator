export function calculateLifeExpectancy (climate, dailyCalories, coffeeOrTea) {
  let expectedAge = 0;
  switch (climate) {
    case "desert":
      expectedAge += 45;
      break;
    case "tropical":
      expectedAge += 50;
      break;
    case "plains":
      expectedAge += 55;
      break;
    default:
      return false;
  }
  
  expectedAge += (20 - (dailyCalories /= 100)) + 20;

  if (coffeeOrTea === "coffee") {
    expectedAge += 15;
  } else {
    expectedAge += 20;
  }
  return expectedAge;
}