var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (this.tail === null) {
      this.tail = Node(value);
    } else {
      this.tail.next = Node(value);
      this.tail = this.tail.next;
    }
    if (this.head === null) {
      this.head = this.tail;
    }
  };

  list.removeHead = function() {
    let output = this.head.value;
    this.head = list.head.next;
    if (this.head === null) {
      this.tail = this.head;
    }
    return output;
  };

  list.contains = function(target) {
    let cur = this.head;
    while (cur !== null) {
      if (cur.value === target) {
        return true;
      }
      cur = cur.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
