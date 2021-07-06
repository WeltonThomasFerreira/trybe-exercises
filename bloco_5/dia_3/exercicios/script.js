function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

// Escreva seu código abaixo.
function createDaysOfTheMonths() {
  const dezDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  let days = document.querySelector("#days");
  for (const element of dezDaysList) {
    let li = document.createElement("li");
    li.className = "day";
    if (element === 24 || element === 25 || element === 31) {
      li.classList.add("holiday");
    }
    if (element === 4 || element === 11 || element === 18 || element === 25) {
      li.classList.add("friday");
    }
    li.innerHTML = dezDaysList[element];
    days.appendChild(li);
  }
}

function changeBackgroundHolidays() {
  let bg = document.querySelectorAll(".holiday");
  for (const element of bg) {
    if (element.style.backgroundColor === "orange") {
      element.style.backgroundColor = "rgb(238,238,238)";
    } else {
      element.style.backgroundColor = "orange";
    }
  }
}

function createHolidayButton(string) {
  let button = document.createElement("button");
  button.id = "btn-holiday";
  button.innerHTML = "Feriados";
  button.addEventListener("click", changeBackgroundHolidays);
  document.querySelector(".buttons-container").appendChild(button);
}

createDaysOfTheWeek();
createDaysOfTheMonths();
createHolidayButton();
