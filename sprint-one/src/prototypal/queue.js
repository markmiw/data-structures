var Queue = function() {

  var instance = Object.create(queueMethods);
  instance.storage = {};
  return instance;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {};

queueMethods.size = function () {
  return Object.keys(this.storage).length;
};

queueMethods.enqueue = function (value) {
  let len = Object.keys(this.storage).length;
  for (let i = len; i > 0; i--) {
    this.storage[i] = this.storage[i - 1];
  }
  this.storage[0] = value;
};

queueMethods.dequeue = function () {
  let len = Object.keys(this.storage).length - 1;
  if (len === 1) {
    let removedNum = this.storage[1];
    delete this.storage[1];
    return removedNum;
  }
  let removedNum = this.storage[0];
  for (let i = 0; i < len; i++) {
    this.storage[i] = this.storage[i + 1];
  }
  delete this.storage[len];
  return removedNum;

};


