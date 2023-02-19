import { asyncReduce } from "@/utils/array";

export const asyncPipe = (fns) => {
  return function(...args) {
    return asyncReduce(fns, async (out, fn, index) => {
      if(index === 0) return await fn(...out);
      return await fn(out);
    }, args);
  }
}

// asyncPipe([
//   (x, y) => x + y + 1,
//   (x) => new Promise((resolve) => setTimeout(() => resolve(x + 2), 2000)),
//   (x) => x + 3,
//   (x) => new Promise((resolve) => setTimeout(() => resolve(x + 4), 2000)),
// ])(2, 3)
//   .then(console.log) // 15 (after 4 second)