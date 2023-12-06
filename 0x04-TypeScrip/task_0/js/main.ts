interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  const student1: Student = {
    firstName: 'Joseph',
    lastName: 'Aboagye',
    age: 28,
    location: 'Kumasi',
  };
  
  const student2: Student = {
    firstName: 'Mary',
    lastName: 'Johnson',
    age: 24,
    location: 'Accra',
  };
  
  let studentsList: Student[] = [student1, student2];
  
  const student_table = document.createElement('table');
  const tablebody = document.createElement('tbody');
  
  studentsList.forEach((objectList) => {
    const tablerow = document.createElement('tr'); 
    const tablename = document.createElement('td'); 
    const tablelocation = document.createElement('td');
  
    tablename.textContent = objectList.firstName;
    tablelocation.textContent = objectList.location;
    tablerow.appendChild(tablename);
    tablerow.appendChild(tablelocation);
    tablebody.appendChild(tablerow);
  });
  
  student_table.appendChild(tablebody);
  document.body.appendChild(student_table);
  