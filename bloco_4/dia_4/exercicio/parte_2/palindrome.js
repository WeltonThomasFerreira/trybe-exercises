"use strict";

let word = "tenet";

function isPalindrome(word) {
  let reverseWord = "";
  for (let index = word.length - 1; index >= 0; index -= 1) {
    const element = word[index];
    reverseWord = reverseWord + element;
  }
  if (reverseWord === word) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome(word));
