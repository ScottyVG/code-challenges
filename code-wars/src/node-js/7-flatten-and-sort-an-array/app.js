"use strict";

const flattenAndSort = array => [].concat(...array).sort((a, b) => a - b)

// Function Export
module.exports = flattenAndSort

console.log("Output: " + flattenAndSort([]) + "\n");
console.log("Output: " + flattenAndSort([[], [1]]) + "\n");
console.log("Output: " + flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]) + "\n");
console.log("Output: " + flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]) + "\n");