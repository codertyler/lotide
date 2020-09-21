const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`❤   Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`🚫  Asserretion Failed: ${actual} !== ${expected}`);
  }

};

const countLetters = function(str) {
  results = {};
  let newStr = str.split(" ");
  let useStr = newStr.join("");

  for (const letter of useStr) {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
  }

  return results;

}

console.log(countLetters("lighthouse in the house"));