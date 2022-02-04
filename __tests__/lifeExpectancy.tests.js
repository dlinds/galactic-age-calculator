import { calculateLifeExpectancy } from "../src/js/person.js";

describe("LifeExpectancy", () => {
  
  test("Should return an estimated life expectancy", () => {
    calculateLifeExpectancy("desert", 2200, "coffee").toEqual(78);
  });
});