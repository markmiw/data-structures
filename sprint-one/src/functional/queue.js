var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    let keys = Object.keys(storage); //gets indexes
    let len = keys.length;
    for (let i = len; i > 0; i--) {
      storage[i] = storage[i - 1];
    }
    storage[0] = value;
  };

  someInstance.dequeue = function() {
    let dequeuedVal = storage['0'];
    let keys = Object.keys(storage); //gets indexes
    let len = keys.length;
    if (len === 2) {
      dequeuedVal = storage[1];
      delete storage[1];
      return dequeuedVal;
    }
    for (let i = len - 1; i > 0; i--) {
      storage[i - 1] = storage[i];
    }
    delete storage[len - 1];
    return dequeuedVal;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
