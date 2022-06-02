var Queue = function() {

  let instance = {};
  instance.storage = {};
  _.extend(instance, queueMethods); //adds and extends object
  return instance;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {};

queueMethods.size = function () {
  return Object.keys(this.storage).length;
};

queueMethods.enqueue = function (value) {
  let keys = Object.keys(this.storage);
  let len = keys.length;
  for (let i = len; i > 0; i--) {
    this.storage[i] = this.storage[i - 1];
  }
  this.storage[0] = value;
};

queueMethods.dequeue = function () {
  let removedVal = this.storage[0];
  let keys = Object.keys(this.storage);
  let len = keys.length;

  if (len === 2) {
    removedVal = this.storage[1];
    delete this.storage[1];
    return removedVal;
  }

  for (let i = 0; i < len - 1; i++) {
    this.storage[i] = this.storage[i + 1];
  }
  delete this.storage[len - 1];
  return removedVal;
};




