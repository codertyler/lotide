const tail = function(arr) {

  let newArr = arr.slice(1);
  return newArr;

};

let x = [3,4];
console.log(tail([1,3,4]));

module.exports = tail;
