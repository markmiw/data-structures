class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor(storage) {

    this.storage = {};
  }

  size () {
    return Object.keys(this.storage).length;
  }

  dequeue () {
    let firstVal = this.storage[0];
    let len = Object.keys(this.storage).length;
    if (len === 2) {
      let firstVal = this.storage[1];
      delete this.storage[1];
      return firstVal;
    }
    for (let i = 0; i < len - 1; i ++) {
      this.storage[i] = this.storage[i + 1];
    }
    delete this.storage[len - 1];
    return firstVal;
  }

  enqueue (val) {
    let len = Object.keys(this.storage).length;
    for (let i = len; i > 0; i--) {
      this.storage[i] = this.storage[i - 1];
    }
    this.storage[0] = val;
  }
}
