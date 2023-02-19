export const not =
  (fn) =>
  (...args) =>
    !fn(...args);

// const isNegativeBalance = v => v.balance < 0;
// const isPositiveBalance = not(isNegativeBalance);
