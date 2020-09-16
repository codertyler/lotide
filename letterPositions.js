const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
      
      
    }
  }


  // for (const letter of sentence) {

  //   if (letter !== " ") {
  //     results[letter] = [];
  //     if (results[letter]) {
  //       results[letter].push(sentence.indexOf(letter));
  //     } 
  //   }
    
    



  // logic to update results here
  return results;
};

console.log(letterPositions("lighthouse in the house"))