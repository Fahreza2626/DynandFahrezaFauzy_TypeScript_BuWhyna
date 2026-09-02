/**
 * An online exam has students and questions.
 * Tasks:
 * 1. Calculate each student's score (each correct answer get 25 points)
 * 2. Determine each student's correct answer, exp: [{student:"Andi", correct:0, wrong: 4}]
 * 3. Calculate the average score for each category.
 * 4. Generate final exam analytics
 * expeced result: {
        totalStudents: 3,
        averageScore: 66.67,
        highestScore: 100,
        lowestScore: 50,
        passedStudents: 1,
        failedStudents: 2,
        passRate: 33.33
    }
 */
const questions = [
    {
        id: 1,
        question: "What is TypeScript?",
        correctAnswer: "A",
        category: "TypeScript",
    },
    {
        id: 2,
        question: "Which method transforms an array?",
        correctAnswer: "B",
        category: "Array",
    },
    {
        id: 3,
        question: "Which method filters an array?",
        correctAnswer: "C",
        category: "Array",
    },
    {
        id: 4,
        question: "What does reduce() do?",
        correctAnswer: "D",
        category: "Array",
    },
];

const submissions = [
    {
        student: "Andi",
        answers: [
            { questionId: 1, answer: "A" },
            { questionId: 2, answer: "B" },
            { questionId: 3, answer: "C" },
            { questionId: 4, answer: "D" },
        ],
    },
    {
        student: "Budi",
        answers: [
            { questionId: 1, answer: "B" },
            { questionId: 2, answer: "B" },
            { questionId: 3, answer: "A" },
            { questionId: 4, answer: "D" },
        ],
    },
    {
        student: "Citra",
        answers: [
            { questionId: 1, answer: "A" },
            { questionId: 2, answer: "C" },
            { questionId: 3, answer: "C" },
            { questionId: 4, answer: "B" },
        ],
    },
];

const studentResults = submissions.map(submission => {
    let correct = 0;

    for (const answer of submission.answers) {
        const question = questions.find(
            question => question.id === answer.questionId
        );

        if (question?.correctAnswer === answer.answer) {
            correct++;
        }
    }

    const wrong = questions.length - correct;
    const score = correct * 25;

    return {
        student: submission.student,
        correct: correct,
        wrong: wrong,
        score: score
    };
});

const categoryResults = questions.map(question => {
    let totalScore = 0;
    let totalStudents = 0;

    for (const submission of submissions) {
        const answer = submission.answers.find(
            answer => answer.questionId === question.id
        );

        if (answer) {
            totalStudents++;

            if (answer.answer === question.correctAnswer) {
                totalScore += 25;
            }
        }
    }

    return {
        category: question.category,
        averageScore: totalScore / totalStudents
    };
});

let totalScore = 0;

for (const result of studentResults) {
    totalScore += result.score;
}

const averageScore = totalScore / studentResults.length;

const highestScore = Math.max(
    ...studentResults.map(result => result.score)
);

const lowestScore = Math.min(
    ...studentResults.map(result => result.score)
);

const passedStudents = studentResults.filter(
    result => result.score >= 75
).length;

const failedStudents = studentResults.filter(
    result => result.score < 75
).length;

const passRate = (passedStudents / studentResults.length) * 100;

const finalAnalytics = {
    totalStudents: submissions.length,
    averageScore: Number(averageScore.toFixed(2)),
    highestScore,
    lowestScore,
    passedStudents,
    failedStudents,
    passRate: Number(passRate.toFixed(2))
};

console.log("Student Results:", studentResults);
console.log("Average Score by Category:", categoryResults);
console.log("Final Exam Analytics:", finalAnalytics);