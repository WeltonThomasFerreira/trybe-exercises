//let body = document.querySelector('body');
let title = document.createElement("h1");
title.innerHTML = "Exercício 5.2 - JavaScript DOM";
document.body.appendChild(title);

let mainContent = document.createElement("div");
mainContent.className = "main-content";
document.body.appendChild(mainContent);

let centerContent = document.createElement("div");
centerContent.className = "center-content";
document.querySelector(".main-content").appendChild(centerContent);

let paragraph = document.createElement("p");
paragraph.innerHTML =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

document.querySelector(".center-content").appendChild(paragraph);

let leftContent = document.createElement("div");
leftContent.className = "left-content";
document.querySelector(".main-content").appendChild(leftContent);

let rightContent = document.createElement("div");
rightContent.className = "right-content";
document.querySelector(".main-content").appendChild(rightContent);

let image = document.createElement("img");
image.className = "small-image";
image.src = "https://picsum.photos/200";
document.querySelector(".left-content").appendChild(image);

let listItems = [
  "um",
  "dois",
  "três",
  "quatro",
  "cinco",
  "seis",
  "sete",
  "oito",
  "nove",
  "dez",
];
let ul = document.createElement("ul");
document.querySelector(".right-content").appendChild(ul);

for (const element in listItems) {
  let li = document.createElement("li");
  ul.appendChild(li).innerHTML = listItems[element];
}

for (let index = 0; index < 3; index += 1) {
  let title = document.createElement("h3");
  title.innerHTML = `Título ${index + 1}`;
  title.className = "description";
  document.querySelector(".main-content").appendChild(title);
}

title.className = "title";

leftContent.parentElement.removeChild(leftContent);

rightContent.style = "margin-right: auto";

centerContent.parentElement.style = "background-color: green";

ul.removeChild(ul.lastChild);
ul.removeChild(ul.lastChild);
