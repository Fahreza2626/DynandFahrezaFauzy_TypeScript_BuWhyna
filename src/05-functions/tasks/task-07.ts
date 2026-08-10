/**
 * A university stores enrollment information at following array
 * The university needs a report containing:
 * - Total students
 * - Active students
 * - Inactive students
 * - Software Engineering students
 * - Networking students
 * - Multimedia students
 * 
 * Complete following functions!
 */

const students = [
    {
        name: "Alya",
        major: "Software Engineering",
        active: true
    },
    {
        name: "Budi",
        major: "Networking",
        active: false
    },
    {
        name: "Citra",
        major: "Software Engineering",
        active: true
    },
    {
        name: "Dimas",
        major: "Multimedia",
        active: true
    },
    {
        name: "Eka",
        major: "Networking",
        active: false
    }
];

type Student = {
    name: string;
    major: string;
    active: boolean;
};

function countActiveStudents(students: Student[]): number {
    let count = 0;

    for (let i = 0; i < students.length; i++) {
        if (students[i].active) {
            count++;
        }
    }

    return count;
}

function countInactiveStudents(students: Student[]): number {
    let count = 0;

    for (let i = 0; i < students.length; i++) {
        if (!students[i].active) {
            count++;
        }
    }

    return count;
}

function countStudentsByMajor(
    students: Student[],
    major: string
): number {
    let count = 0;

    for (let i = 0; i < students.length; i++) {
        if (students[i].major === major) {
            count++;
        }
    }

    return count;
}

function printEnrollmentReport(students: Student[]): void {
    console.log("=== Enrollment Report ===");
    console.log("Total Students        :", students.length);
    console.log("Active Students       :", countActiveStudents(students));
    console.log("Inactive Students     :", countInactiveStudents(students));
    console.log(
        "Software Engineering :",
        countStudentsByMajor(students, "Software Engineering")
    );
    console.log(
        "Networking            :",
        countStudentsByMajor(students, "Networking")
    );
    console.log(
        "Multimedia            :",
        countStudentsByMajor(students, "Multimedia")
    );
}

printEnrollmentReport(students);