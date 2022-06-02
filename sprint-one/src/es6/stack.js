class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor(obj) {
    this.obj = {};
  }

  size () {
    return Object.keys(this.obj).length;
  }
  push(val) {
    var len = Object.keys(this.obj).length;
    this.obj[len] = val;
  }

  pop() {
    var len = Object.keys(this.obj).length;
    let val = this.obj[len - 1];
    delete this.obj[len - 1];
    return val;
  }

}