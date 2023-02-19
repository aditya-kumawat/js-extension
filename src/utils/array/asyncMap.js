export const asyncMap = async function (arr, callback) {
  let out = [];

  let index = 0;
  while (index < arr.length) {
    const curr = await callback(arr[index], index, arr);
    out.push(curr);
    index++;
  }

  return out;
};

// asyncMap([1, 2, 3], async (value) => {
//   const val = await new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(value * 2);
//     }, 1000);
//   });
//   return val;
// }).then(console.log);
