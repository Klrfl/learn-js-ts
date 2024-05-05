// malas ngerjain ahhahahahahah
export const detectTriangle = (a, b, c) => {
  try {
    validateNumberInput(a, b, c);
    if (a === b && b === c) return "Segitiga sama sisi";
    if (a === b || a === c || b === c) return "Segitiga sama kaki";

    return "Segitiga sembarang";
  } catch (error) {
    return error.message;
  }
};

export class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

export function validateNumberInput(...args) {
  for (let i = 0; i < args.length; i++) {
    if (typeof args[i] !== "number") {
      throw new ValidationError(`Argumen ke-${i + 1} harus number`);
    }
  }
}
