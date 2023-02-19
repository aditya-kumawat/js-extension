export const asyncFilter = async function (arr, callback) {
  const out = [];

  let index = 0;
  while (index < arr.length) {
    const isValid = await callback(arr[index], index, arr);
    if (isValid) out.push(arr[index]);
    index++;
  }

  return out;
};

// asyncFilter([1, 2, 3], async (value) => {
//   const val = await new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(value % 2);
//     }, 1000);
//   });
//   return val;
// }).then(console.log);
