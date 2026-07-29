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

const keyboardTotal = keyboardPrice * keyboardQty;
const mouseTotal = mousePrice * mouseQty;
const mousePadTotal = mousePadPrice * mousePadQty;

const subTotal = keyboardTotal + mouseTotal + mousePadTotal;

let totalItems = 0;

for (let i = 0; i < keyboardQty; i++){
    totalItems++;
}
for (let i = 0; i < mouseQty; i++){
    totalItems
}
for (let i = 0; i < mousePadQty; i++) {
  totalItems++;
}

// Determine discount
let discount = 0;

if (subTotal > 1000000) {
  discount = subTotal * 0.10;
}

// Shipping cost
let shippingCost = 20000;

if (isPremiumMember) {
  shippingCost = 0;
}

// Calculate final payment
const finalPayment = subTotal - discount + shippingCost;

// Display results
console.log("Subtotal       : Rp" + subTotal);
console.log("Total Items    :", totalItems);
console.log("Discount       : Rp" + discount);
console.log("Premium Member :", isPremiumMember);
console.log("Shipping Cost  : Rp" + shippingCost);
console.log("Final Payment  : Rp" + finalPayment);