export const onceAndAfter = (f, g) => {
  let toCall = f;
  return (...args) => {
    const result = toCall(...args);
    toCall = g;
    return result;
  };
};

// const squeak = (x) => console.log(x, "squeak!!");
// const creak = (x) => console.log(x, "creak!!");
// const makeSound = onceAndAfter(squeak, creak);
// makeSound("door"); // "door squeak!!"
// makeSound("door"); // "door creak!!"
