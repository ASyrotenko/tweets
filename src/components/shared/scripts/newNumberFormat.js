export const newNumberFormat = number => {
  return new Intl.NumberFormat('en-IN').format(number);
};
