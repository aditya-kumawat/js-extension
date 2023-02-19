export const demethodize = Function.prototype.bind.bind(
  Function.prototype.call
);

// const map = demethodize(Array.prototype.map);
// const toUpperCase = demethodize(String.prototype.toUpperCase);
