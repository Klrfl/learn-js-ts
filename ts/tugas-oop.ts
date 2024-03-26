class Animal {
  name: string;
  age: number;
  isMammal: boolean;

  constructor(name: string, age: number, isMammal: boolean) {
    this.name = name;
    this.age = age;
    this.isMammal = isMammal;
  }
}

class Rabbit extends Animal {
  constructor(name: string, age: number, isMammal: boolean = true) {
    super(name, age, isMammal);
  }

  eat() {
    console.log(`${this.name} sedang makan!`);
  }
}

class Eagle extends Animal {
  constructor(name: string, age: number, isMammal: boolean = false) {
    super(name, age, isMammal);
  }

  fly() {
    console.log(`${this.name} sedang terbang!`);
  }
}

const myRabbit = new Rabbit("Labi", 2);
const myEagle = new Eagle("Elo", 4);
