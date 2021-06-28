"use strict";

let names = {
  person1: "João",
  person2: "Maria",
  person3: "Jorge",
};

for (const name in names) {
  if (Object.hasOwnProperty.call(names, name)) {
    const element = names[name];
    console.log(`Olá, ${element}.`);
  }
}
