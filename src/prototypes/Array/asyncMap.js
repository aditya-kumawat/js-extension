import { asyncMap } from "@/utils/array";

Array.prototype.asyncMap = async function (callback) {
  return asyncMap(this, callback);
};

// asyncMap([1, 2, 3], async (value) => {
//   const val = await new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(value * 2);
//     }, 1000);
//   });
//   return val;
// }).then(console.log);
