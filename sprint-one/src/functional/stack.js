var Stack = function() {
  var someInstance = {

  };

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    let lastIndex = Object.keys(storage).length;
    storage[lastIndex] = value;
  };

  someInstance.pop = function() {
    let lastIndex = Object.keys(storage).length;
    let output = storage[lastIndex - 1];
    delete storage[lastIndex - 1];
    return output;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
