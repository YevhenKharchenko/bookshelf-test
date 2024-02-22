import { BooksApi } from './js/books-api';

const booksApi = new BooksApi();

const booksList = document.querySelector('.books-list');
const topBooksList = document.querySelector('.top-books-list');
const categoryList = document.querySelector('.category');
const bookItem = document.querySelector('.book-item');

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

async function renderCategory(category) {
  const booksList = await booksApi.getCategory(category);
  const markup = booksList
    .map(book => {
      return `<div class="book" id="${book._id}">
            <img src="${book.book_image}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Publisher: ${book.publisher}</p>
            <a href="${book.amazon_product_url}" target="_blank">Buy on Amazon</a>
        </div>`;
    })
    .join('');

  categoryList.insertAdjacentHTML('beforeend', markup);
}

async function renderBook(id) {
  const book = await booksApi.getBook(id);

  const markup = `<img src="${book.book_image}" alt="${book.title}">
                  <h3>${book.title}</h3>
                  <p>Author: ${book.author}</p>
                  <p>Publisher: ${book.publisher}</p>
                  <a href="${book.amazon_product_url}" target="_blank">Buy on Amazon</a>`;

  bookItem.insertAdjacentHTML('beforeend', markup);
}

renderBooksList();
renderTopBooks();
renderCategory('Picture Books');
renderBook('643282b2e85766588626a10c');
