/**
 * A company has a simple data-processing engine used to analyze transaction records.
 */

const transactions = [
    {
        id: "TRX001",
        customer: "Alya",
        amount: 850000,
        status: "paid"
    },
    {
        id: "TRX002",
        customer: "Budi",
        amount: 1250000,
        status: "pending"
    },
    {
        id: "TRX003",
        customer: "Citra",
        amount: 450000,
        status: "paid"
    },
    {
        id: "TRX004",
        customer: "Dimas",
        amount: 2100000,
        status: "paid"
    },
    {
        id: "TRX005",
        customer: "Eka",
        amount: 780000,
        status: "cancelled"
    }
];

type Transaction = {
    id: string;
    customer: string;
    amount: number;
    status: string;
};

function processTransactions<T>(
    transactions: Transaction[],
    callback: (transaction: Transaction) => T
): T[] {

    const result: T[] = [];

    for (let i = 0; i < transactions.length; i++) {
        result.push(callback(transactions[i]));
    }

    return result;
}

function getCustomerName(
    transaction: Transaction
): string {
    return transaction.customer;
}

function getTransactionCategory(
    transaction: Transaction
): string {

    if (transaction.amount >= 2000000) {
        return "HIGH VALUE";
    } else if (transaction.amount >= 1000000) {
        return "MEDIUM VALUE";
    } else {
        return "LOW VALUE";
    }
}

function calculatePlatformFee(
    transaction: Transaction
): number {

    if (transaction.status === "paid") {
        return transaction.amount * 0.02;
    } else if (transaction.status === "pending") {
        return transaction.amount * 0.01;
    } else {
        return 0;
    }
}

const customerNames =
    processTransactions(transactions, getCustomerName);

const transactionCategories =
    processTransactions(transactions, getTransactionCategory);

const platformFees =
    processTransactions(transactions, calculatePlatformFee);

console.log("=== CUSTOMER NAMES ===");
console.log(customerNames);

console.log("=== TRANSACTION CATEGORIES ===");
console.log(transactionCategories);

console.log("=== PLATFORM FEES ===");
console.log(platformFees);

/** TASKS:
 * - Extract customer's name only in array
 * - Determine Transaction Category with rules below:
 *   - ≥ Rp2,000,000 → HIGH VALUE
 *   - ≥ Rp1,000,000 → MEDIUM VALUE
 *   - < Rp1,000,000 → LOW VALUE
 * - Calculate platform fee:
 *   - Paid transactions → 2%
 *   - Pending transactions → 1%
 *   - Cancelled transactions → 0%
 */