import { calculateLifeExpectancy } from "../src/js/lifeExpectancy.js";

describe("calculateLifeExpectancy", () => {
  
  test("Should return an estimated life expectancy", () => {
    expect(calculateLifeExpectancy("desert", 2200, "coffee")).toEqual(78);
    expect(calculateLifeExpectancy("tropical", 1800, "tea")).toEqual(92);
    expect(calculateLifeExpectancy("plains", 2000, "tea")).toEqual(95);
    expect(calculateLifeExpectancy("no climate", 2000, "tea")).toEqual(false);
  });
});