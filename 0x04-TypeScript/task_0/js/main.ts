interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 35,
  location: 'Port-Harcourt',
}

const student2: Student = {
  firstName: 'Mary',
  lastName: 'Doe',
  age: 40,
  location: 'Dubai',
}

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');

const headerRow = document.createElement('tr');

const firstNameHeader = document.createElement('th');
firstNameHeader.textContent = 'First Name';
headerRow.appendChild(firstNameHeader);

const locationHeader = document.createElement('th');
locationHeader.textContent = 'Location';
headerRow.appendChild(locationHeader);

table.appendChild(headerRow);

studentsList.forEach((student) => {
  const row = document.createElement('tr');

  const firstNameBlock = document.createElement('td');
  firstNameBlock.textContent = student.firstName;
  row.appendChild(firstNameBlock);

  const locationBlock = document.createElement('td');
  locationBlock.textContent = student.location;
  row.appendChild(locationBlock);

  table.appendChild(row);
})

document.body.appendChild(table);
