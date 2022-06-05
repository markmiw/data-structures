

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.keys = {};
};

HashTable.prototype.insert = function(k, v) {
  let notFound = true;
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (!this._storage.get(index)) {
    this._storage.set(index, []);
  }
  let bucket = this._storage.get(index);

  for (let i = 0; i < bucket.length; i++) {
    let [key, value] = bucket[i];
    if (key === k) {
      bucket[i][0] = k;
      bucket[i][1] = v;
      notFound = false;
      break;
    }
  }
  if (notFound) {
    bucket.push([k, v]);
  }

  // var index = getIndexBelowMaxForKey(k, this._limit);
  // let item = this._storage.get(index);
  // if (!(k in this.keys) && item !== undefined) {
  //   this.keys[k] = v;
  //   this._limit = this._limit * 2;
  //   this._storage = LimitedArray(this._limit);
  //   let index = 0;
  //   for (let key in this.keys) {
  //     this._storage.set(index, this.keys[key]);
  //     index++;
  //   }
  // } else {
  //   this._storage.set(index, v);
  //   this.keys[k] = v;
  //   console.log(this._storage.get(index));
  // }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = this._storage.get(index);
  if (bucket) {
    for (let i = 0; i < bucket.length; i++) {
      let [key, val] = bucket[i];
      if (key === k) {
        return val;
      }
    }
    return undefined;
  } else {
    return undefined;
  }
  // return this.keys[k];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = this._storage.get(index);
  if (bucket) {
    for (let i = 0; i < bucket.length; i++) {
      let [key, val] = bucket[i];
      if (key === k) {
        bucket.splice(i, 1);
        break;
      }
    }
    return undefined;
  } else {
    return undefined;
  }
  // this._storage.set(index, undefined);
  // delete this.keys[k];
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


