export function makeEvenNumbers() {
  let result = [];

  for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) result.push(i);
  }

  return result;
}
