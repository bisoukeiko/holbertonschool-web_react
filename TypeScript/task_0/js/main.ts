interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Alice',
  lastName: 'Bauch',
  age: 30,
  location: 'Paris',  
};

const student2: Student = {
  firstName: 'Paul',
  lastName: 'Park',
  age: 35,
  location: 'Bordeaux',  
}

const studentsList: Student[] = [
  student1,
  student2
]

function addStudentTable(): void {
  const studenttable = document.createElement('table');
  const studenttbody = document.createElement('tbody');
  
  studentsList.forEach(student => {
    const tabletr = studenttbody.insertRow();
    const tabletd1 = document.createElement('td');
    const tabletd2 = document.createElement('td');

    tabletd1.textContent = student.firstName;
    tabletd2.textContent = student.location;

    tabletr.appendChild(tabletd1);
    tabletr.appendChild(tabletd2);
  });

  studenttable.appendChild(studenttbody);
  document.body.appendChild(studenttable);
}

addStudentTable();