function reverse(word){
  //'abc'=>'cba'
  //const wordArray = word.split("");
  //const reversedWordArray = wordArray.reverse();
  //const reversedWord = reversedWordArray.join("")
  //return reversedWord;
  return word.split("").reverse().join("");
}


function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = reverse(word);
  
  if (word === reversedWord){
    return true
  } else {
    return false
  }
}

/* 
  Add your pseudocode here
  -If word is the same as the word in reverse, return true, else false 

*/

/*
  Add written explanation of your solution here
  -create reverse function w/ parameter of word
  -make word/string into an array using split method
  -reverse the array using reverse method 
  -join the reversed array tg with join method
  -pass reverse(word) to isPalindrome(word)
  -word parameter in palindrome MUST match the reverse()
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expexting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");
  console.log("Expecting: false");
  console.log("=>", isPalindrome("ba"));
}

module.exports = isPalindrome;
