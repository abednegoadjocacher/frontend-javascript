// Example Director and Teacher class definitions
export class Director {
  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

export class Teacher {
  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// Type predicate
export function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director
}

// Executes tasks depending on role
export function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks()
  }
  return employee.workTeacherTasks()
}
