import add from './add';

export const total = (tax: number, subtotal: number) => {
  return '$' + add(tax, subtotal);
};

export default total;
