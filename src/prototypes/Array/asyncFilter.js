import { asyncFilter } from "@/utils/array";

Array.prototype.asyncFilter = async function (callback) {
  return asyncFilter(this, out);
};

// [1, 2, 3]
//   .asyncFilter(async (value) => {
//     const val = await new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(value % 2);
//       }, 1000);
//     });
//     return val;
//   })
//   .then(console.log);
