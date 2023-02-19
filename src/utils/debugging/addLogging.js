export const addLogging =
  (fn, logger = console.log) =>
  (...args) => {
    logger(`entering ${fn.name}: ${args}`);
    try {
      const valueToReturn = fn(...args);
      logger(`exiting ${fn.name}: ${valueToReturn}`);
      return valueToReturn;
    } catch (thrownError) {
      logger(`exiting ${fn.name}: threw ${thrownError}`);
      throw thrownError;
    }
  };

// function subtract(a, b) {
//   b = changeSign(b);
//   return a + b;
// }
// function changeSign(c) {
//   return -c;
// }
// subtract(7, 5);
// // entering subtract: 7, 5
// // entering changeSign: 5
// // exiting changeSign: -5
// // exiting subtract: 2
