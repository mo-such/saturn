export const startCase = (string: string) => {
  return string
    .replace(/_|-|\./g, ' ')
    .replace(/([A-Z])/g, ' $1')
    .replace(/\b\w/g, (l) => l.toUpperCase());
};

export const toString = (value?: any) => {
  if (value === undefined) {
    return String(undefined); // if undefined is not explicitly passed
  }
  return String(value);
};
