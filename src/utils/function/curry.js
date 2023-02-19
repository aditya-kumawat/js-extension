export const curry = (fn, len = fn.length) =>
  len === 0 ? fn() : (p) => curry(fn.bind(null, p), len - 1);

// const sum = (...args) => args.reduce((x, y) => x + y, 0);
// curriedSum = curry(sum, 5); // curriedSum will expect 5 parameters
// curriedSum(1)(5)(3)(7)(4); // 20
