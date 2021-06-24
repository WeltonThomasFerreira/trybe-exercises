let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let average = 0;
let biggerNumber = 0;
let smallestNumber = numbers[0];
let countOdd = 0;
let array = [];

// ex01
// for (const number of numbers) {
//   console.log(number);
// }

// ex02
numbers.forEach((element) => {
  sum += element;
});

// ex03
average = sum / numbers.length;

console.log("Soma: " + sum);
console.log("Média: " + average);

// ex04
if (average > 20) {
  console.log("Valor maior que 20.");
} else if (average < 20) {
  console.log("Valor menor que 20.");
}

// ex05
for (let index = 0; index < numbers.length; index += 1) {
  const element = numbers[index];
  for (let referencia = 0; referencia < numbers.length; referencia += 1) {
    const elementRef = numbers[referencia];
    if (element > elementRef && element > biggerNumber) {
      biggerNumber = element;
    } else if (elementRef > element && elementRef > biggerNumber) {
      biggerNumber = element;
    }
  }
}

console.log("Maior número: " + biggerNumber);

// ex06
for (const element of numbers) {
  if (element % 2 === 1) {
    countOdd += 1;
  }
}

if (countOdd > 0) {
  console.log("Quantidade de ímpares: " + countOdd);
} else {
  console.log("Nenhum valor ímpar encontrado.");
}

// ex07
for (let index = 0; index < numbers.length; index += 1) {
  const element = numbers[index];
  for (let referencia = 0; referencia < numbers.length; referencia += 1) {
    const elementRef = numbers[referencia];
    if (element < elementRef && element < smallestNumber) {
      smallestNumber = element;
    } else if (elementRef < element && elementRef < smallestNumber) {
      smallestNumber = element;
    }
  }
}

console.log("Menor número: " + smallestNumber);

// ex08
for (let index = 0; index < 25; index += 1) {
  array[index] = index + 1;
  console.log(array[index]);
}

// ex09
array.forEach((element) => {
  console.log(element / 2);
});
