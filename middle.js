const eqArrays = function(arr1, arr2) {
    
  
	if (arr1.length !== arr2.length) return false;

	for (var i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) return false;
	}

	return true;
}


const assertArraysEqual = function(arr1, arr2) {
    
  
	if (arr1.length !== arr2.length) console.log("Arrays are not an equal length!");

	for (var i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) console.log("Items in array are not the same!");
	}

	return console.log("Arrays are equal!");

}

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`❤   Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`🚫  Assertion Failed: ${actual} !== ${expected}`);
  }

};


const middle = function(arr) {
  if (arr.length <= 2) {
    return [];
  } else {

    return arr.slice(1, arr.length -1);

  }
}

console.log(middle([1,5,5,5,6]));