const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`❤   Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`🚫  Assertion Failed: ${actual} !== ${expected}`);
  }

};

const eqObjects = function(object1, object2) {


  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (let item of Object.keys(object1)) {
    if (object1[item] !== object2[item]) {
      return false;
    } else if (Array.isArray(object1[item], object2[item])) {
      eqArrays(object1[item], object2[item]);
    } else {
      return true;
    }
  }


  
}

const eqArrays = function(arr1, arr2) {
    
  
	if (arr1.length !== arr2.length) return false;

	for (var i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) return false;
	}

	return true;

}


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(dc.d);
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);