
var RandomizedSet = function() {
    this.arr = [];
    this.map = new Map();

};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.map.has(val)) {
        return false;
    }

    this.arr.push(val)
    this.map.set(val, this.arr.length - 1);

    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (!this.map.has(val)) {
        return false
    };

    const idx = this.map.get(val);
    const lastElem = this.arr[this.arr.length - 1];

    this.arr[idx] = lastElem
    this.map.set(lastElem, idx)

    this.arr.pop()
    this.map.delete(val)

    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const randomIdx = Math.floor(Math.random() * this.arr.length)
    return this.arr[randomIdx];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */