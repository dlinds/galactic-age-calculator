import { calculateLifeExpectancy } from "../src/js/lifeExpectancy.js";

describe("calculateLifeExpectancy", () => {
  
  test("Should return an estimated life expectancy", () => {
    expect(calculateLifeExpectancy("desert", 2200, "coffee")).toEqual(78);
  });
});