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
    expect(aPerson.mercuryYears).toEqual(13.2);
  });

  test("Should calculate the age in Venus years", () => {
    aPerson.calcVenus();
    expect(aPerson.venusYears).toEqual(34.1);
  });

  test("Should calculate the age in Mars years", () => {
    aPerson.calcMars();
    expect(aPerson.marsYears).toEqual(103.4);
  });

  test("Should calculate the age in Jupiter years", () => {
    aPerson.calcJupiter();
    expect(aPerson.jupiterYears).toEqual(652.3);
  });

});