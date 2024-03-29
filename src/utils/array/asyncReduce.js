export const asyncReduce = async function (arr, callback, initialValue) {
  let out = initialValue;

  let index = 0;
  if (initialValue === undefined) {
    out = arr[0];
    initialValue = out;
    index++;
  }

  while (index < arr.length) {
    out = await callback(out, arr[index], index, arr);
    index++;
  }

  return out;
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
