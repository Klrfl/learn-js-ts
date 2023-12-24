// malas ngerjain ahhahahahahah
const detectTriangle = (a, b, c) => {
  try {
    validateNumberInput(a, b, c);
    if (a === b && b === c) return "Segitiga sama sisi";
    if (a === b || a === c || b === c) return "Segitiga sama kaki";

    return "Segitiga sembarang";
  } catch (error) {
    console.error(error);
  }
};

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function validateNumberInput(...args) {
  for (let i = 0; i < args.length; i++) {
    if (typeof args[i] !== "number") {
      console.log(typeof args[i]);
      throw new ValidationError(`Argumen ke-${i + 1} harus bertipe number`);
    }
  }
}

console.log(detectTriangle(1, 2, "impostor amongus!!"));
