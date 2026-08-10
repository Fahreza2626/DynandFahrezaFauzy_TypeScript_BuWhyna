/**
 * An online learning platform stores course completion information.
 * The academy director wants a dashboard containing:
 * Completion Statistics:
 * - Total enrollments
 * - Completed enrollments
 * - Incomplete enrollments
 * - Completion percentage
 * 
 * Academic Statistics:
 * - Highest score
 * - Lowest score
 * - Average score
 * - Students with passing scores (≥ 75)
 * 
 * Course Statistics:
 * - Number of students enrolled in each course
 * - Average score for each course
 * 
 * Learning Statistics:
 * - Total learning hours
 * - Average learning duration
 * 
 * Student Tasks:
 * You must design your own program architecture.
 * Requirements
 * Your solution must contain:
 * - At least 10 non-void functions
 * - At least 2 void functions
 * - No duplicated calculations
 * - Each function must have one responsibility
 * - Every printed value must come from another function
 * - Use meaningful function names and parameters
 * Reuse existing functions whenever possible
 */

type Enrollment = {
    student: string;
    course: string;
    completed: boolean;
    score: number;
    duration: number;
};

const enrollments: Enrollment[] = [
    {
        student: "Alya",
        course: "TypeScript",
        completed: true,
        score: 91,
        duration: 38
    },
    {
        student: "Budi",
        course: "TypeScript",
        completed: false,
        score: 45,
        duration: 12
    },
    {
        student: "Citra",
        course: "Database",
        completed: true,
        score: 87,
        duration: 42
    },
    {
        student: "Dimas",
        course: "Backend",
        completed: true,
        score: 96,
        duration: 40
    },
    {
        student: "Eka",
        course: "Database",
        completed: false,
        score: 60,
        duration: 18
    },
    {
        student: "Fajar",
        course: "Backend",
        completed: true,
        score: 82,
        duration: 35
    },
    {
        student: "Gita",
        course: "TypeScript",
        completed: true,
        score: 88,
        duration: 36
    },
    {
        student: "Hana",
        course: "Backend",
        completed: false,
        score: 70,
        duration: 20
    }
];


// 1. Total enrollments
function countTotalEnrollments(enrollments: Enrollment[]): number {
    return enrollments.length;
}


// 2. Completed enrollments
function countCompletedEnrollments(enrollments: Enrollment[]): number {
    let count = 0;

    for (let i = 0; i < enrollments.length; i++) {
        if (enrollments[i].completed) {
            count++;
        }
    }

    return count;
}


// 3. Incomplete enrollments
function countIncompleteEnrollments(enrollments: Enrollment[]): number {
    let count = 0;

    for (let i = 0; i < enrollments.length; i++) {
        if (!enrollments[i].completed) {
            count++;
        }
    }

    return count;
}


// 4. Completion percentage
function calculateCompletionPercentage(
    enrollments: Enrollment[]
): number {
    const total = countTotalEnrollments(enrollments);
    const completed = countCompletedEnrollments(enrollments);

    return (completed / total) * 100;
}


// 5. Highest score
function findHighestScore(enrollments: Enrollment[]): number {
    let highest = enrollments[0].score;

    for (let i = 1; i < enrollments.length; i++) {
        if (enrollments[i].score > highest) {
            highest = enrollments[i].score;
        }
    }

    return highest;
}


// 6. Lowest score
function findLowestScore(enrollments: Enrollment[]): number {
    let lowest = enrollments[0].score;

    for (let i = 1; i < enrollments.length; i++) {
        if (enrollments[i].score < lowest) {
            lowest = enrollments[i].score;
        }
    }

    return lowest;
}


// 7. Average score
function calculateAverageScore(enrollments: Enrollment[]): number {
    let total = 0;

    for (let i = 0; i < enrollments.length; i++) {
        total += enrollments[i].score;
    }

    return total / enrollments.length;
}


