import { Person } from "../src/js/person.js";
import { calculateLifeExpectancy } from "../src/js/lifeExpectancy.js";

describe("Person", () => {
  let aPerson;
  beforeEach(() => {
    aPerson = new Person("Bob", 55, "desert", 2200, "coffee");
    aPerson.lifeExpectancyEarth = calculateLifeExpectancy(aPerson.climate, aPerson.dailyCalories, aPerson.coffeeOrTea);
  });
  
  test("Should create a person with a name and an earth age", () => {
    expect(aPerson.name).toEqual("Bob");
    expect(aPerson.earthAge).toEqual(55);
    expect(aPerson.climate).toEqual("desert");
    expect(aPerson.dailyCalories).toEqual(2200);
    expect(aPerson.coffeeOrTea).toEqual("coffee");
    expect(aPerson.lifeExpectancyEarth).toEqual(78);
  });

  test("Should calculate the age in Mercury years", () => {
    aPerson.mercuryYears = aPerson.planetCalc(.24);
    expect(aPerson.mercuryYears).toEqual(229);
  });

  test("Should calculate the age in Venus years", () => {
    aPerson.venusYears = aPerson.planetCalc(.62);
    expect(aPerson.venusYears).toEqual(89);
  });

  test("Should calculate the age in Mars years", () => {
    aPerson.marsYears = aPerson.planetCalc(1.88);
    expect(aPerson.marsYears).toEqual(29);
  });

  test("Should calculate the age in Jupiter years", () => {
    aPerson.jupiterYears = aPerson.planetCalc(11.86);
    expect(aPerson.jupiterYears).toEqual(5);
  });

});