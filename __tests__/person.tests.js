import { Person } from "../src/js/person.js";
import { calculateLifeExpectancy } from "../src/js/lifeExpectancy.js";

describe("Person", () => {
  let aPerson;
  let aSecondPerson;
  beforeEach(() => {
    aPerson = new Person("Bob", 55, "desert", 2200, "coffee");
    aPerson.earthLifeExpectancy = calculateLifeExpectancy(aPerson.climate, aPerson.dailyCalories, aPerson.coffeeOrTea);

    aSecondPerson = new Person("Jane", 80, "desert", 2200, "coffee");
    aSecondPerson.earthLifeExpectancy = calculateLifeExpectancy(aSecondPerson.climate, aSecondPerson.dailyCalories, aSecondPerson.coffeeOrTea);

  });
  
  test("Should create a person with a name and an earth age", () => {
    expect(aPerson.name).toEqual("Bob");
    expect(aPerson.earthAge).toEqual(55);
    expect(aPerson.climate).toEqual("desert");
    expect(aPerson.dailyCalories).toEqual(2200);
    expect(aPerson.coffeeOrTea).toEqual("coffee");
    expect(aPerson.earthLifeExpectancy).toEqual(78);
  });

  //Mercury
  test("Should calculate the age in Mercury years", () => {
    aPerson.mercuryYears = aPerson.planetCalc(aPerson.earthAge, .24);
    expect(aPerson.mercuryYears).toEqual(229);
  });

  test("Should calculate the expected life age in Mercury years", () => {
    aPerson.mercuryLifeExpectancy = aPerson.planetCalc(aPerson.earthLifeExpectancy, .24);
    expect(aPerson.mercuryLifeExpectancy).toEqual(325);
  });

  test("Should return how many years they have left in Mercury Years", () => {
    aPerson.mercuryYears = aPerson.planetCalc(aPerson.earthAge, .24);
    aPerson.mercuryLifeExpectancy = aPerson.planetCalc(aPerson.earthLifeExpectancy, .24);
    expect(aPerson.getYearsLeft("Mercury")).toEqual(96);
  });

  test("Should calculate the age of aSecondPerson in Mercury years", () => {
    aSecondPerson.mercuryYears = aSecondPerson.planetCalc(aSecondPerson.earthAge, .24);
    expect(aSecondPerson.mercuryYears).toEqual(333);
  });

  test("Should calculate the expected life age of aSecondPerson in Mercury years", () => {
    aSecondPerson.mercuryLifeExpectancy = aSecondPerson.planetCalc(aSecondPerson.earthLifeExpectancy, .24);
    expect(aSecondPerson.mercuryLifeExpectancy).toEqual(325);
  });

  test("Should return how many years aSecondPerson has left in Mercury Years", () => {
    aSecondPerson.mercuryYears = aSecondPerson.planetCalc(aSecondPerson.earthAge, .24);
    aSecondPerson.mercuryLifeExpectancy = aSecondPerson.planetCalc(aSecondPerson.earthLifeExpectancy, .24);
    expect(aSecondPerson.getYearsLeft("Mercury")).toEqual(-8);
  });

  //Venus
  test("Should calculate the age in Venus years", () => {
    aPerson.venusYears = aPerson.planetCalc(aPerson.earthAge, .62);
    expect(aPerson.venusYears).toEqual(88);
  });

  test("Should calculate the expected life age in Venus years", () => {
    aPerson.venusLifeExpectancy = aPerson.planetCalc(aPerson.earthLifeExpectancy, .62);
    expect(aPerson.venusLifeExpectancy).toEqual(125);
  });

  test("Should return how many years they have left in Venus Years", () => {
    aPerson.venusYears = aPerson.planetCalc(aPerson.earthAge, .62);
    aPerson.venusLifeExpectancy = aPerson.planetCalc(aPerson.earthLifeExpectancy, .62);
    expect(aPerson.getYearsLeft("Venus")).toEqual(37);
  });

  test("Should return how many years aSecondPerson has left in Venus Years", () => { 
    aSecondPerson.venusYears = aSecondPerson.planetCalc(aSecondPerson.earthAge, .62);
    aSecondPerson.venusLifeExpectancy = aSecondPerson.planetCalc(aSecondPerson.earthLifeExpectancy, .62);
    expect(aSecondPerson.venusYears).toEqual(129);
    expect(aSecondPerson.venusLifeExpectancy).toEqual(125);
    expect(aSecondPerson.getYearsLeft("Venus")).toEqual(-4);
  });


  //Mars
  test("Should calculate the age in Mars years", () => {
    aPerson.marsYears = aPerson.planetCalc(aPerson.earthAge, 1.88);
    expect(aPerson.marsYears).toEqual(29);
  });

  test("Should calculate the expected life age in Mars years", () => {
    aPerson.marsLifeExpectancy = aPerson.planetCalc(aPerson.earthLifeExpectancy, 1.88);
    expect(aPerson.marsLifeExpectancy).toEqual(41);
  });

  test("Should return how many years they have left in Mars Years", () => {
    aPerson.marsYears = aPerson.planetCalc(aPerson.earthAge, 1.88);
    aPerson.marsLifeExpectancy = aPerson.planetCalc(aPerson.earthLifeExpectancy, 1.88);
    expect(aPerson.getYearsLeft("Mars")).toEqual(12);
  });

  test("Should return how many years aSecondPerson has left in Mars Years", () => { 
    aSecondPerson.marsYears = aSecondPerson.planetCalc(aSecondPerson.earthAge, 1.88);
    aSecondPerson.marsLifeExpectancy = aSecondPerson.planetCalc(aSecondPerson.earthLifeExpectancy, 1.88);
    expect(aSecondPerson.marsYears).toEqual(42);
    expect(aSecondPerson.marsLifeExpectancy).toEqual(41);
    expect(aSecondPerson.getYearsLeft("Mars")).toEqual(-1);
  });


  //Jupiter
  test("Should calculate the age in Jupiter years", () => {
    aPerson.jupiterYears = aPerson.planetCalc(aPerson.earthAge, 11.86);
    expect(aPerson.jupiterYears).toEqual(4);
  });

  test("Should calculate the expected life age in Jupiter years", () => {
    aPerson.jupiterLifeExpectancy = aPerson.planetCalc(aPerson.earthLifeExpectancy, 11.86);
    expect(aPerson.jupiterLifeExpectancy).toEqual(6);
  });

  test("Should return how many years they have left in Jupiter Years", () => {
    aPerson.jupiterYears = aPerson.planetCalc(aPerson.earthAge, 11.86);
    aPerson.jupiterLifeExpectancy = aPerson.planetCalc(aPerson.earthLifeExpectancy, 11.86);
    expect(aPerson.getYearsLeft("Jupiter")).toEqual(2);
  });

});