// 8. Count passing students
function countPassingStudents(enrollments: Enrollment[]): number {
    let count = 0;

    for (let i = 0; i < enrollments.length; i++) {
        if (enrollments[i].score >= 75) {
            count++;
        }
    }

    return count;
}


// 9. Count students by course
function countStudentsByCourse(
    enrollments: Enrollment[],
    course: string
): number {
    let count = 0;

    for (let i = 0; i < enrollments.length; i++) {
        if (enrollments[i].course === course) {
            count++;
        }
    }

    return count;
}


// 10. Average score by course
function calculateAverageScoreByCourse(
    enrollments: Enrollment[],
    course: string
): number {
    let total = 0;
    let count = 0;

    for (let i = 0; i < enrollments.length; i++) {
        if (enrollments[i].course === course) {
            total += enrollments[i].score;
            count++;
        }
    }

    return total / count;
}


// 11. Total learning hours
function calculateTotalLearningHours(
    enrollments: Enrollment[]
): number {
    let total = 0;

    for (let i = 0; i < enrollments.length; i++) {
        total += enrollments[i].duration;
    }

    return total;
}


// 12. Average learning duration
function calculateAverageLearningDuration(
    enrollments: Enrollment[]
): number {
    const total = calculateTotalLearningHours(enrollments);

    return total / enrollments.length;
}


// 13. Menampilkan Completion Statistics
function printCompletionStatistics(
    enrollments: Enrollment[]
): void {
    console.log("===== COMPLETION STATISTICS =====");

    console.log(
        "Total Enrollments     :",
        countTotalEnrollments(enrollments)
    );

    console.log(
        "Completed Enrollments :",
        countCompletedEnrollments(enrollments)
    );

    console.log(
        "Incomplete Enrollments:",
        countIncompleteEnrollments(enrollments)
    );

    console.log(
        "Completion Percentage :",
        calculateCompletionPercentage(enrollments).toFixed(2) + "%"
    );
}


// 14. Menampilkan Academic Statistics
function printAcademicStatistics(
    enrollments: Enrollment[]
): void {
    console.log("===== ACADEMIC STATISTICS =====");

    console.log(
        "Highest Score         :",
        findHighestScore(enrollments)
    );

    console.log(
        "Lowest Score          :",
        findLowestScore(enrollments)
    );

    console.log(
        "Average Score         :",
        calculateAverageScore(enrollments).toFixed(2)
    );

    console.log(
        "Passing Students      :",
        countPassingStudents(enrollments)
    );
}


// Menampilkan Course Statistics
function printCourseStatistics(
    enrollments: Enrollment[]
): void {
    console.log("===== COURSE STATISTICS =====");

    console.log(
        "TypeScript Students   :",
        countStudentsByCourse(enrollments, "TypeScript")
    );

    console.log(
        "TypeScript Avg Score  :",
        calculateAverageScoreByCourse(
            enrollments,
            "TypeScript"
        ).toFixed(2)
    );

    console.log(
        "Database Students     :",
        countStudentsByCourse(enrollments, "Database")
    );

    console.log(
        "Database Avg Score    :",
        calculateAverageScoreByCourse(
            enrollments,
            "Database"
        ).toFixed(2)
    );

    console.log(
        "Backend Students      :",
        countStudentsByCourse(enrollments, "Backend")
    );

    console.log(
        "Backend Avg Score     :",
        calculateAverageScoreByCourse(
            enrollments,
            "Backend"
        ).toFixed(2)
    );
}


// Menampilkan Learning Statistics
function printLearningStatistics(
    enrollments: Enrollment[]
): void {
    console.log("===== LEARNING STATISTICS =====");

    console.log(
        "Total Learning Hours  :",
        calculateTotalLearningHours(enrollments)
    );

    console.log(
        "Average Learning Time:",
        calculateAverageLearningDuration(enrollments).toFixed(2)
    );
}


// Menjalankan semua report
printCompletionStatistics(enrollments);
printAcademicStatistics(enrollments);
printCourseStatistics(enrollments);
printLearningStatistics(enrollments);