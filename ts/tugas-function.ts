function minimal(a: number, b: number) {
  if (a > b) return b;
  else return a;
}

function power(a: number, b: number) {
  return a ** b;
}

console.log(minimal(1, 4));
console.log(minimal(3, 2));
console.log(minimal(3, 3));

console.log(power(7, 3));
console.log(power(3, 3));
console.log(power(4, 0.5));
