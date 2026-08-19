/**
 * An LMS stores assignment submission data at following array.
 * Business Rules
 * - Passing score = 75
 * - Students who do not submit receive 0
 * - Submitted assignments below 75 require revision.
 * 
 * The principal requests a report showing:
 * - Total students
 * - Submitted assignments
 * - Missing assignments
 * - Passed students
 * - Students requiring revision
 * - Average score
 * - Highest score
 * - Lowest score
 * 
 * Student Tasks
 * 1. Design your own functions.
 * At minimum, your solution must contain:
 * - 7 non-void functions
 * - 1 void function to display the report.
 * 
 */
type Submission = {
    student: string;
    submitted: boolean;
    score: number;
};

const submissions: Submission[] = [
    {
        student: "Alya",
        submitted: true,
        score: 90
    },
    {
        student: "Budi",
        submitted: false,
        score: 0
    },
    {
        student: "Citra",
        submitted: true,
        score: 84
    },
    {
        student: "Dimas",
        submitted: true,
        score: 72
    },
    {
        student: "Eka",
        submitted: false,
        score: 0
    },
    {
        student: "Fajar",
        submitted: true,
        score: 96
    }
];


function countTotalStudents(submissions: Submission[]): number {
    return submissions.length;
}


function countSubmittedAssignments(submissions: Submission[]): number {
    let count = 0;

    for (let i = 0; i < submissions.length; i++) {
        if (submissions[i].submitted) {
            count++;
        }
    }

    return count;
}


function countMissingAssignments(submissions: Submission[]): number {
    let count = 0;

    for (let i = 0; i < submissions.length; i++) {
        if (!submissions[i].submitted) {
            count++;
        }
    }

    return count;
}


function countPassedStudents(submissions: Submission[]): number {
    let count = 0;

    for (let i = 0; i < submissions.length; i++) {
        if (submissions[i].submitted && submissions[i].score >= 75) {
            count++;
        }
    }

    return count;
}


function countRevisionStudents(submissions: Submission[]): number {
    let count = 0;

    for (let i = 0; i < submissions.length; i++) {
        if (submissions[i].submitted && submissions[i].score < 75) {
            count++;
        }
    }

    return count;
}


function calculateAverageScore(submissions: Submission[]): number {
    let totalScore = 0;

    for (let i = 0; i < submissions.length; i++) {
        totalScore += submissions[i].score;
    }

    return totalScore / submissions.length;
}


function findHighestScore(submissions: Submission[]): number {
    let highest = submissions[0].score;

    for (let i = 1; i < submissions.length; i++) {
        if (submissions[i].score > highest) {
            highest = submissions[i].score;
        }
    }

    return highest;
}


function findLowestScore(submissions: Submission[]): number {
    let lowest = submissions[0].score;

    for (let i = 1; i < submissions.length; i++) {
        if (submissions[i].score < lowest) {
            lowest = submissions[i].score;
        }
    }

    return lowest;
}


function printReport(submissions: Submission[]): void {
    console.log("===== LMS ASSIGNMENT REPORT =====");

    console.log(
        "Total Students        :",
        countTotalStudents(submissions)
    );

    console.log(
        "Submitted Assignments :",
        countSubmittedAssignments(submissions)
    );

    console.log(
        "Missing Assignments   :",
        countMissingAssignments(submissions)
    );

    console.log(
        "Passed Students       :",
        countPassedStudents(submissions)
    );

    console.log(
        "Students Requiring Revision :",
        countRevisionStudents(submissions)
    );

    console.log(
        "Average Score         :",
        calculateAverageScore(submissions)
    );

    console.log(
        "Highest Score         :",
        findHighestScore(submissions)
    );

    console.log(
        "Lowest Score          :",
        findLowestScore(submissions)
    );
}


printReport(submissions);