/*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */

function changeForFiveYears(element) {
  document.getElementsByTagName(element)[0].innerText =
    "Trabalhando e viajando bastante!";
}

function changeYellowSquare(element) {
  document.getElementsByClassName(element)[0].style.backgroundColor =
    "rgb(76,164,109)";
}

function changeRedSquare(element) {
  document.getElementsByClassName(element)[0].style.backgroundColor = "white";
}

function changeTitle(element) {
  document.getElementsByTagName(element)[0].innerText =
    "Exercício 5.1 - JavaScript";
}

function changeToUpperCase(elements) {
  document.getElementsByTagName(elements)[0].style.textTransform = "uppercase";
}

function printContent(elements) {
  let paragraphs = document.getElementsByTagName(elements);
  for (let index = 0; index < paragraphs.length; index += 1) {
    console.log(paragraphs[index].innerText);
  }
}

changeForFiveYears("p");
changeYellowSquare("main-content");
changeRedSquare("center-content");
changeTitle("h1");
changeToUpperCase("p");
printContent("p");
