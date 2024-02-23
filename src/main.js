import { BooksApi } from './js/books-api';

const booksApi = new BooksApi();

const categoriesList = document.querySelector('.categories-list');
const categoryItem = document.querySelector('.category');
const shoppingList = document.querySelector('.shopping-list');

const localStorageItems = JSON.parse(localStorage.getItem('books')) || [];

export async function renderBooksList() {
  const categories = await booksApi.getCategories();
  const markup = categories
    .map(
      ({ list_name }) =>
        `<a class="category-link" href=""><li>${list_name}</li></a>`
    )
    .join('');

  categoriesList.insertAdjacentHTML('beforeend', markup);
}

export async function renderTopBooks() {
  const topBooks = await booksApi.getTopBooks();

  topBooks.forEach(list => {
    const listHeaderHTML = `<h2>${list.list_name}</h2>`;
    const showCategoryBtnHTML = `<button class="category-btn" data-category="${list.list_name}" type="button">See more</button>`;

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

    const listOfTopBooks = listHeaderHTML + showCategoryBtnHTML + booksHTML;
    categoryItem.insertAdjacentHTML('beforeend', listOfTopBooks);
  });
}

export async function renderCategory(category) {
  const booksList = await booksApi.getCategory(category);
  const markup = booksList
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

  categoryItem.insertAdjacentHTML('beforeend', markup);
}

export async function renderBook(id) {
  const book = await booksApi.getBook(id);

  const markup = `
  <li id="${book._id}">
    <img src="${book.book_image}" alt="${book.title}">
    <h3>${book.title}</h3>
    <p>Author: ${book.author}</p>
    <p>Publisher: ${book.publisher}</p>
    <a href="${book.amazon_product_url}" target="_blank">Buy on Amazon</a>
    <button type="button">Add to shopping list</button>
  </li>`;

  categoryItem.insertAdjacentHTML('beforeend', markup);
}

export function onGalleryItemClick(e) {
  e.preventDefault();
  categoryItem.innerHTML = '';
  const category = e.target.textContent;
  renderCategory(category);
}

export function onShowCategoryBtnClick(e) {
  if (!e.target.classList.contains('category-btn')) return;
  const category = e.target.dataset.category;
  categoryItem.innerHTML = '';
  renderCategory(category);
}

export function onImgClick(e) {
  if (e.target.nodeName != 'IMG') return;
  e.preventDefault();
  e.stopPropagation();
  const id = e.target.parentNode.id;
  categoryItem.innerHTML = '';
  renderBook(id);
}

export function onAddToShoppingListBtn(e) {
  if (e.target.textContent != 'Add to shopping list') return;
  const id = e.target.parentNode.id;
  if (localStorageItems.includes(id)) return;
  localStorageItems.push(id);
  localStorage.setItem('books', JSON.stringify(localStorageItems));
}

export function renderShoppingList() {
  const arrayOfBooks = JSON.parse(localStorage.getItem('books'));
  if (!arrayOfBooks) return;
  arrayOfBooks.forEach(book => renderBookFromLocalStorage(book));
}

export async function renderBookFromLocalStorage(id) {
  const book = await booksApi.getBook(id);

  const markup = `
  <li id="${book._id}">
    <img src="${book.book_image}" alt="${book.title}">
    <h3>${book.title}</h3>
    <p>Author: ${book.author}</p>
    <p>Publisher: ${book.publisher}</p>
    <a href="${book.amazon_product_url}" target="_blank">Buy on Amazon</a>
    <button type="button">Remove from shopping list</button>
  </li>`;

  shoppingList.insertAdjacentHTML('beforeend', markup);
}

export function onRemoveFromShoppingList(e) {
  const element = e.target.parentNode;
  const id = element.id;
  localStorageItems.splice(id, 1);
  console.log(localStorageItems);
  localStorage.setItem('books', JSON.stringify(localStorageItems));
  element.remove();
}

categoriesList.addEventListener('click', onGalleryItemClick);
categoryItem.addEventListener('click', onShowCategoryBtnClick);
categoryItem.addEventListener('click', onImgClick);
categoryItem.addEventListener('click', onAddToShoppingListBtn);
shoppingList.addEventListener('click', onRemoveFromShoppingList);

renderBooksList();
renderTopBooks();
renderShoppingList();
