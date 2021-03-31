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
    
)


const Maths = new Book (
    "Discrete",
    600,
    "Pi",
    "Mohit Madan",
    25,
    25,
    "false",

)

const English = new Book(
    "Oxward",
    450,
    "Dictonary",
    45,
    45,
    "false",
)

const Science = new Book(
    "Senior Secondary",
    1200,
    "Cell",
    "Khyati",
    52,
    52,
    "true",

);

const Biology = new Book(
    "Immune",
    220,
    "boom",
    "Riya Singh",
    57,
    50,
    "true",
);

console.log("This is a Maths Book", Maths);
console.log(English);
console.log("Biology");