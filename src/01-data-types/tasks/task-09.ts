/**
 * A programming bootcamp stores information about every participant who registers for the Backend Development class. 
 * Since many students register for the same course, the system stores the participant data as a collection instead of creating separate variables.
 * Today, three students registered for the course.
| Student ID | Name           | Age | Has Paid |
| ---------- | -------------- | --- | -------- |
| ST001      | Ahmad Fauzi    | 16  | Yes      |
| ST002      | Siti Nurhaliza | 17  | No       |
| ST003      | Budi Santoso   | 16  | Yes      |


 * Task:
 * 1. Define a proper type for the participant information.
 * 2. Store the participant data in a single collection.
 * 3. Display the participant data using console.log.
 */
type Participant = {
    studentId: string;
    name: string;
    age: number;
    hasPaid: boolean;
};

//Di bagian awal saya membuat sebuah tipe data bernama Participant.
//Tipe data ini digunakan sebagai template agar setiap peserta memiliki
//struktur data yang sama, yaitu studentId, name, age, dan hasPaid.

const participants: Participant[] = [
    {
        studentId: "ST001",
        name: "Ahmad Fauzi",
        age: 19,
        hasPaid: true,
    },
    {
        studentId: "ST002",
        name: "Siti Nurhaliza",
        age: 17,
        hasPaid: false,
    },
    {
        studentId: "ST003",
        name: "Budi Santoso",
        age: 16,
        hasPaid: true,
    },
];

//Selanjutnya saya membuat sebuah array bernama participants
//yang berisi tiga objek peserta. Setiap objek mengikuti
//template Participant yang telah dibuat sebelumnya.

for (const participant of participants) {
    if(participant.hasPaid && participant.age>=17)
                console.log(`
Student ID: ${participant.studentId}
Name: ${participant.name}
Age: ${participant.age}
Has Paid: ${participant.hasPaid}

`);
    }

