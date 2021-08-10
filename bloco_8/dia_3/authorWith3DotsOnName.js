const assert = require("assert");
const books = require("./books");

const expectedResult = "O Senhor dos Anéis";

function authorWith3DotsOnName() {
  return books.find(
    (book) =>
      book.author.name.split(" ").filter((word) => word.endsWith("."))
        .length === 3
  ).name;
}

assert.deepStrictEqual(authorWith3DotsOnName(), expectedResult);
