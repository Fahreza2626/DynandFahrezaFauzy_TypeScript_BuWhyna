/**
 * A teacher wants to calculate students' final grades automatically. Instead of writing the same formula multiple times, the teacher asks the developer to create a reusable function.
 * The final grade is calculated using the following formula:
 * - Assignment: 30%
 * - Midterm Exam: 30%
 * - Final Exam: 40%
 * 
 * Three students have the following scores:
 * | Student | Assignment | Midterm | Final |
 * | ------- | ---------: | ------: | ----: |
 * | Alya    |         85 |      80 |    92 |
 * | Budi    |         78 |      75 |    81 |
 * | Citra   |         90 |      88 |    95 |
 * 
 * The function should return the calculated final grade.
 * Student Tasks:
 * 1. Create a function named calculateFinalGrade.
 * 2. The function must receive:
 *  - assignment score
 *  - midterm score
 *  - final exam score
 * 3. Return the final grade.
 * 4. Call the function for each student.
 * 5. Display every student's final grade.

 */

function calculateFinalGrade(
    assignment: number,
    midterm: number,
    finalExam: number
): number {

    //Di bagian awal saya membuat function bernama calculateFinalGrade.
    //Function ini menerima tiga parameter, yaitu nilai assignment,
    //midterm, dan final exam. Semua parameter bertipe number dan
    //function akan mengembalikan hasil yang juga bertipe number.

    const finalGrade =
        (assignment * 0.30) +
        (midterm * 0.30) +
        (finalExam * 0.40);

    //Selanjutnya saya menghitung nilai akhir dengan menggunakan
    //bobot yang sudah ditentukan, yaitu assignment sebesar 30%,
    //midterm sebesar 30%, dan final exam sebesar 40%.
    //Hasil perhitungan disimpan ke dalam variabel finalGrade.

    return finalGrade;

    //Kemudian saya menggunakan return untuk mengembalikan
    //hasil nilai akhir dari function.
}


//Memanggil function untuk menghitung nilai akhir Alya.
//Nilai yang diberikan adalah assignment 85, midterm 80,
//dan final exam 92.
const alyaGrade = calculateFinalGrade(85, 80, 92);


//Memanggil function untuk menghitung nilai akhir Budi.
//Nilai yang diberikan adalah assignment 78, midterm 75,
//dan final exam 81.
const budiGrade = calculateFinalGrade(78, 75, 81);


//Memanggil function untuk menghitung nilai akhir Citra.
//Nilai yang diberikan adalah assignment 90, midterm 88,
//dan final exam 95.
const citraGrade = calculateFinalGrade(90, 88, 95);


//Menampilkan hasil nilai akhir setiap siswa ke console.
console.log("Alya Final Grade  :", alyaGrade);
console.log("Budi Final Grade  :", budiGrade);
console.log("Citra Final Grade :", citraGrade);