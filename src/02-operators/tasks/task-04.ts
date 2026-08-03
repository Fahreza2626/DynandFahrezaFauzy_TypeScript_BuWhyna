/**
 * An online store is processing a customer's shopping cart.
 * The customer purchased:
 * 
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Mouse Pad           | 120000 |        1 |
 * 
 * Business Rules:
 * - Customers receive 10% discount if the total purchase exceeds Rp1,000,000.
 * - Only Premium members receive free shipping.
 * - Every purchased product increases the total item counter.
 * 
 * Additional Information: Current customer is Premium member.
 * 
 * Task:
 *  - Calculate subtotal.
 *  - Count the total purchased items using an increment operator.
 *  - Determine whether a discount should be applied.
 *  - Calculate the final payment.

 */
const keyboardPrice = 850000;
const keyboardQty = 1;

const mousePrice = 275000;
const mouseQty = 2;

const mousePadPrice = 120000;
const mousePadQty = 1;

const isPremiumMember = true;

//Di bagian awal saya mendeklarasikan semua data yang dibutuhkan, seperti harga dan jumlah setiap produk,   
//serta status apakah pelanggan merupakan Premium Member atau tidak.

const keyboardTotal = keyboardPrice * keyboardQty;
const mouseTotal = mousePrice * mouseQty;
const mousePadTotal = mousePadPrice * mousePadQty;

const subTotal = keyboardTotal + mouseTotal + mousePadTotal;

//Selanjutnya saya menghitung total harga setiap produk dengan mengalikan harga dan jumlahnya. 
//Setelah itu semua total dijumlahkan menjadi subtotal.

let totalItems = 0;

for (let i = 0; i < keyboardQty; i++) {
  totalItems++;
}

for (let i = 0; i < mouseQty; i++) {
  totalItems++;
}

for (let i = 0; i < mousePadQty; i++) {
  totalItems++;
}

//Untuk menghitung jumlah barang, saya menggunakan operator increment (++) di dalam for loop. 
// Setiap kali satu barang dihitung, nilai totalItems bertambah satu.

let discount = 0;

if (subTotal > 1000000) {
  discount = subTotal * 0.10;
}

//Kemudian saya mengecek apakah subtotal lebih dari Rp1.000.000. 
//Jika iya, maka pelanggan mendapatkan diskon sebesar 10%. Jika tidak, diskonnya tetap nol.

let shippingCost = 20000;

if (isPremiumMember) {
  shippingCost = 0;
}

//Setelah itu saya mengecek apakah pelanggan adalah Premium Member. 
//Jika Premium, ongkos kirim menjadi Rp0. Jika bukan, ongkos kirim tetap Rp20.000.

const finalPayment = subTotal - discount + shippingCost;

//Terakhir saya menghitung total pembayaran dengan rumus subtotal dikurangi diskon kemudian ditambah ongkos kirim.

console.log("Subtotal       : Rp" + subTotal);
console.log("Total Items    :", totalItems);
console.log("Discount       : Rp" + discount);
console.log("Premium Member :", isPremiumMember);
console.log("Shipping Cost  : Rp" + shippingCost);
console.log("Final Payment  : Rp" + finalPayment);

//Bagian terakhir menampilkan semua hasil perhitungan ke console, seperti subtotal, jumlah barang, 
//diskon, status Premium Member, ongkos kirim, dan total pembayaran.