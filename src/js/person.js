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
    }
  }
}