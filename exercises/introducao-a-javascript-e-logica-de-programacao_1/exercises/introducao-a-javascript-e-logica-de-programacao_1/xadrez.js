let rei = "Pode mover-se em qualquer direção, porém apenas uma casa por vez.";
let dama =
  "Pode mover-se em qualquer direção, porém quantas casas quiser, desde que estejam livres.";
let rainha =
  "Pode mover-se em qualquer direção, porém quantas casas quiser, desde que estejam livres.";
let torre =
  "Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.";
let bispo = "Move-se na diagonal, quantas casas quiser.";
let cavalo =
  "É a única peça que pode saltar sobre as outras peças do tabuleiro, sejam elas amigas ou inimigas. O movimento executado pelo Cavalo é conhecido por “um-dois” ou “em L”.";
let peao =
  "Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas.";

let peca = "ToRrE".toLowerCase();

switch (peca) {
  case "rei":
    console.log(rei);
    break;
  case "dama":
    console.log(dama);
    break;
  case "rainha":
    console.log(rainha);
    break;
  case "torre":
    console.log(torre);
    break;
  case "bispo":
    console.log(bispo);
    break;
  case "cavalo":
    console.log(cavalo);
    break;
  case "peao":
    console.log(peao);
    break;
  default:
    console.log("Não é xadrez!");
}
