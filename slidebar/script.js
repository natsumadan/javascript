import Book from "./book.js";



const History = new Book(
    "The Lion King",
    "Saraswati",
    500,
    "121-121-121",
    "current Reading",
)


const content = `

<main>
<article>
  <h1>${History.name}</h1>
  <ul>
    <li>${History.pages}
    </li>
    <li>${History.bookstatus}
    </li>
    <li>${History.ISBN}</li>
    <li>${History.publisher}</li>
    </ul>
    </article>
</main>`;

document.body.innerHTML = content;
console.log(History);
