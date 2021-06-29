"use strict";

let infoMargarida = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "Sim",
};

let infoTioPatinhas = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comic #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};

// console.log(`Bem-vinda, ${info.personagem}!`);

// info.recorrente = "sim";

// console.log(info);

// for (const key in info) {
//   if (Object.hasOwnProperty.call(info, key)) {
//     const element = info[key];
//     console.log(key);
//   }
// }

// for (const key in infoMargarida) {
//   if (Object.hasOwnProperty.call(infoMargarida, key)) {
//     const element = infoMargarida[key];
//     console.log(element);
//   }
// }

for (const key in infoMargarida) {
  const elementMargarida = infoMargarida[key];
  const elementPatinhas = infoTioPatinhas[key];
  console.log(`${elementMargarida} e ${elementPatinhas}`);
}
