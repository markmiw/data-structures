var Tree = function(value) {
  var tree = {};
  tree.value = value;

  _.extend(tree, treeMethods);
  // your code here
  tree.children = []; // fix me

  return tree;
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