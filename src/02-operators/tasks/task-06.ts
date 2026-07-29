/**
 * An internet café charges customers Rp8,000 per hour. 
 * Customers are billed for every started hour. If the total playing time exceeds 5 hours, they receive a 15% discount.
 * Today, a customer used a computer for:
 * 7 hours and 35 minutes
 * 
 * 
 * You need to determine:
 * - Total playing time in minutes
 * - Remaining minutes after full hours
 * - Total billed hours
 * - Total payment before discount
 * - Discount amount
 * - Final payment
 */
let hours : number = 7;
let minutes : number =35;
let pricePerHour : number = 8000;
let discountRate : number = 0.15;

let totalMinutes : number = (hours * 60) + minutes;
let remainingMinutes : number = totalMinutes % 60;
let billedHours : number = Math.ceil(totalMinutes / 60);
let paymentBeforeDiscount : number = billedHours * pricePerHour;

let discount : number = 0;

if (billedHours > 5) {
    discount = paymentBeforeDiscount * discountRate;
}

let finalPayment : number = paymentBeforeDiscount - discount;

// Output
console.log("Total Playing Time         :", totalMinutes, "minutes");
console.log("Remaining Minutes          :", remainingMinutes);
console.log("Total Billed Hours         :", billedHours);
console.log("Payment Before Discount    : Rp" + paymentBeforeDiscount);
console.log("Discount                   : Rp" + discount);
console.log("Final Payment              : Rp" + finalPayment);