var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  _.extend(newTree, treeMethods);
  // your code here
  newTree.children = []; // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  let tree = this;
  let output = false;
  var helper = function(tree) {
    if (output) {
      return;
    }
    if (tree.value === target) {
      output = true;
    }
    for (let i = 0; i < tree.children.length; i++) {
      helper(tree.children[i]);
    }
  };

  helper(tree);
  return output;

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
