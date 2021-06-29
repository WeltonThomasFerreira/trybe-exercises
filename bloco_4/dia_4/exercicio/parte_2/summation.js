"use strict";

let number = 5;

function addNumbers(number) {
  let sum = 0;
  for (let index = number; index > 0; index -= 1) {
    sum += index;
  }
  return sum;
}

console.log(addNumbers(number));
