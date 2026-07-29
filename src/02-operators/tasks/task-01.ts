/**
 * The school cafeteria sells lunch packages to students. Today, Raka purchased 3 fried rice meals, each costing Rp18,000, and 2 bottles of mineral water, each costing Rp5,000. Because he is a member of the student council, he received a Rp10,000 discount.
 * The cashier wants to calculate:
 *  - Total price of fried rice
 *  - Total price of drinks
 *  - Total price before discount
 *  - Final amount to be paid
 *
 * Task:
 * 1. Use operators to calculate:
 *  - Total food price
 *  - Total drink price
 *  - Grand total
 *  - Final payment
 * 2. Display the calculation results.
 */
const hargaNasiGoreng = 18000;
const jumlahNasiGoreng = 3;

const hargaAirMineral = 5000;
const jumlahAirMineral = 2;

const diskon = 10000;

const totalMakanan = hargaNasiGoreng * jumlahNasiGoreng;
const totalMinuman = hargaAirMineral * jumlahAirMineral;
const totalSebelumDiskon = totalMakanan + totalMinuman;
const totalBayar = totalSebelumDiskon - diskon;

console.log("Total makanan          : Rp" + totalMakanan);
console.log("Total minuman          : Rp" + totalMinuman);
console.log("Total sebelum diskon   : Rp" + totalSebelumDiskon);
console.log("Total bayar            : Rp" + totalBayar);