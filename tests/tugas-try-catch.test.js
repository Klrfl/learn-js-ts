import { describe, expect, it } from "vitest";
import {
  ValidationError,
  detectTriangle,
  validateNumberInput,
} from "../tugas-try-catch";

describe("a function that detects triangles", () => {
  it("should throw an error with the right message when input is invalid", () => {
    expect(detectTriangle(undefined, 2, 10)).toBe("Argumen ke-1 harus number");
    expect(detectTriangle(0, null, 10)).toBe("Argumen ke-2 harus number");
    expect(detectTriangle(1, 2, "3")).toBe("Argumen ke-3 harus number");
  });

  it("should return Segitiga sama sisi when all sides are the same", () => {
    expect(detectTriangle(3, 3, 3)).toBe("Segitiga sama sisi");
  });

  it("should return Segitiga sama kaki when 2/3 sides are the same", () => {
    expect(detectTriangle(2, 2, 3)).toBe("Segitiga sama kaki");
  });

  it("should return Segitiga sembarang when all sides are different", () => {
    expect(detectTriangle(10, 20, 30)).toBe("Segitiga sembarang");
  });
});

describe("input validation function", () => {
  it("should throw error from ValidationError", () => {
    expect(() => validateNumberInput(1, 2, "impostor amongus")).toThrowError(
      ValidationError,
    );
  });
});

describe("validation error class", () => {
  it("should inherit from class Error", () => {
    expect(ValidationError.prototype).toBeInstanceOf(Error);
  });

  it("should be named ValidationError", () => {
    expect(ValidationError.name).toEqual("ValidationError");
  });
});
