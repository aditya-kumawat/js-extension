Function.prototype.apply = function(context, args) {
  context._myFn = this;
  return context._myFn(...args);
}

// function add(a, b) { return a+b; }
// const ans = add.apply(this, add, [1, 2]);
// console.log(ans);