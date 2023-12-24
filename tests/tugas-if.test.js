import { describe, it, expect } from "vitest";
import { cekNilai } from "../tugas-if";

describe("if else test to convert numeric grade to alphabet ones", () => {
  it("output type is a string", () => {
    expect(cekNilai(20)).toBeTypeOf("string");
  });

  const expectedMessage = (grade) => `Selamat anda mendapatkan nilai ${grade}`;

  it("90 and above is A", () => {
    expect(cekNilai(90)).toBe(expectedMessage("A"));
  });

  it("80 and above is B", () => {
    expect(cekNilai(80)).toBe(expectedMessage("B"));
  });

  it("70 and above is C", () => {
    expect(cekNilai(70)).toBe(expectedMessage("C"));
  });

  it("60 and above is D", () => {
    expect(cekNilai(60)).toBe(expectedMessage("D"));
  });

  it("60 and below is E", () => {
    expect(cekNilai(50)).toBe(expectedMessage("E"));
  });
});
