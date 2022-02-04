export class Person {
  constructor(name, earthAge, climate, dailyCalories, coffeeOrTea) {
    this.name = name;
    this.earthAge = earthAge;
    this.climate = climate;
    this.dailyCalories = dailyCalories;
    this.coffeeOrTea = coffeeOrTea;
  }

  planetCalc(numToCalc) {
    return parseInt(Math.round(parseFloat((this.earthAge / numToCalc))));
  }
}