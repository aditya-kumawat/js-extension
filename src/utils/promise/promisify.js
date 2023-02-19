export const promisify =
  (fn) =>
  (...args) =>
    new Promise((resolve, reject) =>
      fn(...args, (err, data) => (err ? reject(err) : resolve(data)))
    );

// const fspromise = promisify(fs.readFile.bind(fs));
// const goodRead = (data) => console.log("SUCCESSFUL PROMISE", data);
// const badRead = (err) => console.log("UNSUCCESSFUL PROMISE", err);
// fspromise("./readme.txt") // success .then(goodRead)
//   .catch(badRead);
