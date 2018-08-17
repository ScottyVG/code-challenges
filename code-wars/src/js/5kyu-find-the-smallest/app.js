const smallest = (n) => {
	return n.sort(function(a, b){return a-b})[0];
};
// console.log( smallest( [34, 15, 88, 2] ))
// console.log( smallest( [34, -345, -1, 100] ))
module.exports = smallest;