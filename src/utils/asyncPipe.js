import '@/prototypes/Array/asyncReduce';

// const asyncPipe = (fns) => {
//   return function() {
//     if (fns.length === 0) return arguments[0];

//     const result = fns[0].call(null, ...arguments);
//     const restFns = fns.slice(1);
//     if (result instanceof Promise) {
//       return result.then(pipe(...restFns));
//     } else {
//       return Promise.resolve(pipe(...restFns)(result));
//     }
//   }
// }

// export default asyncPipe;

const asyncPipe = (fns) => {
  return function(...args) {
    return fns.asyncReduce(async (out, fn, index) => {
      if(index === 0) return await fn(...out);
      return await fn(out);
    }, args);
  }
}

export default asyncPipe;

// asyncPipe([
//   (x, y) => x + y + 1,
//   (x) => new Promise((resolve) => setTimeout(() => resolve(x + 2), 2000)),
//   (x) => x + 3,
//   (x) => new Promise((resolve) => setTimeout(() => resolve(x + 4), 2000)),
// ])(2, 3)
//   .then(console.log) // 15 (after 4 second)