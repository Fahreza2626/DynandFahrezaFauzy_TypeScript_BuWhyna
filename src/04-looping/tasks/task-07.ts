/**
 * The homeroom teacher receives attendance data for one class at following array.
 * 
 * Using a loop:
 * - Count present students.
 * - Count absent students.
 * - Display the names of absent students.
 * - Calculate the attendance percentage.
 */

const attendances = [
    { name: "Alya", present: true },
    { name: "Budi", present: true },
    { name: "Citra", present: false },
    { name: "Dimas", present: true },
    { name: "Eka", present: false },
    { name: "Fajar", present: true },
    { name: "Gita", present: true },
    { name: "Hana", present: false }
];

let presentStudents = 0;
let absentStudents = 0;

console.log("Absent Students:");

for (let i = 0; i < attendances.length; i++) {

    if (attendances[i].present) {
        presentStudents++;
    } else {
        absentStudents++;
        console.log(attendances[i].name);
    }
}

const attendancePercentage =
    (presentStudents / attendances.length) * 100;

console.log("Present Students   :", presentStudents);
console.log("Absent Students    :", absentStudents);
console.log("Attendance Percentage :", attendancePercentage + "%");