// const testingScope = (escopo) => {
//   if (escopo === true) {
//     const ifScope = "Não devo ser utilizada fora do meu escopo (if)";
//     console.log(`${ifScope} ótimo, fui utilizada no escopo !`);
//   } else {
//     const elseScope = "Não devo ser utilizada fora meu escopo (else)";
//     console.log(elseScope);
//   }
// };

// testingScope(true);

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];
// oddsAndEvens.sort((a, b) => a - b);
// console.log(
//   `Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`
// );

// function fatorial(n) {
//   let fatorial = 1;
//   for (let index = n; index > 0; index -= 1) {
//     fatorial *= index;
//   }
//   console.log(fatorial);
// }

// fatorial(5);
function longestWord(string) {
  const words = string.split(" ");
  words.sort((a, b) => b.length - a.length);
  console.log(words[0]);
}

longestWord("Antônio foi no banheiro e não sabemos o que aconteceu");
