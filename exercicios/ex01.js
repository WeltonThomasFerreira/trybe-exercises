"use strict";

// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

let n = 3;

if (n > 1) {
  let line = "";
  for (let index = 1; index <= n; index += 1) {
    line = line + " *";
  }
  for (let index = 1; index <= n; index += 1) {
    console.log(line);
  }
}
