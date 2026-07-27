/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */
type Student = {
    studentId: string;
    fullName: string;
    gradeLevel: number;
};

type Course = {
    courseId: string;
    courseTitle: string;
    instructorName: string;
    totalLearningHours: number;
};

type Registration = {
    student: Student;
    course: Course;
    registrationDate: string;
    isPaymentCompleted: boolean;
};

const registration1: Registration = {
    student: {
        studentId: "STD001",
        fullName: "Andi Pratama",
        gradeLevel: 10,
    },
    course: {
        courseId: "CRS001",
        courseTitle: "TypeScript Fundamentals",
        instructorName: "Mr. John",
        totalLearningHours: 40,
    },
    registrationDate: "2026-07-27",
    isPaymentCompleted: true,
};

const registration2: Registration = {
    student: {
        studentId: "STD002",
        fullName: "Budi Santoso",
        gradeLevel: 11,
    },
    course: {
        courseId: "CRS002",
        courseTitle: "Web Development",
        instructorName: "Mrs. Sarah",
        totalLearningHours: 60,
    },
    registrationDate: "2026-07-28",
    isPaymentCompleted: false,
};

const registration3: Registration = {
    student: {
        studentId: "STD003",
        fullName: "Citra Lestari",
        gradeLevel: 12,
    },
    course: {
        courseId: "CRS003",
        courseTitle: "Database MySQL",
        instructorName: "Mr. David",
        totalLearningHours: 50,
    },
    registrationDate: "2026-07-29",
    isPaymentCompleted: true,
};

console.log("=== Registration 1 ===");
console.log(registration1);

console.log("=== Registration 2 ===");
console.log(registration2);

console.log("=== Registration 3 ===");
console.log(registration3);