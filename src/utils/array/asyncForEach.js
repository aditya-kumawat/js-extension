export const asyncForEach = async function (arr, callback) {
  let index = 0;
  while (index < arr.length) {
    await callback(arr[index], index, arr);
    index++;
  }
};

// asyncForEach([1, 2, 3], async (value) => {
//   const val = await new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(value * 2);
//     }, 1000);
//   });
//   return val;
// });
