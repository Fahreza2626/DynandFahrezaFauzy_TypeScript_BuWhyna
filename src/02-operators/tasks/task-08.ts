/**
 * A smart home monitors electricity usage every day.
 * Today's information:
 * | Information               | Value |
 * | ------------------------- | ----- |
 * | Previous Meter            | 25640 |
 * | Current Meter             | 25892 |
 * | Electricity Price per kWh | 1650  |
 * | Solar Panel Installed     | Yes   |
 * | Energy Saving Mode        | No    |
 * 
 * Business Rules
 * - Electricity usage is calculated from the meter difference.
 * - Houses with solar panels receive a 20% discount.
 * - Houses receive an additional 5% discount if Energy Saving Mode is enabled.
 * - A house qualifies for the Green Energy Program only if:
 *      - Solar panel is installed
 *      - Energy consumption is below 300 kWh
 *      - Energy Saving Mode is enabled
 * 
 * The system must calculate:
 * - Total energy consumption
 * - Electricity bill
 * - Final bill
 * - Green Energy Program eligibility
 */
let previousMeter : number = 25640;
let currentMeter : number = 25892;
let electricityPricePerKwh : number = 1650;
let hasSolarPanel : boolean = true;
let energySavingMode : boolean = false;

let totalEnergyConsumption : number = currentMeter - previousMeter;

let electricityBill : number = totalEnergyConsumption * electricityPricePerKwh;

let discount: number = 0;

if (hasSolarPanel) {
    discount += electricityBill * 0.20;
}

if (energySavingMode) {
    discount += electricityBill * 0.05;
}

let finalBill: number = electricityBill - discount;

let greenEnergyProgram: boolean =
    hasSolarPanel &&
    totalEnergyConsumption < 300 &&
    energySavingMode;

console.log("===== Smart Home Electricity Report =====");
console.log("Previous Meter          :", previousMeter);
console.log("Current Meter           :", currentMeter);
console.log("Total Energy Consumption:", totalEnergyConsumption, "kWh");
console.log("Electricity Price       : Rp" + electricityPricePerKwh + "/kWh");
console.log("Electricity Bill        : Rp" + electricityBill);
console.log("Discount               : Rp" + discount);
console.log("Final Bill             : Rp" + finalBill);
console.log("Solar Panel Installed  :", hasSolarPanel);
console.log("Energy Saving Mode     :", energySavingMode);
console.log("Green Energy Program   :", greenEnergyProgram);