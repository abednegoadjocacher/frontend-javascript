interface Director {
  workDirectorTasks(): string;
}

interface Teacher {
  workTeacherTasks(): string;
}

function isDirector(employee: Teacher | Director): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork(employee: Teacher | Director) {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}
