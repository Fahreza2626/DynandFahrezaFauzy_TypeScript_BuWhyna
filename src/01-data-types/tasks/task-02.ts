/**
 * An e-commerce platform is preparing a flash sale event. Before the discount calculation begins, 
 * the system temporarily stores several pieces of information as individual variables.
 * A customer wants to purchase a Mechanical Keyboard RGB with the product code KBR-001. 
 * The original price of the product is 850000 rupiahs, 
 * and the flash sale offers a 25% discount. The customer plans to buy 2 keyboards. 
 * Because the customer is a premium member, they are eligible for free shipping. 
 * The current stock available in the warehouse is 18 units.
 * 
 * Task:
 * 1. Identify every value that should become a variable.
 * 2. Choose an appropriate variable name for each value.
 * 3. Determine the correct data type.
 * 4. Declare all variables in TypeScript.
 * 5. Display the product data using console.log.
 */
let productName : string = "Mechanical Keyboard RGB";
let productCode : string = "KBR-001";
let originalPrice : number = 850000;
let discountPercentage : number = 25;
let quantityPurchased : number = 2;
let isPremiumMember : boolean = true;
let freeShipping : boolean = true;
let stockAvailable : number = 18;

console.log("=== Flash Sale Product ===");
console.log("Product Name      :", productName);
console.log("Product Code      :", productCode);
console.log("Original Price    : Rp", originalPrice);
console.log("Discount          :", discountPercentage + "%");
console.log("Quantity          :", quantityPurchased);
console.log("Premium Member    :", isPremiumMember);
console.log("Free Shipping     :", freeShipping);
console.log("Available Stock   :", stockAvailable);