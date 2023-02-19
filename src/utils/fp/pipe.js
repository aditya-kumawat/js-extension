export const pipe = (fns) => {
  return function (...args) {
    return fns.reduce((out, fn, index) => {
      if (index === 0) return fn(...out);
      return fn(out);
    }, args);
  };
};

// const ans = pipe([
//   (a, b) => a + b,
//   (x) => x*2
// ])(2, 3);
// console.log(ans);
