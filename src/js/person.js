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
  // calcMars() {
  //   this.marsYears = parseFloat((this.earthAge * 1.88).toFixed(2));
  // }
  // calcJupiter() {
  //   this.jupiterYears = parseFloat((this.earthAge * 11.86).toFixed(2));
  // }
}