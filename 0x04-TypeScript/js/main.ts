// 1. Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// 2. Create two students
const student1: Student = {
  firstName: "Alice",
  lastName: "Smith",
  age: 22,
  location: "Nairobi",
};

const student2: Student = {
  firstName: "Bob",
  lastName: "Johnson",
  age: 24,
  location: "Mombasa",
};

// 3. Create an array of students
const studentsList: Student[] = [student1, student2];

// 4. Render the table
const table: HTMLTableElement = document.createElement("table");

// Optional: Add a header row
const headerRow: HTMLTableRowElement = document.createElement("tr");
const nameHeader: HTMLTableCellElement = document.createElement("th");
nameHeader.textContent = "First Name";
const locationHeader: HTMLTableCellElement = document.createElement("th");
locationHeader.textContent = "Location";
headerRow.appendChild(nameHeader);
headerRow.appendChild(locationHeader);
table.appendChild(headerRow);

// 5. Populate table with students' first name and location
studentsList.forEach((student: Student): void => {
  const row: HTMLTableRowElement = document.createElement("tr");

  const firstNameCell: HTMLTableCellElement = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  const locationCell: HTMLTableCellElement = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

// 6. Append the table to the body
document.body.appendChild(table);
