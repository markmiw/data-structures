var Queue = function(storage) {

  this.storage = {};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Queue.prototype.size = function () {
  return Object.keys(this.storage).length;
};

Queue.prototype.enqueue = function (value) {
  let len = Object.keys(this.storage).length;
  for (let i = len; i > 0; i--) {
    this.storage[i] = this.storage[i - 1];
  }
  this.storage[0] = value;
};

Queue.prototype.dequeue = function () {
  let returnedVal = this.storage[0];
  let len = Object.keys(this.storage).length - 1;
  if (len === 1) {
    returnedVal = this.storage[1];
    delete this.storage[1];
    return returnedVal;
  }
  for (let i = 0; i < len; i++) {
    this.storage[i] = this.storage[i + 1];
  }
  delete this.storage[len];
  return returnedVal;
};

