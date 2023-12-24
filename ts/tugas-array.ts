function makeEvenNumber(): number[] {
  let result: number[] = [];

  for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) result.push(i);
  }

  return result;
}

const evenNumbers = makeEvenNumber();

console.log(evenNumbers);
