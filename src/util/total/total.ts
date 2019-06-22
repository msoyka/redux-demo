import add from 'util/add';

const total = (tax: number, subtotal: number) => {
  return '$' + add(tax, subtotal);
};

export default total;
