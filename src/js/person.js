export class Person {
  constructor(name, earthAge) {
    this.name = name;
    this.earthAge = earthAge;
  }

  calcMercury() {
    this.mercuryYears = parseFloat((this.earthAge * .24).toFixed(2));
  }
  calcVenus() {
    this.venusYears = parseFloat((this.earthAge * .62).toFixed(2));
  }
  calcMars() {
    this.marsYears = parseFloat((this.earthAge * 1.88).toFixed(2));
  }
  calcJupiter() {
    this.jupiterYears = parseFloat((this.earthAge * 11.86).toFixed(2));
  }
}