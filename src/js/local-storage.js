import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

// Створюємо масив для збереження книг у localStorage
const localStorageItems = JSON.parse(localStorage.getItem('books')) || [];

const container = document.getElementById('tui-pagination-container');
const shoppingList = document.querySelector('.shopping-list');

const pagination = new Pagination(container, {
  totalItems: localStorageItems.length, // Set the total number of items
  itemsPerPage: 3, // Set the number of items per page
  visiblePages: 3, // Set the number of visible pages
  page: 1, // Set the initial page
});

console.log(pagination);

// Handle page change event
pagination.on('afterMove', function (eventData) {
  renderBooks(eventData.page); // Render books based on the current page
});

function renderBooks(page) {
  shoppingList.innerHTML = ''; // Clear the shopping list
  const startIndex = (page - 1) * pagination._options.itemsPerPage;
  const endIndex = startIndex + pagination._options.itemsPerPage;
  const booksToRender = localStorageItems.slice(startIndex, endIndex);

  booksToRender.forEach(book => {
    renderBookFromLocalStorageWithoutFetch(book);
  });
}

// Рендер Shopping list без реквеста на сервер
export function renderShoppingListFromLocalStorage() {
  try {
    const localStorageItems = JSON.parse(localStorage.getItem('books')) || [];
    if (!localStorageItems) return;
    localStorageItems.forEach(book =>
      renderBookFromLocalStorageWithoutFetch(book)
    );
  } catch (error) {
    console.log(error);
    iziToast.error({
      title: 'Error',
      message: `Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${error.message}`,
      position: 'topRight',
    });
  }
}

// Рендер книги без реквеста на сервер
export function renderBookFromLocalStorageWithoutFetch(book) {
  const markup = `
  <li id="${book._id}">
    <img src="${book.book_image}" alt="${book.title}">
    <h3>${book.title}</h3>
    <p>${book.description}</p>
    <p>${book.author}</p>
    <p>${book.publisher}</p>
    <a href="${book.amazon_product_url}" target="_blank">Buy on Amazon</a>
    <button type="button">Remove from shopping list</button>
  </li>`;

  shoppingList.insertAdjacentHTML('beforeend', markup);
}

// Видалення елемента з Shopping List
export function onRemoveFromShoppingListAndLocalStorage(e) {
  if (e.target.nodeName !== 'BUTTON') return;

  const element = e.target.parentNode;
  const id = element.id;
  const index = localStorageItems.findIndex(item => item._id === id);

  if (index !== -1) {
    localStorageItems.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(localStorageItems));
    pagination.reset(localStorageItems.length); // Reset pagination with updated total items
    renderBooks(pagination.getCurrentPage()); // Render books for the current page
  }

  element.remove();
}

shoppingList.addEventListener('click', onRemoveFromShoppingListAndLocalStorage);

// Initial rendering
renderBooks(1); // Render books for the first page
