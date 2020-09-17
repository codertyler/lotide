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

// assertEqual(eqArrays([1, 2, 3], [1,2,3,4]), true);

const cd = { c: "1", d: ["2", 3] };
const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqArrays(cd.d, cd2.d), false);
