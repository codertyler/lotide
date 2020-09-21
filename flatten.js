const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
		
	
	if(eqArrays(arr1, arr2)) {
		console.log("Arrays are equal!");
	} else {
		console.log("Arrays are not equal!");
	}
  
	
	};
	
	const flatten = function (arr) {
    let flattened = [];
    
    arr.forEach((item) => {
      if (Array.isArray(item)) {
        flattened.push(item);
      } else {
       flatten(item);
      }
    });

    return flattened;

  };

  console.log(flatten([1, 2, [3, 4], 5, [6]]));