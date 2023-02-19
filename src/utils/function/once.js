export const once = (fn) => {
  let done = false;
  let result;
  return (...args) => {
    if (!done) {
      done = true;
      result = func(...args);
    }
    return result;
  };
};

// const squeak = a => console.log(a, " squeak!!");
// const squeakOnce = once(squeak);
// squeakOnce("only once"); // "only once squeak!!"
// squeakOnce("only once"); // no output
// squeakOnce("only once"); // no output
