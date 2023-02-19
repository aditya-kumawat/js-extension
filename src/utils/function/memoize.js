export const memoize = (fn) => {
  if (fn.length === 1) {
    let cache = {};
    return (...args) => {
      let strX = JSON.stringify(args);
      return strX in cache ? cache[strX] : (cache[strX] = fn(...args));
    };
  } else {
    return fn;
  }
};

// function fib(n) {
//   if (n == 0) {
//     return 0;
//   } else if (n == 1) {
//     return 1;
//   } else {
//     return fib(n - 2) + fib(n - 1);
//   }
// }
// fib = memoize(fib);
