/**
 * An online marketplace wants to calculate the customer's final payment and reward points after checkout.
 * The customer purchases the following items:
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Monitor Stand       | 420000 |        1 |
 * 
 * Customer Information:
 * | Information       | Value                            |
 * | ----------------- | -------------------------------- |
 * | Voucher Value     | 100000                           |
 * | Premium Member    | Yes                              |
 * | Reward Point Rate | 1 point for every Rp50,000 spent |
 * 
 * Business Rules:
 * - Premium members receive 10% discount.
 * - Voucher is deducted after the membership discount.
 * - Reward points are calculated from the final payment before tax.
 * - VAT is 11%.
 * - Free shipping is available if:
 * - Premium member OR
 * - Final payment before tax exceeds Rp1,500,000.
 * 
 * The checkout system must calculate:
 * - Product subtotal
 * - Membership discount
 * - Voucher deduction
 * - Payment before tax
 * - VAT
 * - Final payment
 * - Reward points
 * - Free shipping eligibility

 */
let keyboardPrice: number = 850000;
let keyboardQuantity: number = 1;

let mousePrice: number = 275000;
let mouseQuantity: number = 2;

let monitorStandPrice: number = 420000;
let monitorStandQuantity: number = 1;

let voucherValue: number = 100000;
let isPremiumMember: boolean = true;
let rewardPointRate: number = 50000;
let vatRate: number = 0.11;

let productSubtotal: number =
    (keyboardPrice * keyboardQuantity) +
    (mousePrice * mouseQuantity) +
    (monitorStandPrice * monitorStandQuantity);

let membershipDiscount: number = 0;

if (isPremiumMember) {
    membershipDiscount = productSubtotal * 0.10;
}

let paymentAfterDiscount: number = productSubtotal - membershipDiscount;

let paymentBeforeTax: number = paymentAfterDiscount - voucherValue;

let vat: number = paymentBeforeTax * vatRate;

// Final Payment
let finalPayment: number = paymentBeforeTax + vat;

let rewardPoints: number = Math.floor(paymentBeforeTax / rewardPointRate);

let freeShipping: boolean =
    isPremiumMember || paymentBeforeTax > 1500000;

console.log("===== Online Marketplace Checkout =====");
console.log("Product Subtotal      : Rp" + productSubtotal);
console.log("Membership Discount   : Rp" + membershipDiscount);
console.log("Voucher Deduction     : Rp" + voucherValue);
console.log("Payment Before Tax    : Rp" + paymentBeforeTax);
console.log("VAT (11%)             : Rp" + vat);
console.log("Final Payment         : Rp" + finalPayment);
console.log("Reward Points         :", rewardPoints);
console.log("Free Shipping         :", freeShipping);