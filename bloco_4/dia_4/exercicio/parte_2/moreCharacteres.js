"use strict";

let names = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"];

function returnNameWithMoreChars(names) {
  let nameWithMoreChars = names[0];
  for (let index = 0; index < names.length; index += 1) {
    const element = names[index];
    if (element.length >= nameWithMoreChars.length) {
      nameWithMoreChars = element;
    }
  }
  return nameWithMoreChars;
}

console.log(returnNameWithMoreChars(names));
