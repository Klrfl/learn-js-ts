import { describe, expect } from "vitest";
import { getProvinces } from "../kuis-coding-async/tugas-async-1";
import { expectTypeOf } from "vitest";
import { test } from "vitest";

describe("function that returns provinces of a country", () => {
  test.concurrent("should return an array", async () => {
    const response = await getProvinces("id");
    expectTypeOf(response).toBeArray();
  });

  test.concurrent("should return an error for an invalid country", async () => {
    await expect(async () => await getProvinces("xe")).rejects.toThrowError(
      "Country not found",
    );
  });
});
