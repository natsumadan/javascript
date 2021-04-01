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
    <li> Volume:
    </li>
    <li>Color:
    </li>
    <li>Age:</li>
    <li>Number of Pockets</li>
    </ul>
    </article>
</main>`;

document.body.innerHTML = content;
console.log(History);
