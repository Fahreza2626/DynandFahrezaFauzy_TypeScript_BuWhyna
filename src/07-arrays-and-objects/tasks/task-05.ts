/**
 * You are developing a simple exam analytics system.
 * Tasks: 
 * 1. Calculate student score (each correct answer get 20 points)
 * 2. Get students that pass (> 70)
 * 3. Find student who reach highest score 
 * 4. Calculate class's average score
 */

const students = [
    {
        id: 1,
        name: "Andi",
        answers: ["A", "B", "C", "A", "B"],
    },
    {
        id: 2,
        name: "Budi",
        answers: ["A", "C", "C", "A", "D"],
    },
    {
        id: 3,
        name: "Citra",
        answers: ["B", "B", "C", "A", "B"],
    },
];

const correctAnswers = ["A", "B", "C", "A", "B"];

const studentScores = students.map(student => {
    let correct = 0;

    for (let i = 0; i < correctAnswers.length; i++) {
        if (student.answers[i] === correctAnswers[i]) {
            correct++;
        }
    }

    return {
        id: student.id,
        name: student.name,
        score: correct * 20
    };
});

const passedStudents = studentScores.filter(student => student.score > 70);

const highestScore = Math.max(...studentScores.map(student => student.score));

const highestStudent = studentScores.find(
    student => student.score === highestScore
);

let totalScore = 0;

for (const student of studentScores) {
    totalScore += student.score;
}

const averageScore = totalScore / studentScores.length;

console.log("Student Scores:", studentScores);
console.log("Passed Students:", passedStudents);
console.log("Highest Student:", highestStudent);
console.log("Average Score:", averageScore);