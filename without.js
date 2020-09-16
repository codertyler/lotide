const assertArraysEqual = function(arr1, arr2) {
    
  
	if (arr1.length !== arr2.length) console.log("Arrays are not an equal length!");

	for (var i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) console.log("Items in array are not the same!");
	}

	return console.log("Arrays are equal!");

}

assertArraysEqual([1, 2, 3], [1,2,3]);

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`❤   Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`🚫  Assertion Failed: ${actual} !== ${expected}`);
  }

};

const eqArrays = function(arr1, arr2) {
    
  
	if (arr1.length !== arr2.length) return false;

	for (var i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) return false;
	}

	return true;

  


}

assertEqual(eqArrays([1, 2, 3], [1,2,3]), true);

const without = function (source, itemsToRemove) {
  
  withoutArray = [];
  
  for (let i = 0; i < source.length; i++) {
    if (source[i] !== itemsToRemove[i]) {
      withoutArray.push(source[i]);
    }

  }

  return withoutArray;

}

without([1, 2, 3], [1]) // => [2, 3]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

