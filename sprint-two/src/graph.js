

// Instantiate a new graph
var Graph = function() {
  this.container = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var temp = {};
  temp.value = node;
  temp.neighbors = [];
  this.container[node] = temp;
  //this.container[node].neighbors = neighbors;
};

//[1] - [2]
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  let graph = this.container;
  if (graph[node].value === node) {
    return true;
  } else {
    return false;
  }

  // let output = false;
  // let visited = {};
  // var search = function(graph) {
  //   if (output) {
  //     return;
  //   }
  //   if (JSON.stringify(graph) in visited) {
  //     return;
  //   } else {
  //     visited[JSON.stringify(graph)] = true;
  //   }
  //   if (graph.value === node) {
  //     output = true;
  //     return;
  //   }
  //   for (let i = 0; i < graph.neighbors.length; i++) {
  //     let neighbor = graph.neighbors[i];
  //     search(neighbor);
  //   }
  // };
  // search(graph);
  // return output;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {

  let graph = this.container;
  if (graph[node].value === node) {
    graph[node].value = undefined;
    graph[node].neighbors = [];
  }
  for (let key in graph) {
    for (let i = 0; graph[key].neighbors.length; i++) {
      if (graph[key].neighbors[i] === node) {
        graph[key].neighbors.splice(i, 1);
      }
    }
  }
  return graph;
  // let output = false;
  // let visited = {};
  // var search = function(graph) {
  //   if (output) {
  //     return;
  //   }
  //   if (JSON.stringify(graph) in visited) {
  //     return;
  //   } else {
  //     visited[JSON.stringify(graph)] = true;
  //   }
  //   if (graph.value === node) {
  //     graph.value = undefined;
  //     output = true;
  //   }
  //   for (let i = 0; i < graph.neighbors.length; i++) {
  //     let neighbor = graph.neighbors[i];
  //     search(neighbor);
  //   }
  // };
  // search(graph);


};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  let graph = this.container;
  if (graph[fromNode].value === fromNode) {
    for (let i = 0; i < graph[fromNode].neighbors.length; i++) {
      let neighbor = graph[fromNode].neighbors[i];
      if (neighbor === toNode) {
        return true;
      }
    }

    return false;

  }
  if (graph[toNode].value === toNode) {
    for (let i = 0; i < graph[toNode].neighbors.length; i++) {
      let neighbor = graph[toNode].neighbors[i];
      if (neighbor === fromNode) {
        return true;
      }
    }

    return false;

  }

  return false;
  // let output = false;
  // let visited = {};
  // var search = function(graph) {
  //   if (output) {
  //     return;
  //   }
  //   if (JSON.stringify(graph) in visited) {
  //     return;
  //   } else {
  //     visited[JSON.stringify(graph)] = true;
  //   }
  //   if (graph.value === fromNode) {
  //     // graph.value = undefined;
  //     for (let i = 0; i < graph.neighbors.length; i++) {
  //       if (graph.neighbors[i] === toNode) {
  //         output = true;
  //         break;
  //       }
  //     }
  //     return;
  //   }
  //   for (let i = 0; i < graph.neighbors.length; i++) {
  //     let neighbor = graph.neighbors[i];
  //     search(neighbor);
  //   }
  // };
  // search(graph);
  // return output;

};
//[1] - [2]
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  let graph = this.container;
  if (graph[fromNode].value === Number(fromNode)) {
    graph[fromNode].neighbors.push(toNode);
  }
  if (graph[toNode].value === Number(toNode)) {
    graph[toNode].neighbors.push(fromNode);
  }
  // let output = false;
  // let visited = {};
  // var search = function(graph, targetNode) {
  //   if (output) {
  //     return;
  //   }
  //   if (JSON.stringify(graph) in visited) {
  //     return;
  //   } else {
  //     visited[JSON.stringify(graph)] = true;
  //   }
  //   if (graph.value === fromNode) {
  //     // graph.value = undefined;
  //     output = true;
  //     return graph;
  //   }
  //   for (let i = 0; i < graph.neighbors.length; i++) {
  //     let neighbor = graph.neighbors[i];
  //     search(neighbor, targetNode);
  //   }
  // };
  // let node1 = search(graph, fromNode);
  // let node2 = search(graph, toNode);
  // debugger;
  // return output;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  let graph = this.container;
  for (let i = 0; i < graph[fromNode].neighbors.length; i++) {
    if (graph[fromNode].neighbors[i] === toNode) {
      graph[fromNode].neighbors.splice(i, 1);
    }
  }
  for (let i = 0; i < graph[toNode].neighbors.length; i++) {
    if (graph[toNode].neighbors[i] === fromNode) {
      graph[toNode].neighbors.splice(i, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  let graph = this.container;
  for (let node in graph) {
    cb(node);
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */


