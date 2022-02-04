export class Person {
  constructor(name, earthAge, climate, dailyCalories, coffeeOrTea) {
    this.name = name;
    this.earthAge = earthAge;
    this.climate = climate;
    this.dailyCalories = dailyCalories;
    this.coffeeOrTea = coffeeOrTea;
  }

  calcMercury() {
    this.mercuryYears = parseInt(Math.round(parseFloat((this.earthAge / .24))));
  }
  calcVenus() {
    this.venusYears = parseInt(Math.round(parseFloat((this.earthAge / .62))));
  }
  calcMars() {
    this.marsYears = parseInt(Math.round(parseFloat((this.earthAge / 1.88))));
  }
  calcJupiter() {
    this.jupiterYears = parseInt(Math.round(parseFloat((this.earthAge / 11.86))));
  }
}