/**
 * A hospital stores patient information in the following array.
 * The hospital director requests a daily report containing:
 * - Total patients
 * - Total admitted patients
 * - Total discharged patients
 * - Number of patients in each department
 * - Highest hospital bill
 * - Lowest hospital bill
 * - Average hospital bill
 * - Total hospital revenue
 * - Names of admitted patients
 * 
 * Student Tasks
 * Design a program using multiple reusable functions.
 * 
 * Requirements
 * - Create at least 8 non-void functions.
 * - Create 1 void function to print the report.
 * - Each function should perform only one responsibility.
 * - printHospitalReport() must only display results.
 * - No duplicated calculations.
 */
type Patient = {
    id: string;
    name: string;
    age: number;
    department: string;
    admitted: boolean;
    bill: number;
};

const patients: Patient[] = [
    {
        id: "PT001",
        name: "Alya",
        age: 17,
        department: "Pediatrics",
        admitted: true,
        bill: 850000
    },
    {
        id: "PT002",
        name: "Budi",
        age: 45,
        department: "Cardiology",
        admitted: false,
        bill: 1200000
    },
    {
        id: "PT003",
        name: "Citra",
        age: 68,
        department: "Cardiology",
        admitted: true,
        bill: 2500000
    },
    {
        id: "PT004",
        name: "Dimas",
        age: 33,
        department: "Orthopedics",
        admitted: true,
        bill: 640000
    },
    {
        id: "PT005",
        name: "Eka",
        age: 14,
        department: "Pediatrics",
        admitted: false,
        bill: 350000
    }
];


function countTotalPatients(patients: Patient[]): number {
    return patients.length;
}


function countAdmittedPatients(patients: Patient[]): number {
    let count = 0;

    for (let i = 0; i < patients.length; i++) {
        if (patients[i].admitted) {
            count++;
        }
    }

    return count;
}


function countDischargedPatients(patients: Patient[]): number {
    let count = 0;

    for (let i = 0; i < patients.length; i++) {
        if (!patients[i].admitted) {
            count++;
        }
    }

    return count;
}


function countPatientsByDepartment(
    patients: Patient[],
    department: string
): number {
    let count = 0;

    for (let i = 0; i < patients.length; i++) {
        if (patients[i].department === department) {
            count++;
        }
    }

    return count;
}


function findHighestBill(patients: Patient[]): number {
    let highest = patients[0].bill;

    for (let i = 1; i < patients.length; i++) {
        if (patients[i].bill > highest) {
            highest = patients[i].bill;
        }
    }

    return highest;
}


function findLowestBill(patients: Patient[]): number {
    let lowest = patients[0].bill;

    for (let i = 1; i < patients.length; i++) {
        if (patients[i].bill < lowest) {
            lowest = patients[i].bill;
        }
    }

    return lowest;
}


function calculateAverageBill(patients: Patient[]): number {
    let total = 0;

    for (let i = 0; i < patients.length; i++) {
        total += patients[i].bill;
    }

    return total / patients.length;
}


function calculateTotalRevenue(patients: Patient[]): number {
    let total = 0;

    for (let i = 0; i < patients.length; i++) {
        total += patients[i].bill;
    }

    return total;
}


function getAdmittedPatientNames(patients: Patient[]): string[] {
    const names: string[] = [];

    for (let i = 0; i < patients.length; i++) {
        if (patients[i].admitted) {
            names.push(patients[i].name);
        }
    }

    return names;
}


function printHospitalReport(patients: Patient[]): void {
    console.log("===== HOSPITAL DAILY REPORT =====");

    console.log(
        "Total Patients        :",
        countTotalPatients(patients)
    );

    console.log(
        "Admitted Patients     :",
        countAdmittedPatients(patients)
    );

    console.log(
        "Discharged Patients   :",
        countDischargedPatients(patients)
    );

    console.log(
        "Pediatrics            :",
        countPatientsByDepartment(patients, "Pediatrics")
    );

    console.log(
        "Cardiology            :",
        countPatientsByDepartment(patients, "Cardiology")
    );

    console.log(
        "Orthopedics           :",
        countPatientsByDepartment(patients, "Orthopedics")
    );

    console.log(
        "Highest Hospital Bill : Rp",
        findHighestBill(patients)
    );

    console.log(
        "Lowest Hospital Bill  : Rp",
        findLowestBill(patients)
    );

    console.log(
        "Average Hospital Bill : Rp",
        calculateAverageBill(patients)
    );

    console.log(
        "Total Hospital Revenue: Rp",
        calculateTotalRevenue(patients)
    );

    console.log(
        "Admitted Patients     :",
        getAdmittedPatientNames(patients)
    );
}


printHospitalReport(patients);