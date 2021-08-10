const assert = require("assert");
const books = require("./books");

const expectedResult = [
  "Frank Herbert",
  "George R. R. Martin",
  "Isaac Asimov",
  "J. R. R. Tolkien",
];

function fantasyOrScienceFictionAuthors() {
  const result = books.filter(
    (book) => book.genre === "Ficção Científica" || book.genre === "Fantasia"
  );
  return result
    .map((book) => {
      return book.author.name;
    })
    .sort();
}

assert.deepStrictEqual(fantasyOrScienceFictionAuthors(), expectedResult);
