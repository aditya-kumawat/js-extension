Function.prototype.call = function(context, ...args) {
  context._myFn = this;
  return context._myFn(...args);
}

// function add(a, b) { return a+b; }
// const ans = add.call(this, add, 1, 2);
// console.log(ans);