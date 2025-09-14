"use strict";
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = exports.Director = exports.cTeacher = exports.react = exports.java = exports.cpp = void 0;
exports.isDirector = isDirector;
exports.executeWork = executeWork;
// Use the Subjects namespace from the triple-slash reference, no import needed
// create and export constants
exports.cpp = new Subjects.Cpp();
exports.java = new Subjects.Java();
exports.react = new Subjects.React();
exports.cTeacher = {
    firstName: "John",
    lastName: "Doe",
    experienceTeachingC: 10,
};
// For Cpp
console.log("C++");
exports.cpp.setTeacher(exports.cTeacher);
console.log(exports.cpp.getRequirements());
console.log(exports.cpp.getAvailableTeacher());
// For Java
console.log("Java");
exports.java.setTeacher(exports.cTeacher);
console.log(exports.java.getRequirements());
console.log(exports.java.getAvailableTeacher());
// For React
console.log("React");
exports.react.setTeacher(exports.cTeacher);
console.log(exports.react.getRequirements());
console.log(exports.react.getAvailableTeacher());
// Example Director and Teacher class definitions
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workDirectorTasks = function () {
        return 'Getting to director tasks';
    };
    return Director;
}());
exports.Director = Director;
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workTeacherTasks = function () {
        return 'Getting to work';
    };
    return Teacher;
}());
exports.Teacher = Teacher;
// Type predicate
function isDirector(employee) {
    return employee instanceof Director;
}
// Executes tasks depending on role
function executeWork(employee) {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    }
    return employee.workTeacherTasks();
}
