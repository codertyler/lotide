const assertArraysEqual = function(arr1, arr2) {
    
  
	if (arr1.length !== arr2.length) console.log("Arrays are not an equal length!");

	for (var i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) console.log("Items in array are not the same!");
	}

	return console.log("Arrays are equal!");

  


}

assertArraysEqual([1, 2, 3], [1,2,3]);