import { describe, expect, it } from "vitest";
import { minimal, power } from "../tugas-function";

describe("minimal function", () => {
  it("returns smallest number", () => {
    expect(minimal(1, 4)).toBe(1);
  });

  it("retuns smallest number", () => {
    expect(minimal(3, 2)).toBe(2);
  });
});

describe("power function", () => {
  it("returns the first number to the power of the second number", () => {
    expect(power(7, 3)).toBe(343);
  });

  it("returns the first number to the power of the second number", () => {
    expect(power(3, 3)).toBe(27);
  });
});
