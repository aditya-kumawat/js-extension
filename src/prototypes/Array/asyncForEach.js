import { asyncForEach } from "@/utils/array";

Array.prototype.asyncForEach = async function (callback) {
  asyncForEach(this, callback);
};

// [1, 2, 3]
//   .asyncForEach(async (value) => {
//     const val = await new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(value * 2);
//       }, 1000);
//     });
//     return val;
//   })
