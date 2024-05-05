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

describe("class Rabbit", () => {
  it("inherits from class Animal", () => {
    expect(Rabbit.prototype).toBeInstanceOf(Animal);
  });

  it("has method eat that returns the right value", () => {
    expect(Rabbit.prototype).toHaveProperty("eat");
    const eatMessage = myRabbit.eat();

    expect(eatMessage).toBeTypeOf("string");
    expect(eatMessage).toBe(`${myRabbit.name} sedang makan!`);
  });
});

describe("class Eagle", () => {
  it("inherits from class Animal", () => {
    expect(Eagle.prototype).toBeInstanceOf(Animal);
  });

  it("method fly of Eagle returns the right value", () => {
    expect(Eagle.prototype).toHaveProperty("fly");
    const flyMessage = myEagle.fly();

    expect(flyMessage).toBeTypeOf("string");
    expect(flyMessage).toBe(`${myEagle.name} sedang terbang!`);
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

  it("property isMammal is true", () => {
    expect(myRabbit.isMammal).toBe(true);
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

  it("property isMammal is false", () => {
    expect(myEagle.isMammal).toBe(false);
  });
});
