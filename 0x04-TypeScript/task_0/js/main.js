var student1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    location: 'Accra',
};
var student2 = {
    firstName: 'James',
    lastName: 'Ameh',
    age: 22,
    location: 'Kumasi',
};
var student3 = {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 19,
    location: 'Takoradi',
};
var student4 = {
    firstName: 'Emily',
    lastName: 'Johnson',
    age: 21,
    location: 'Cape Coast',
};
var studentsList = [student1, student2, student3, student4];
var table = document.createElement('table');
var headerRow = document.createElement('tr');
var headers = ['First Name', 'Location'];
headers.forEach(function (headerText) {
    var header = document.createElement('th');
    header.textContent = headerText;
    headerRow.appendChild(header);
});
table.appendChild(headerRow);
studentsList.forEach(function (student) {
    var row = document.createElement('tr');
    var firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    var locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
});
const mytable = document.getElementById('myTable');
document.body.appendChild(table);
