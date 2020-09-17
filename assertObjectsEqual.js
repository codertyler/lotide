const eqObjects = function(object1, object2) {

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }


  for (let item of Object.keys(object1)) {
      if (Array.isArray(object1[item])) {
        if (!eqArrays(object1[item], object2[item])) return false;
        continue;
      }

      if (object1[item] !== object2[item]) {
        return false;
      }
  }

  return true;
}

const eqArrays = function(arr1, arr2) {
  
	if (arr1.length !== arr2.length) return false;

	for (var i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) return false;
	}

	return true;

}

eqObjects({ a: 1, b: 1}, { a: 1, b: 1});

const assertObjectsEqual = function(actual, expected) {

  actual = eqObjects(object1, object2);

    if (actual === expected) {
      console.log("Objects are the same");
    } else {
      console.log("Objects are not the same");
    }

};

assertObjectsEqual(true, false);