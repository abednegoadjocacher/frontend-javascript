/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />

// Use the Subjects namespace from the triple-slash reference, no import needed

// create and export constants
export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();
export const cTeacher: Subjects.Teacher = {
  firstName: "John",
  lastName: "Doe",
  experienceTeachingC: 10,
};

// For Cpp
console.log("C++");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// For Java
console.log("Java");
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// For React
console.log("React");
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());



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
