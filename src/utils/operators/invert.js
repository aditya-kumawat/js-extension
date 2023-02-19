export const invert =
  (fn) =>
  (...args) =>
    -fn(...args);

// const spanishComparison = (a, b) => a.localeCompare(b, "es");
// var palabras = ["ñandú", "oasis", "mano", "natural", "mítico", "musical"];
// palabras.sort(spanishComparison);
// // ["mano", "mítico", "musical", "natural", "ñandú", "oasis"]
// palabras.sort(invert(spanishComparison));
// // ["oasis", "ñandú", "natural", "musical", "mítico", "mano"]
