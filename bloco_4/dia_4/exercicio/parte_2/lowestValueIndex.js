"use strict";

let array = [2, -4, 6, 7, 10, 0, -3];

function returnIndexOfLowestValue(array) {
  let lowestValueIndex = 0;
  let lowestValue = array[0];
  for (let index = 0; index < array.length; index += 1) {
    const element = array[index];
    if (lowestValue >= element) {
      lowestValue = element;
      lowestValueIndex = index;
    }
  }
  return lowestValueIndex;
}

console.log(returnIndexOfLowestValue(array));
