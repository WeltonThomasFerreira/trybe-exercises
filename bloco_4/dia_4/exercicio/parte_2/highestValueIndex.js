"use strict";

let array = [2, 3, 6, 7, 10, 1];

function returnIndexOfHighestValue(array) {
  let highestValueIndex = 0;
  let highestValue = array[0];
  for (let index = 0; index < array.length; index += 1) {
    const element = array[index];
    if (element >= highestValue) {
        highestValue = element;
      highestValueIndex = index;
    }
  }
  return highestValueIndex;
}

console.log(returnIndexOfHighestValue(array));
