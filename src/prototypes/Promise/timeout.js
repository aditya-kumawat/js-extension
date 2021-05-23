import timeoutPromise from '@/utils/timeoutPromise';

Promise.prototype.timeout = function(timeoutDuration, error) {
  const promise = this;
  // if(error === undefined) {
  //   error = new Error('Timeout error', promise);
  // }

  return Promise.race([
    promise,
    timeoutPromise(timeoutDuration, error)
    // new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     reject(error);
    //   }, timeoutDuration);
    // })
  ]);
}

// const apiCall = fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json());
  
// apiCall.timeout(10)
//   .then(console.log)
//   .catch(console.log);