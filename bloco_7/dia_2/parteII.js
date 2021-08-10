const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

function addToObj(origin, newKey, valueKey) {
  origin[newKey] = valueKey;
}

function listKeys(obj) {
  console.log(Object.keys(obj));
}

function objLength(obj) {
  console.log(Object.keys(obj).length);
}

function listValues(obj) {
  console.log(Object.values(obj));
}

// addToObj(lesson2, "Turno", "Manhã");
// listKeys(lesson2);
// objLength(lesson2);
// listValues(lesson2);

let allLessons = Object.assign({}, lesson1, lesson2, lesson3);
console.log(allLessons);
