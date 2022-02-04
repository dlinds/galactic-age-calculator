export class Person {
  constructor(name, earthAge) {
    this.name = name;
    this.earthAge = earthAge;
  }

  calcMercury() {
    this.mercuryYears = (this.earthAge * .24);
  }
  calcVenus() {
    this.venusYears = (this.earthAge * .62);
  }
  calcMars() {
    this.marsYears = parseFloat((this.earthAge * 1.88).toFixed(2));
  }
}