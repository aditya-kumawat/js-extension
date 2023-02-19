import {timeoutPromise} from '@/utils/promise';

Promise.prototype.timeout = function(timeoutDuration, error) {
  return Promise.race([
    this,
    timeoutPromise(timeoutDuration, error)
  ]);
}

// const apiCall = fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json());
  
// apiCall.timeout(10)
//   .then(console.log)
//   .catch(console.log);