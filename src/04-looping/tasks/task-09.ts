/**
 * A university stores the final grades of students enrolled in the Backend Development course at array below.
 * Grade Categories
 * - A : 90–100
 * - B : 80–89
 * - C : 70–79
 * - D : below 70
 * 
 * Student Task Calculate:
 * - Number of A students
 * - Number of B students
 * - Number of C students
 * - Number of D students
 * - Highest score
 * - Lowest score
 * - Average score
 */

const students = [
    { name: "Alya", score: 88 },
    { name: "Budi", score: 71 },
    { name: "Citra", score: 95 },
    { name: "Dimas", score: 63 },
    { name: "Eka", score: 84 },
    { name: "Fajar", score: 79 },
    { name: "Gita", score: 92 },
    { name: "Hana", score: 67 }
];

let gradeA = 0;
let gradeB = 0;
let gradeC = 0;
let gradeD = 0;
let totalScore = 0;

let highestScore = students[0].score;
let lowestScore = students[0].score;

for (let i = 0; i < students.length; i++) {
    const score = students[i].score;

    totalScore += score;

    if (score >= 90) {
        gradeA++;
    } else if (score >= 80) {
        gradeB++;
    } else if (score >= 70) {
        gradeC++;
    } else {
        gradeD++;
    }

    if (score > highestScore) {
        highestScore = score;
    }

    if (score < lowestScore) {
        lowestScore = score;
    }
}

const averageScore = totalScore / students.length;

console.log("Grade A Students :", gradeA);
console.log("Grade B Students :", gradeB);
console.log("Grade C Students :", gradeC);
console.log("Grade D Students :", gradeD);
console.log("Highest Score    :", highestScore);
console.log("Lowest Score     :", lowestScore);
console.log("Average Score    :", averageScore);