/**
 * 
 * The school library is building a digital catalog to help students search for books. 
 * Every book must store its ISBN number, title, author's name, total number of pages, 
 * book category, and whether the book is currently available for borrowing.
 * 
 * Task:
 * 1. Define a proper type for the book information.
 * 2. Implement a type that you defined on 3 books data.
 * 
 * display the book data using console.log.
 */
type book = {
    isbn: string;
    title: string;
    author: string;
    totalPages: number;
    category: string;
    isAvailable: boolean;
};
const book1: book = {
    isbn: "978-3-16-148410-0",
    title: "Pemrograman TypeScript",
    author: "Veraldy high",
    totalPages: 180,
    category: "Programming",
    isAvailable: true,
};
const book2: book = {
    isbn: "978-0-14-044913-6",
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    totalPages: 430,
    category: "Fiction",
    isAvailable: false,
};
const book3: book = {
    isbn: "978-0-06-112008-4",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    totalPages: 281,
    category: "Fiction",
    isAvailable: true,
};
console.log("=== Book 1 ===");
console.log(book1);

console.log("=== Book 2 ===");
console.log(book2);

console.log("=== Book 3 ===");
console.log(book3);