var Stack = function() {
  let instance = {};
  instance.storage = {};
  _.extend(instance, stackMethods);
  return instance;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var stackMethods = {};

stackMethods.size = function() {
  return Object.keys(this.storage).length;
};

stackMethods.push = function(value) {
  let keys = Object.keys(this.storage);
  let len = keys.length;
  this.storage[len] = value;
};

stackMethods.pop = function() {
  let len = Object.keys(this.storage).length - 1;
  let poppedVal = this.storage[len];
  delete this.storage[len];
  return poppedVal;
};


