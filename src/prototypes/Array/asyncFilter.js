Array.prototype.asyncFilter = async function(callback) {
  const arr = this;
  let out = [];
  
  let index = 0;
  while(index < arr.length) {
    const isValid = await callback(arr[index], index, arr);
    if(isValid) out.push(arr[index]);
    index++;
  }

  return out;
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