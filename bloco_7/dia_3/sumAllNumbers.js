const assert = require("assert");
// escreva a função sumAllNumbers aqui
const sumAllNumbers = (numbers) => {
  let result = 0;
  numbers.forEach((number) => {
    result += number;
  });
  return result;
};

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, "function");
assert.strictEqual(output, expected);
