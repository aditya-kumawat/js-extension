const partialCurry = (fn, len = fn.length) =>
  len === 0
    ? fn()
    : (...pp) => partialCurry(fn.bind(null, ...pp), len - pp.length);

// const sum = (...args) => args.reduce((x, y) => x + y, 0);
// pcSum5 = partialCurryingByBind2(sum2, 5); // curriedSum5 will expect 5 parameters
// pcSum5(1, 5)(3)(7, 4); // 20
