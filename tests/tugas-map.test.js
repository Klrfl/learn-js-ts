import { it, expect, describe } from "vitest";
import { priceInJPY, priceInIDR, currency } from "../tugas-map";

describe("currency map", () => {
  const expected = priceInJPY * currency.get("JPY");

  it("priceInIDR is price", () => {
    expect(priceInIDR).toEqual(expected);
  });
});
