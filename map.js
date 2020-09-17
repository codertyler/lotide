const assertArraysEqual = function(arr1, arr2) {
    
  
	if (arr1.length !== arr2.length) console.log("Arrays are not an equal length!");

	for (var i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) console.log("Items in array are not the same!");
	}

	return console.log("Arrays are equal!");

  


}

const eqArrays = function(arr1, arr2) {
    
  
	if (arr1.length !== arr2.length) return false;

	for (var i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) return false;
	}

	return true;

}


const map = function (array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}


const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);

