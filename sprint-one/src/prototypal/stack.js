var Stack = function() {

  let instance = Object.create(stackMethods);
  instance.storage = {};
  return instance;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var stackMethods = {};

stackMethods.size = function () {
  return Object.keys(this.storage).length;
};

stackMethods.push = function (value) {
  let index = Object.keys(this.storage).length;
  this.storage[index] = value;
};

stackMethods.pop = function () {

  let len = Object.keys(this.storage).length - 1;
  let output = this.storage[len];
  delete this.storage[len];
  return output;

};

