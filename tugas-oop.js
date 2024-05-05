export class Animal {
  constructor(name, age, isMammal) {
    this.name = name;
    this.age = age;
    this.isMammal = isMammal;
  }
}

export class Rabbit extends Animal {
  constructor(name, age, isMammal = true) {
    super(name, age, isMammal);
  }

  eat() {
    return `${this.name} sedang makan!`;
  }
}

export class Eagle extends Animal {
  constructor(name, age, isMammal = false) {
    super(name, age, isMammal);
  }

  fly() {
    return `${this.name} sedang terbang!`;
  }
}

export const myRabbit = new Rabbit("Labi", 2);
export const myEagle = new Eagle("Elo", 4);
