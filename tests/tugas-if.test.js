import { describe, it, expect } from "vitest";
import { cekNilai } from "../tugas-if";

describe("if else test to convert numeric grade to alphabet ones", () => {
  it("output type is a string", () => {
    expect(cekNilai(20)).toBeTypeOf("string");
  });

  const expectedMessage = (grade) => {
    if (grade == "A") {
      return `Selamat! Anda mendapatkan nilai ${grade}.`;
    }
    return `Anda mendapatkan nilai ${grade}.`;
  };

  it("90 and above is A", () => {
    expect(cekNilai(100)).toBe(expectedMessage("A"));
    expect(cekNilai(90)).toBe(expectedMessage("A"));
  });

  it("80 to 89 is B", () => {
    expect(cekNilai(80)).toBe(expectedMessage("B"));
    expect(cekNilai(89)).toBe(expectedMessage("B"));
  });

  it("70 to 79 is C", () => {
    expect(cekNilai(70)).toBe(expectedMessage("C"));
    expect(cekNilai(75)).toBe(expectedMessage("C"));
    expect(cekNilai(79)).toBe(expectedMessage("C"));
  });

  it("60 to 69 is D", () => {
    expect(cekNilai(60)).toBe(expectedMessage("D"));
    expect(cekNilai(68)).toBe(expectedMessage("D"));
  });

  it("below 60 is E", () => {
    expect(cekNilai(50)).toBe(expectedMessage("E"));
    expect(cekNilai(59)).toBe(expectedMessage("E"));
  });
});
