import { describe, it, expect, vi, afterEach } from "vitest";
import { Animal, Rabbit, Eagle } from "../tugas-oop";
import { beforeEach } from "vitest";

describe("instances of child classes inherits from Animal", () => {
  it("instance of class Rabbit inherits from class Animal", () => {
    const rabbitInstance = new Rabbit("TheEagle", 10);
    expect(rabbitInstance).toBeInstanceOf(Animal);
  });

  it("instance of class Eagle inherits from class Animal", () => {
    const eagleInstance = new Eagle("TheEagle", 20);
    expect(eagleInstance).toBeInstanceOf(Animal);
  });
});

describe("methods of Rabbit", () => {
  const consoleMock = vi
    .spyOn(console, "log")
    .mockImplementation(() => undefined);

  afterEach(() => {
    consoleMock.mockReset();
  });

  it("method eat of rabbit logs the right value", () => {
    const rabbitInstance = new Rabbit("TheRabbit", 20);
    rabbitInstance.eat();

    expect(consoleMock).toHaveBeenCalledOnce();
    expect(consoleMock).toHaveBeenLastCalledWith(
      `${rabbitInstance.name} sedang makan!`,
    );
  });

  it("method fly of Eagle logs the right value", () => {
    const eagleInstance = new Eagle("TheEagle", 20);
    eagleInstance.fly();

    expect(consoleMock).toHaveBeenCalledOnce();
    expect(consoleMock).toHaveBeenLastCalledWith(
      `${eagleInstance.name} sedang terbang!`,
    );
  });
});
