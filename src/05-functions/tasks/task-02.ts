/**
 * The HR department wants to display bonus notifications for employees.
 * Business Rules
 *  - Performance score ≥ 85 → Bonus Approved
 *  - Otherwise → Bonus Not Approved
 * Employee data:
 * | Employee       | Score |
 * | ---------------| ----- |
 * | John Cena      |    92 |
 * | Undertaker     |    76 |
 * | Rey Mysterio   |    88 |
 * 
 * Instead of repeating the decision logic, the HR department wants a reusable function.
 * The function should display the notification directly and does not return any value.
 * 
 * Student Tasks:
 * 1. Create a function named showBonusStatus.
 * 2. The function receives:
 *  - employee name
 *  - performance score
 * 3. Display the bonus result inside the function.
 * 4. Call the function for every employee.
 */

function showBonusStatus(
    employeeName: string,
    performanceScore: number
): void {

    //Di bagian awal saya membuat function bernama showBonusStatus.
    //Function ini menerima dua parameter, yaitu employeeName untuk
    //menyimpan nama karyawan dan performanceScore untuk menyimpan
    //nilai performa karyawan. Function ini bertipe void karena
    //hanya menampilkan hasil dan tidak mengembalikan nilai.

    if (performanceScore >= 85) {
        console.log(employeeName + " : Bonus Approved");

    //Selanjutnya saya menggunakan kondisi if untuk mengecek nilai
    //performanceScore. Jika nilainya 85 atau lebih, maka karyawan
    //mendapatkan status Bonus Approved.

    } else {
        console.log(employeeName + " : Bonus Not Approved");

    //Jika nilai performanceScore kurang dari 85, maka kondisi if
    //tidak terpenuhi dan program menjalankan bagian else.
    //Hasilnya adalah Bonus Not Approved.
    }
}


//Kemudian saya memanggil function untuk John Cena.
//John Cena memiliki performance score 92, sehingga mendapatkan
//status Bonus Approved.
showBonusStatus("John Cena", 92);


//Selanjutnya saya memanggil function untuk Undertaker.
//Undertaker memiliki performance score 76, sehingga mendapatkan
//status Bonus Not Approved.
showBonusStatus("Undertaker", 76);


//Terakhir saya memanggil function untuk Rey Mysterio.
//Rey Mysterio memiliki performance score 88, sehingga mendapatkan
//status Bonus Approved.
showBonusStatus("Rey Mysterio", 88);