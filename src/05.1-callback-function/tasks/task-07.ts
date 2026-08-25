/**
 * An LMS stores student performance data below.
 * The school wants to analyze students using different criteria.
 * A student is considered academically successful if:
 * - Score ≥ 75
 * - Attendance ≥ 90%
 * 
 * 
 * The teacher wants to generate:
 *  - Pass/fail status.
 *  - Academic performance category.
 *  - Attendance status.
 *  - Final recommendation.
 * 
 * Recommendation Rules:
 * ----------------------------------------------------------------|
 * | Condition                      | Recommendation               |
 * | ------------------------------ | ---------------------------- |
 * | Score ≥ 90 AND attendance ≥ 90 | Excellent                    |
 * | Score ≥ 75 AND attendance ≥ 90 | Good                         |
 * | Score ≥ 75 BUT attendance < 90 | Improve Attendance           |
 * | Score < 75                     | Improve Academic Performance |
 * ----------------------------------------------------------------|
 * 
 * Challenge:
 * - processStudents() should know nothing about these rules.
 * - It should only process the students and execute the callback.
 */

const students = [
    { name: "Alya", score: 92, attendance: 96 },
    { name: "Budi", score: 68, attendance: 88 },
    { name: "Citra", score: 84, attendance: 91 },
    { name: "Dimas", score: 73, attendance: 95 },
    { name: "Eka", score: 95, attendance: 82 },
    { name: "Fajar", score: 79, attendance: 97 }
];

function processStudents(
    student: typeof students,
    callback: (student: typeof students[number]) => void
): void {

    for (let i = 0; i < students.length; i++) {
        callback(students[i]);
    }
}

function getPassFailStatus(
    student: typeof students[number]
): void {

    if (student.score >= 75 && student.attendance >= 90) {
        console.log(`${student.name}: PASS`);
    } else {
        console.log(`${student.name}: FAIL`);
    }
}

function getAcademicPerformance(
    student: typeof students[number]
): void {

    if (student.score >= 90) {
        console.log(`${student.name}: Excellent Academic Performance`);
    } else if (student.score >= 75) {
        console.log(`${student.name}: Good Academic Performance`);
    } else {
        console.log(`${student.name}: Needs Academic Improvement`);
    }
}

function getAttendanceStatus(
    student: typeof students[number]
): void {

    if (student.attendance >= 90) {
        console.log(`${student.name}: Good Attendance`);
    } else {
        console.log(`${student.name}: Poor Attendance`);
    }
}

function getRecommendation(
    student: typeof students[number]
): void {

    if (student.score >= 90 && student.attendance >= 90) {
        console.log(`${student.name}: Excellent`);
    } else if (student.score >= 75 && student.attendance >= 90) {
        console.log(`${student.name}: Good`);
    } else if (student.score >= 75 && student.attendance < 90) {
        console.log(`${student.name}: Improve Attendance`);
    } else {
        console.log(`${student.name}: Improve Academic Performance`);
    }
}

console.log("=== PASS / FAIL ===");
processStudents(students, getPassFailStatus);

console.log("=== ACADEMIC PERFORMANCE ===");
processStudents(students, getAcademicPerformance);

console.log("=== ATTENDANCE STATUS ===");
processStudents(students, getAttendanceStatus);

console.log("=== FINAL RECOMMENDATION ===");
processStudents(students, getRecommendation);