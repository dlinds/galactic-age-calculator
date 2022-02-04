import { Person } from "../src/js/person.js";

describe("Person", () => {
  let aPerson;
  beforeEach(() => {
    aPerson = new Person("Bob", 55);
  });
  
  test("Should create a person with a name and an earth age", () => {
    expect(aPerson.name).toEqual("Bob");
    expect(aPerson.earthAge).toEqual(55);
  });

  test("Should return age in Mercury years", () => {
    aPerson.calcMercury();
    expect(aPerson.mercuryYears).toEqual(13.2);
  });

  test("Should return age in Venus years", () => {
    aPerson.calcVenus();
    expect(aPerson.venusYears).toEqual(34.1);
  });

  test("Should return age in Mars years", () => {
    aPerson.calcMars();
    expect(aPerson.marsYears).toEqual(103.4);
  });

});