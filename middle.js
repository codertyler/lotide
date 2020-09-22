
const middle = function(arr) {
  if (arr.length <= 2) {
    return [];
  } else {

    return arr.slice(1, arr.length -1);

  }
}




module.exports = middle;