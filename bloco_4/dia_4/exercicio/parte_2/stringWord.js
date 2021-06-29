"use strict";

let stringWord = "Trybe";
let stringEnding = "be";

function hasEnding(word, ending) {
  word = word.toLowerCase();
  ending = ending.toLowerCase();
  return word.includes(ending);
}
console.log(hasEnding(stringWord, stringEnding));
