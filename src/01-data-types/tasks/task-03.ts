/**
 * SMK Telkom Malang is developing a new Student Information System. 
 * Before students can use the system, the administrator must record each student's basic information. 
 * Every student has a unique student ID, a full name, an age, and a status indicating whether they are currently an active student.
 * 
 * Task:
 * 1. Define a proper type for the student information.
 * 2. Implement a type that you defined on 3 students data.
 * 
 * display the student data using console.log.
 */
type studentInfo = {
    studentId: string;
    fullName: string;
    age: number;
    isActive: boolean;
};
const student1: studentInfo = {
    studentId: "S001",
    fullName: "Jayden Hartman",
    age: 17,
    isActive: true,
};
const student2: studentInfo = {
    studentId: "S002",
    fullName: "Michelle Williams",
    age: 18,
    isActive: true,
};
const student3: studentInfo = {
    studentId: "S003",
    fullName: "Hotman Paris Lah Ini",
    age: 17,
    isActive: false,
};

console.log("=== Student 1 ===");
console.log(student1);

console.log("=== Student 2 ===");
console.log(student2);

console.log("=== Student 3 ===");
console.log(student3);