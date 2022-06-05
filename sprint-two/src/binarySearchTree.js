var BinarySearchTree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;

  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.insert = function(value) {
  if (this.left === null && value < this.value ) {
    this.left = BinarySearchTree(value);
    return;
  } else if ( this.right === null && value > this.value ) {
    this.right = BinarySearchTree(value);
    return;
  }
  if (value < this.value) {
    this.left.insert(value);
  } else {
    this.right.insert(value);
  }
  // console.log(this);
  // if (this.left === null) {
  //   if (this.value > value) {
  //     this.left = BinarySearchTree(value);
  //   } else {
  //     this.left = BinarySearchTree(this.value);
  //     this.value = value;
  //   }
  // } else {
  //   if (this.value > value) {
  //     this.right = BinarySearchTree(this.value);
  //     this.value = value;
  //   } else {
  //     this.right = BinarySearchTree(value);
  //   }
  // }
};

treeMethods.contains = function(value) {
  let result = false;

  var helper = function(tree) {
    if (result || tree === null) {
      return;
    }
    if (tree.value === value) {
      result = true;
    }
    helper(tree.left);
    helper(tree.right);
  };
  helper(this);
  return result;
};


treeMethods.depthFirstLog = function(func) {
  var helper = function(tree) {
    if (tree === null) {
      return;
    }
    func(tree.value);
    helper(tree.left);
    helper(tree.right);
  };
  helper(this);
};


//expect(binarySearchTree.left.right.value).to.equal(3)

/*
 * Complexity: What is the time complexity of the above functions?
 */
