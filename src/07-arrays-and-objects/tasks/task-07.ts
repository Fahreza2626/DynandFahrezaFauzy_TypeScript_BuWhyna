/**
 * An online store has customer orders.
 * Tasks:
 * 1. Get only completed orders.
 * 2. Calculate the total value of each order.
 * 3. Find the customer who spent the most.
 * 4. Calculate the total revenue from completed orders.
 * 5. Find all products that have been purchased.
 */
const orders = [
    {
        id: 101,
        customer: "Andi",
        status: "completed",
        items: [
            { product: "Keyboard", price: 350000, quantity: 1 },
            { product: "Mouse", price: 150000, quantity: 2 },
        ],
    },
    {
        id: 102,
        customer: "Budi",
        status: "cancelled",
        items: [
            { product: "Monitor", price: 2500000, quantity: 1 },
        ],
    },
    {
        id: 103,
        customer: "Citra",
        status: "completed",
        items: [
            { product: "Monitor", price: 2500000, quantity: 2 },
            { product: "Keyboard", price: 350000, quantity: 1 },
        ],
    },
];

const completedOrders = orders.filter(
    order => order.status === "completed"
);

const orderValues = orders.map(order => {
    let total = 0;

    for (const item of order.items) {
        total += item.price * item.quantity;
    }

    return {
        customer: order.customer,
        total: total
    };
});

let highestSpending = 0;
let highestCustomer = "";

for (const order of orderValues) {
    if (order.total > highestSpending) {
        highestSpending = order.total;
        highestCustomer = order.customer;
    }
}

let totalRevenue = 0;

for (const order of completedOrders) {
    for (const item of order.items) {
        totalRevenue += item.price * item.quantity;
    }
}

const purchasedProducts = orders.flatMap(order =>
    order.items.map(item => item.product)
);

console.log("Completed Orders:", completedOrders);
console.log("Order Values:", orderValues);
console.log("Customer Who Spent Most:", highestCustomer);
console.log("Total Revenue:", totalRevenue);
console.log("Purchased Products:", purchasedProducts);