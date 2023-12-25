import { describe, expect, it } from "vitest";
import { books, filteredBooks, greatAuthors } from "../tugas-functional";
import { expectTypeOf } from "vitest";
import { test } from "vitest";

const copyOfBooks = [...books];

describe("books variable", () => {
  it("should contain objects", () => {
    expect(books).toEqual(copyOfBooks);
  });
});

describe("greatAuthors variable", () => {
  it("should be of type array", () => {
    expectTypeOf(greatAuthors).toBeArray();
  });

  test.todo(
    "should follow the format of `${book.author} adalah penulis buku ${book.title} yang sangat hebat!",
  );
});

describe("sales of each book in filteredBooks variable", () => {
  test.each(filteredBooks)("$sales more than 1_000_000?", ({ sales }) => {
    expect(sales).toBeGreaterThanOrEqual(1_000_000);
  });
});
