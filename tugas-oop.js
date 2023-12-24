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
    console.log(`${this.name} sedang makan!`);
  }
}

export class Eagle extends Animal {
  constructor(name, age, isMammal = false) {
    super(name, age, isMammal);
  }

  fly() {
    console.log(`${this.name} sedang terbang!`);
  }
}
