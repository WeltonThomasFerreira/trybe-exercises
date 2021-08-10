const assert = require("assert");
const books = require("./books");

const expectedResult = [
  "O Senhor dos Anéis",
  "Fundação",
  "O Chamado de Cthulhu",
];

function oldBooks() {
  const result = books.filter((book) => 2021 - book.releaseYear >= 60);
  return result.map((book) => {
    return book.name;
  });
}

assert.deepStrictEqual(oldBooks(), expectedResult);
