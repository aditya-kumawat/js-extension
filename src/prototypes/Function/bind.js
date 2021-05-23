Function.prototype.bind = function(context, ...args) {
  return (...newArgs) => {
    return this.apply(context, [...args.slice(1), ...newArgs]);
  } 
}

// function add(a, b) { return a+b; }
// const ans = add.bind(this, add, 1);
// console.log(ans(2));