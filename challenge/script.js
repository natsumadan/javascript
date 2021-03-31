import Book from "./book.js";
const History = new Book(
    "HappyName",
    500,
    "Raja",
    "Kevin",
    "Blue",
    25,
    25,
    "true",
    "November 2, 2016 04:25:25 IST",
)


const Maths = new Book (
    "Discrete",
    600,
    "Pi",
    "Mohit Madan",
    25,
    25,
    "false",
    "December 12, 2016 08:25:25 IST",

)

const English = new Book(
    "Oxward",
    450,
    "Dictonary",
    45,
    45,
    "false",
    "November 25, 2016 12:25:25 IST",
)

const Science = new Book(
    "Senior Secondary",
    1200,
    "Cell",
    "Khyati",
    52,
    52,
    "true",
    "July 30, 2015 06:45:25 IST",

);

const Biology = new Book(
    "Immune",
    220,
    "boom",
    "Riya Singh",
    57,
    50,
    "true",
    "May 21, 2016 02:25:25 IST"
);

console.log("This is a Maths Book", Maths);
console.log(English);
console.log("Biology", Biology);
console.log("this is the time at which i bought the book", Biology.oldBook());