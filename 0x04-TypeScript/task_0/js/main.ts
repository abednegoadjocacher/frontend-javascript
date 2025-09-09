interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    location: 'Accra',
};
const student2: Student = {
    firstName: 'James',
    lastName: 'Ameh',
    age: 22,
    location: 'Kumasi',
};
const student3: Student = {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 19,
    location: 'Takoradi',
}
const student4: Student = {
    firstName: 'Emily',
    lastName: 'Johnson',
    age: 21,
    location: 'Cape Coast',
}
const studentsList: Student[] = [student1, student2, student3, student4];

const table = document.createElement('table');
const headerRow = document.createElement('tr');
const headers = ['First Name', 'Location'];

headers.forEach(headerText => {
    const header = document.createElement('th');
    header.textContent = headerText;
    headerRow.appendChild(header);
});
table.appendChild(headerRow);
studentsList.forEach(student => {
    const row = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
});
document.body.appendChild(table);

