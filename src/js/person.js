export class Person {
  constructor(name, earthAge) {
    this.name = name;
    this.earthAge = earthAge;
  }

  calcMercury() {
    this.mercuryYears = (this.earthAge * .24);
  }
}