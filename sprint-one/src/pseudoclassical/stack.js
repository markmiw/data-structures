var Stack = function(storage) {

  this.storage = {};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Stack.prototype.size = function () {
  return Object.keys(this.storage).length;
};

Stack.prototype.pop = function () {
  let index = Object.keys(this.storage).length - 1;
  let poppedVal = this.storage[index];
  delete this.storage[index];
  return poppedVal;
};

Stack.prototype.push = function (val) {
  let index = Object.keys(this.storage).length;
  this.storage[index] = val;
};



