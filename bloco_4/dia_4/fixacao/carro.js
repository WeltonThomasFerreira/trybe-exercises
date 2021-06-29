"use strict";

let car = {
  model: "A3 Sedan",
  manufacturer: "Audi",
  year: 2020,
};

for (const key in car) {
  if (Object.hasOwnProperty.call(car, key)) {
    const element = car[key];
    console.log(`${key}: ${element}`);
  }
}
