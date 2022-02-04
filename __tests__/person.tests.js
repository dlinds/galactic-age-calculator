import { Person } from "../src/js/person.js";

describe("Person", () => {
  let aPerson;
  beforeEach(() => {
    aPerson = new Person("Bob", 55, "desert", 2200, "coffee");
  });
  
  test("Should create a person with a name and an earth age", () => {
    expect(aPerson.name).toEqual("Bob");
    expect(aPerson.earthAge).toEqual(55);
    expect(aPerson.climate).toEqual("desert");
    expect(aPerson.dailyCalories).toEqual(2200);
    expect(aPerson.coffeeOrTea).toEqual("coffee");
  });

  test("Should calculate the age in Mercury years", () => {
    aPerson.calcMercury();
    expect(aPerson.mercuryYears).toEqual(229);
  });

  test("Should calculate the age in Venus years", () => {
    aPerson.calcVenus();
    expect(aPerson.venusYears).toEqual(89);
  });

  test("Should calculate the age in Mars years", () => {
    aPerson.calcMars();
    expect(aPerson.marsYears).toEqual(29);
  });

  test("Should calculate the age in Jupiter years", () => {
    aPerson.calcJupiter();
    expect(aPerson.jupiterYears).toEqual(5);
  });

});