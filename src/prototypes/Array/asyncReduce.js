import { asyncReduce } from "@/utils/array";

Array.prototype.asyncReduce = async function (callback, initialValue) {
  return asyncReduce(this, callback, initialValue);
};

// asyncReduce(
//   [1, 2, 3],
//   async (out, curr) => {
//     const val = await new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(out + curr);
//       }, 1000);
//     });
//     return val;
//   },
//   0
// ).then(console.log);
