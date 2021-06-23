let estadoCandidato = "lista";

switch (estadoCandidato) {
  case "aprovada":
    console.log("Candidato aprovado!");
    break;
  case "lista":
    console.log("Candidato na lista de espera.");
    break;
  case "reprovada":
    console.log("Candidato reprovado.");
    break;
  default:
    console.log("Não se aplica.");
}
