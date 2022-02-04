import { Person } from "../src/js/person.js";
import { calculateLifeExpectancy } from "../src/js/lifeExpectancy.js";

describe("Person", () => {
  let aPerson;
  beforeEach(() => {
    aPerson = new Person("Bob", 55, "desert", 2200, "coffee");
    aPerson.earthLifeExpectancy = calculateLifeExpectancy(aPerson.climate, aPerson.dailyCalories, aPerson.coffeeOrTea);
  });
  
  test("Should create a person with a name and an earth age", () => {
    expect(aPerson.name).toEqual("Bob");
    expect(aPerson.earthAge).toEqual(55);
    expect(aPerson.climate).toEqual("desert");
    expect(aPerson.dailyCalories).toEqual(2200);
    expect(aPerson.coffeeOrTea).toEqual("coffee");
    expect(aPerson.earthLifeExpectancy).toEqual(78);
  });

  test("Should calculate the age in Mercury years", () => {
    aPerson.mercuryYears = aPerson.planetCalc(aPerson.earthAge, .24);
    expect(aPerson.mercuryYears).toEqual(229);
  });

  test("Should calculate the expected life age in Mercury years", () => {
    aPerson.mercuryLifeExpectancy = aPerson.planetCalc(aPerson.earthLifeExpectancy, .24);
    expect(aPerson.mercuryLifeExpectancy).toEqual(325);
  });

  test("Should calculate the age in Venus years", () => {
    aPerson.venusYears = aPerson.planetCalc(aPerson.earthAge, .62);
    expect(aPerson.venusYears).toEqual(89);
  });

  test("Should calculate the age in Mars years", () => {
    aPerson.marsYears = aPerson.planetCalc(aPerson.earthAge, 1.88);
    expect(aPerson.marsYears).toEqual(29);
  });

  test("Should calculate the age in Jupiter years", () => {
    aPerson.jupiterYears = aPerson.planetCalc(aPerson.earthAge, 11.86);
    expect(aPerson.jupiterYears).toEqual(5);
  });

});