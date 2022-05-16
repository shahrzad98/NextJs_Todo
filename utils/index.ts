export function nationalCodeEvaluator(code: string) {
  if (!code || !/^\d{10}$/.test(code)) {
    return false;
  }

  const control = +code[9];

  let sum = 0;

  for (let i = 0; i < 9; i++) {
    sum += +code[i] * (10 - i);
  }

  const remainder = sum % 11;

  if (remainder < 2) {
    return remainder === control;
  } else {
    return control === 11 - remainder;
  }
}

