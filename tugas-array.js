function makeEvenNumbers() {
  let result = [];

  for (i = 1; i <= 100; i++) {
    if (i % 2 == 0) result.push(i);
  }

  return result;
}

const evenNumbers = makeEvenNumbers();

console.log(evenNumbers);
