const newPerson = (firstName, lastName, age) => ({
  firstName,
  lastName,
  age,
});

const personList = [
  newPerson("Illia", "Lobach", 22),
  newPerson("Andrey", "Voznuk", 21),
  newPerson("Kirill", "Lazov", 24),
  newPerson("Harry", "Potter", 37),
  newPerson("Davy", "Jones", 89),
  newPerson("Lincoln", "Abraham", 67),
  newPerson("Obama", "Barak", 54),
];

const tableHeadElement = document.querySelector(".table-head");
const tableBodyElement = document.querySelector(".table-body");

const newHeadRow = (personSet) => {
  const tableRow = document.createElement("tr");

  Object.keys(personSet).forEach((title) => {
    const rowItem = document.createElement("th");
    rowItem.innerText = title;
    rowItem.className = "table-head-item";
    tableRow.appendChild(rowItem);
  });

  tableHeadElement.appendChild(tableRow);
};

const newTableRow = (personSet) => {
  personSet.forEach((person) => {
    const tableRow = document.createElement("tr");

    Object.values(person).forEach((personInfo) => {
      const rowItem = document.createElement("td");
      rowItem.innerText = personInfo;
      tableRow.appendChild(rowItem);
    });

    tableBodyElement.appendChild(tableRow);
  });
};

const ascendSorting = (current, next) => {
  return current[sortingProperty] < next[sortingProperty] ? -1 : 1;
};

const descendSorting = (next, current) => {
  return current[sortingProperty] < next[sortingProperty] ? -1 : 1;
};

newHeadRow(personList[0]); //Creates Header Elements in Table
newTableRow(personList); //Creates Body Elements in Table

const tableHeadItemElements = document.querySelectorAll(".table-head-item");
let sortStatus = false;
let sortingProperty = null;

tableHeadItemElements.forEach((headItem) => {
  headItem.addEventListener("click", (event) => {
    event.stopPropagation();
    if (event.target) {
      sortingProperty = event.target.innerText;
    }

    tableBodyElement.innerHTML = "";

    newTableRow(
      sortStatus
        ? personList.sort(descendSorting)
        : personList.sort(ascendSorting)
    );

    sortStatus = !sortStatus;
  });
});
