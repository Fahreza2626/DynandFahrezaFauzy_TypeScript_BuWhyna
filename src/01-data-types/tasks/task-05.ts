/**
 * A software company records daily employee attendance. 
 * Every attendance record stores the employee's ID, employee name, date, check-in time, check-out time, 
 * total working hours, and whether the employee was present on that day.
 * 
 * Task:
 * 1. Define a proper type for the attendance information.
 * 2. Implement a type that you defined on 3 attendance data.
 * 
 * display the attendance data using console.log.
 */
type attendance = {
    employeeId: string;
    employeeName: string;
    date: string;
    checkInTime: string;
    checkOutTime: string;
    totalWorkingHours: number;
    isPresent: boolean;
};
const attendance1: attendance = {
    employeeId: "EMP001",
    employeeName: "Andi Pratama",
    date: "2024-06-01",
    checkInTime: "09:00",
    checkOutTime: "17:00",
    totalWorkingHours: 8,
    isPresent: true,
};
const attendance2: attendance = {
    employeeId: "EMP002",
    employeeName: "Budi Santoso",
    date: "2024-06-01",
    checkInTime: "09:30",
    checkOutTime: "17:30",
    totalWorkingHours: 8,
    isPresent: true,
};
const attendance3: attendance = {
    employeeId: "EMP003",
    employeeName: "Citra Dewi",
    date: "2024-06-01",
    checkInTime: "10:00",
    checkOutTime: "18:00",
    totalWorkingHours: 8,
    isPresent: true,
};
console.log("=== Attendance 1 ===");
console.log(attendance1);

console.log("=== Attendance 2 ===");
console.log(attendance2);

console.log("=== Attendance 3 ===");
console.log(attendance3);