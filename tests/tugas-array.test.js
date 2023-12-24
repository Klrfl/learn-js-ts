import { describe, expect, it } from "vitest";
import { makeEvenNumbers } from "../tugas-array";

const evenNumbers = () => {
  let result = [];
  for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) result.push(i);
  }
  return result;
};

describe("literally a function that returns even numbers from 1 to 100", () => {
  it("returns 1 to 100 in a fucking array", () => {
    expect(makeEvenNumbers()).toEqual(evenNumbers());
  });
});
