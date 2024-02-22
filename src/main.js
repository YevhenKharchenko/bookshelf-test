import { BooksApi } from './js/books-api';

const booksApi = new BooksApi();

// const hardcoverFiction = await booksApi.getCategory('Hardcover Nonfiction');
// const book = await booksApi.getBook('643282b1e85766588626a0c0');
const booksList = document.querySelector('.books-list');
const topBooksList = document.querySelector('.top-books-list');

async function renderBooksList() {
  const categories = await booksApi.getCategories();
  const markup = categories
    .map(({ list_name }) => `<li>${list_name}</li>`)
    .join('');

  booksList.insertAdjacentHTML('beforeend', markup);
}

async function renderTopBooks() {
  const topBooks = await booksApi.getTopBooks();

  topBooks.forEach(list => {
    const listHeaderHTML = `<h2>${list.list_name}</h2>`;

    const booksHTML = list.books
      .map(book => {
        return `
        <div class="book" id="${book._id}">
            <img src="${book.book_image}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Publisher: ${book.publisher}</p>
            <a href="${book.amazon_product_url}" target="_blank">Buy on Amazon</a>
        </div>`;
      })
      .join('');

    const listOfTopBooks = listHeaderHTML + booksHTML;
    topBooksList.insertAdjacentHTML('beforeend', listOfTopBooks);
  });
}

renderBooksList();
renderTopBooks();
