const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
		
	
	if(eqArrays(arr1, arr2)) {
		return true;
	} else {
		return false;
	}
  
	
	};
	
	
	





module.exports = assertArraysEqual;

assertArraysEqual([1, 2, 3], [1 , 2 , 3, 4]);

