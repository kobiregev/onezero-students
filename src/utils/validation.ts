export function validateEmail(email: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function isValidIsraeliPhone(phone: string): boolean {
  const regex = /^(?:\+972|0)([23489]|5[0248]|77)[1-9](?!.*(.)\1{2})\d{6}$/;
  return regex.test(phone);
}
