class Employee {
  constructor(name, position) {
    this.name = name;
    this.position = position;
  }
}

class EmployeeTable {
  constructor(employees) {
    this.employees = employees;
  }

  getHtml() {
    const newTable = document.createElement("table");
    const newHeaderTable = document.createElement("thead");
    const newBodyTable = document.createElement("tbody");
    const newHeaderTableRow = document.createElement("tr");

    Object.keys(this.employees[0]).forEach((title) => {
      const newHeaderCell = document.createElement("th");
      newHeaderCell.innerText = title;
      newHeaderTableRow.append(newHeaderCell);
    });

    newHeaderTable.append(newHeaderTableRow);

    this.employees.forEach((employee) => {
      const newBodyTableRow = document.createElement("tr");

      Object.keys(employee).forEach((item) => {
        const newBodyCell = document.createElement("td");
        newBodyCell.innerText = employee[item];
        newBodyTableRow.append(newBodyCell);
      });

      newBodyTable.append(newBodyTableRow);
    });

    newTable.append(newHeaderTable, newBodyTable);
    document.body.append(newTable);
  }
}

const employeeList = [
  new Employee("John Doe", "Manager"),
  new Employee("Jane Smith", "Teller"),
  new Employee("Mike Johnson", "Accountant"),
];

const employeeTable = new EmployeeTable(employeeList);
employeeTable.getHtml();
