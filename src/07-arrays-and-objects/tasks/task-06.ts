/**
 * A school library records book borrowing transactions.
 * Tasks:
 * 1. Find all borrowing transactions for "Andi".
 * 2. Find the book information for every borrowing transaction.
 * 3. Find students who borrowed a programming book.
 * 4. Calculate the total number of borrowing transactions.
 * 5. Calculate the average borrowing duration.
 * 6. Find students who borrowed books for more than 7 days.
 */

const books = [
    { id: 1, title: "Clean Code", category: "Programming", stock: 3 },
    { id: 2, title: "Atomic Habits", category: "Self Development", stock: 5 },
    { id: 3, title: "The Pragmatic Programmer", category: "Programming", stock: 2 },
    { id: 4, title: "Design Patterns", category: "Programming", stock: 1 },
];

const borrowings = [
    { student: "Andi", bookId: 1, days: 7 },
    { student: "Budi", bookId: 2, days: 3 },
    { student: "Citra", bookId: 1, days: 10 },
    { student: "Deni", bookId: 3, days: 5 },
    { student: "Eka", bookId: 1, days: 4 },
    { student: "Andi", bookId: 3, days: 8 },
];

const andiBorrowings = borrowings.filter(
    borrowing => borrowing.student === "Andi"
);

const borrowingBookInfo = borrowings.map(borrowing => {
    return books.find(book => book.id === borrowing.bookId);
});

const programmingBookStudents = borrowings
    .filter(borrowing => {
        const book = books.find(book => book.id === borrowing.bookId);
        return book?.category === "Programming";
    })
    .map(borrowing => borrowing.student);

const totalBorrowings = borrowings.length;

let totalDays = 0;

for (const borrowing of borrowings) {
    totalDays += borrowing.days;
}

const averageBorrowingDuration = totalDays / borrowings.length;

const studentsMoreThan7Days = borrowings
    .filter(borrowing => borrowing.days > 7)
    .map(borrowing => borrowing.student);

console.log("Andi Borrowings:", andiBorrowings);
console.log("Book Information:", borrowingBookInfo);
console.log("Programming Book Students:", programmingBookStudents);
console.log("Total Borrowing Transactions:", totalBorrowings);
console.log("Average Borrowing Duration:", averageBorrowingDuration);
console.log("Students More Than 7 Days:", studentsMoreThan7Days);