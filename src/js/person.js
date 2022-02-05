export class Person {
  constructor(name, earthAge, climate, dailyCalories, coffeeOrTea) {
    this.name = name;
    this.earthAge = earthAge;
    this.climate = climate;
    this.dailyCalories = dailyCalories;
    this.coffeeOrTea = coffeeOrTea;
  }

  planetCalc(age, numToCalc) {
    return parseInt(age / numToCalc);
  }

  getYearsLeft(planet) {
    switch (planet) {
      case "Mercury":
        return (this.mercuryLifeExpectancy - this.mercuryYears);
      case "Venus":
        return (this.venusLifeExpectancy - this.venusYears);
      case "Mars":
        return (this.marsLifeExpectancy - this.marsYears);
      case "Jupiter":
        return (this.jupiterLifeExpectancy - this.jupiterYears);
    }
  }

  calculateLifeExpectancy () {
    let expectedAge = 0;
    switch (this.climate) {
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
        this.earthLifeExpectancy = false;
        return false;
    }
    let caloriesCount = this.dailyCalories;
    expectedAge += (20 - (caloriesCount /= 100)) + 20;
  
    if (this.coffeeOrTea === "coffee") {
      expectedAge += 15;
    } else {
      expectedAge += 20;
    }
    this.earthLifeExpectancy = expectedAge;
  }
}