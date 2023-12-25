import { describe, it, expect } from "vitest";
import { name, favoriteDrink, restaurant } from "../tugas-object";
import { test } from "vitest";

describe("restaurant object", () => {
  const expectedKeys = [
    "name",
    "city",
    "favorite drink",
    "favorite food",
    "isVegan",
  ];

  it(`object restaurant should have keys ${expectedKeys.join(", ")}`);
  expectedKeys.forEach((key) => {
    expect(key).toBeDefined();
  });

  test.each(Object.keys(restaurant))(
    "property %s should not be null or empty",
    (key) => {
      // stop if key not isVegan
      if (key !== "isVegan") {
        expect(restaurant[key]).toBeTypeOf("string");
        expect(restaurant[key]).not.toBeNull();
        expect(restaurant[key].length).toBeGreaterThan(0);
      }
    },
  );

  it("optional property isVegan of restaurant should be of type boolean", () => {
    expect(restaurant.isVegan).toBeTypeOf("boolean");
  });
});

describe("variables derived from restaurant object", () => {
  it("name should be the same as restaurant.name", () => {
    expect(name).toEqual(restaurant["name"]);
  });

  it("favoriteDrink should be the same as restaurant['favorite drink']", () => {
    expect(favoriteDrink).toEqual(restaurant["favorite drink"]);
  });
});
