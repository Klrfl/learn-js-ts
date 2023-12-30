// we don't need to even write handling for this because
// typescript will not even run if you input the wrong type
export function detectTriangle(a: number, b: number, c: number): string {
  if (a === b && b === c) {
    return "Segitiga sama sisi";
  }

  if (a === b || a === c || b === c) {
    return "Segitiga sama kaki";
  }

  return "Segitiga sembarang";
}
