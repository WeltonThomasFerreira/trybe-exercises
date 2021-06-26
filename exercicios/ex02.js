"use strict";

let n = 3;

if (n > 1) {
  let line = "";
  for (let index = 1; index <= n; index += 1) {
    line = line + "* ";
    console.log(line)
  }
}
