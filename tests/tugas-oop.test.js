import { describe, it, expect } from "vitest";
import { Animal, Rabbit, Eagle, myRabbit, myEagle } from "../tugas-oop";

describe("class Animal", () => {
  const newAnimal = new Animal("Anjing", 10, true);

  it("has string property called name", () => {
    expect(newAnimal).toHaveProperty("name");
    expect(newAnimal.name).toBeTypeOf("string");
  });

  it("has number property called age", () => {
    expect(newAnimal).toHaveProperty("age");
    expect(newAnimal.age).toBeTypeOf("number");
  });

  it("has boolean property called isMammal", () => {
    expect(newAnimal).toHaveProperty("isMammal");
    expect(newAnimal.isMammal).toBeTypeOf("boolean");
  });
});

describe("instances of child classes", () => {
  it("instance of class Rabbit inherits from class Animal", () => {
    expect(myRabbit).toBeInstanceOf(Animal);
  });

  it("instance of class Eagle inherits from class Animal", () => {
    expect(myEagle).toBeInstanceOf(Animal);
  });
});

describe("myRabbit", () => {
  it("inherits from class Rabbit", () => {
    expect(myRabbit).toBeInstanceOf(Rabbit);
  });

  it("has property name with value 'Labi'", () => {
    expect(myRabbit.name).toBe("Labi");
  });

  it("has property age with value 2", () => {
    expect(myRabbit.age).toBe(2);
  });

  it("property isMammal Rabbit is true", () => {
    expect(myRabbit.isMammal).toBe(true);
  });

  it("method eat returns the right value", () => {
    const eatMessage = myRabbit.eat();

    expect(eatMessage).toBeTypeOf("string");
    expect(eatMessage).toBe(`${myRabbit.name} sedang makan!`);
  });
});

describe("myEagle", () => {
  it("inherits from class Eagle", () => {
    expect(myEagle).toBeInstanceOf(Eagle);
  });

  it("has property name with value 'Elo'", () => {
    expect(myEagle.name).toBe("Elo");
  });

  it("has property age with value 4", () => {
    expect(myEagle.age).toBe(4);
  });

  it("property isMammal of Eagle is false", () => {
    expect(myEagle.isMammal).toBe(false);
  });

  it("method fly of Eagle returns the right value", () => {
    const flyMessage = myEagle.fly();

    expect(flyMessage).toBeTypeOf("string");
    expect(flyMessage).toBe(`${myEagle.name} sedang terbang!`);
  });
});
