const myPut = (text, name, tStart, tEnd) =>
  console.log(`${name} - ${text} ${tEnd - tStart} ms`);
const myGet = () => Date.now();

export const addTiming =
  (fn, getTime = myGet, output = myPut) =>
  (...args) => {
    let tStart = getTime();
    try {
      const valueToReturn = fn(...args);
      output("normal exit", fn.name, tStart, getTime());
      return valueToReturn;
    } catch (thrownError) {
      output("exception thrown", fn.name, tStart, getTime());
      throw thrownError;
    }
  };

// function subtract(a, b) {
//   b = changeSign(b);
//   return a + b;
// }
// subtract = addTiming(subtract);
// let x = subtract(7, 5); // subtract - normal exit 0.10500000000001819 ms
