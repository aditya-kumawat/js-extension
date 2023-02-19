export const arity =
  (fn, n) =>
  (...args) =>
    fn(...args.slice(0, n));

export const nullary = (fn) => arity(fn, 0);
export const unary = (fn) => arity(fn, 1);
export const binary = (fn) => arity(fn, 2);
export const ternary = (fn) => arity(fn, 3);

// ["123.45", "-67.8", "90"].map(unary(parseInt)); // [123, -67, 90]
