import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { BooksApi } from './books-api.js';

const booksApi = new BooksApi();

const funds = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: null,
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: null,
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: null,
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: null,
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: null,
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: null,
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: null,
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: null,
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: null,
  },
];

// Створюємо три змінні для додавання до них розмітки, вони мають посилатися на 3 елемента <ul> в html
const categoriesList = document.querySelector('.categories-list');
const categoryItem = document.querySelector('.category');
const shoppingList = document.querySelector('.shopping-list');
const fundsList = document.querySelector('#funds-list');

// Створюємо масив для збереження книг у localStorage
const localStorageItems = JSON.parse(localStorage.getItem('books')) || [];

function renderFunds(arr) {
  let num = 0;

  const markup = arr
    .map(({ title, url, img }) => {
      num++;
      return `
  <div class="swiper-slide">
   ${num} <a href="${url}" target="_blank">${title}</a>
  </div>`;
    })
    .join('');

  fundsList.insertAdjacentHTML('beforeend', markup);

  const swiper = new Swiper('.swiper-container', {
    modules: [Navigation, Pagination],
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
}

export async function renderBooksList() {
  try {
    const categories = await booksApi.getCategories();
    const markup = categories
      .map(
        ({ list_name }) =>
          `<li class="category-link"><a href="">${list_name}</a></li>`
      )
      .join('');

    categoriesList.insertAdjacentHTML('beforeend', markup);

    const categoryLinks = document.querySelectorAll('.category-link');

    categoryLinks.forEach(el => {
      el.addEventListener('click', e => {
        console.log(e.target);
        const activeCategory = document.querySelector('.category-link .active');

        if (activeCategory) {
          activeCategory.classList.remove('active');
        }
        e.target.classList.add('active');
      });
    });
  } catch (error) {
    console.log(error);
    iziToast.error({
      title: 'Error',
      message: `Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${error.message}`,
      position: 'topRight',
    });
  }
}

export async function renderTopBooks() {
  try {
    const topBooks = await booksApi.getTopBooks();

    topBooks.forEach(list => {
      const listHeaderHTML = `<h2>${list.list_name}</h2>`;
      const showCategoryBtnHTML = `<button class="category-btn" data-category="${list.list_name}" type="button">See more</button>`;

      const markup = list.books
        .map(book => {
          return `
        <div class="book" id="${book._id}">
          <img src="${book.book_image}" alt="${book.title}">
          <h3>${book.title}</h3>
          <p class="description">${book.description}</p>
          <p class="author">Author: ${book.author}</p>
          <p class="publisher"=>Publisher: ${book.publisher}</p>
          <a class="amazon-link" href="${book.amazon_product_url}" target="_blank">Buy on Amazon</a>
        </div>`;
        })
        .join('');

      const listOfTopBooks = listHeaderHTML + showCategoryBtnHTML + markup;

      categoryItem.insertAdjacentHTML('beforeend', listOfTopBooks);
    });
  } catch (error) {
    console.log(error);
    iziToast.error({
      title: 'Error',
      message: `Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${error.message}`,
      position: 'topRight',
    });
  }
}

export async function renderCategory(category) {
  try {
    const booksList = await booksApi.getCategory(category);

    const categoriesArray = category.split(' ');
    const categoriesLastWord = categoriesArray[categoriesArray.length - 1];
    const categoriesFirstPart = categoriesArray
      .slice(0, categoriesArray.length - 1)
      .join(' ');

    const categoryHeaderHTML = `<h2 class="category-header">${categoriesFirstPart} <span class="last-word-color">${categoriesLastWord}</span></h2>`;
    const markup = booksList
      .map(book => {
        return `
      <div class="book" id="${book._id}">
        <img src="${book.book_image}" alt="${book.title}">
        <h3>${book.title}</h3>
        <p class="description">${book.description}</p>
        <p class="author">Author: ${book.author}</p>
        <p class="publisher">Publisher: ${book.publisher}</p>
        <a class="amazon-link" href="${book.amazon_product_url}" target="_blank">Buy on Amazon</a>
      </div>`;
      })
      .join('');

    const listOfCategoryBooks = categoryHeaderHTML + markup;

    categoryItem.insertAdjacentHTML('beforeend', listOfCategoryBooks);
  } catch (error) {
    console.log(error);
    iziToast.error({
      title: 'Error',
      message: `Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${error.message}`,
      position: 'topRight',
    });
  }
}

export async function renderBook(id) {
  try {
    const book = await booksApi.getBook(id);

    let buttonText = 'Add to shopping list';

    if (localStorageItems.findIndex(el => el._id === book._id) > -1) {
      buttonText = 'Remove from shopping list';
    }

    const markup = `
  <li class="book" id="${book._id}">
    <img src="${book.book_image}" alt="${book.title}">
    <h3>${book.title}</h3>
    <p class="description">${book.description}</p>
    <p class="author">Author: ${book.author}</p>
    <p class="publisher">Publisher: ${book.publisher}</p>
    <a class="amazon-link" href="${book.amazon_product_url}" target="_blank">Buy on Amazon</a>
    <button class="add-btn" type="button">${buttonText}</button>
  </li>`;

    categoryItem.insertAdjacentHTML('beforeend', markup);
  } catch (error) {
    console.log(error);
    iziToast.error({
      title: 'Error',
      message: `Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${error.message}`,
      position: 'topRight',
    });
  }
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

export function openModal(e) {
  if (e.target.nodeName !== 'IMG') return;
  e.preventDefault();
  e.stopPropagation();
  const id = e.target.parentNode.id;
  categoryItem.innerHTML = '';
  renderBook(id);
}

export function onAddAndRemoveToShoppingListOnModal(e) {
  if (e.target.textContent === 'Add to shopping list') {
    const id = e.target.parentNode.id;
    if (localStorageItems.includes(id)) return;
    e.target.textContent = 'Remove from shopping list';
    localStorageItems.push(id);
    localStorage.setItem('books', JSON.stringify(localStorageItems));

    return;
  }

  if (e.target.textContent === 'Remove from shopping list') {
    const id = e.target.parentNode.id;
    const index = localStorageItems.indexOf(id);

    if (index !== -1) {
      localStorageItems.splice(index, 1);
      localStorage.setItem('books', JSON.stringify(localStorageItems));
      e.target.textContent = 'Add to shopping list';

      return;
    }
  }
}

export function renderShoppingList() {
  try {
    const arrayOfBooks = JSON.parse(localStorage.getItem('books'));
    if (!arrayOfBooks) return;
    arrayOfBooks.forEach(book => renderBookFromLocalStorage(book));
  } catch (error) {
    console.log(error);
    iziToast.error({
      title: 'Error',
      message: `Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${error.message}`,
      position: 'topRight',
    });
  }
}

export async function renderBookFromLocalStorage(id) {
  try {
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
  } catch (error) {
    console.log(error);
    iziToast.error({
      title: 'Error',
      message: `Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${error.message}`,
      position: 'topRight',
    });
  }
}

export function onRemoveFromShoppingList(e) {
  if (e.target.nodeName !== 'BUTTON') return;
  const element = e.target.parentNode;
  const id = element.id;
  const index = localStorageItems.indexOf(id);
  localStorageItems.splice(index, 1);
  localStorage.setItem('books', JSON.stringify(localStorageItems));
  element.remove();
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
  }

  element.remove();
}

// Додавання та видалення об'єкта книги до localStorage без реквеста на сервер
export async function onAddAndRemoveToLocalStorageOnModal(e) {
  const bookElement = e.target.closest('.book');

  if (!bookElement) return;

  const id = bookElement.id;
  const title = bookElement.querySelector('h3').textContent;
  const description = bookElement.querySelector('.description').textContent;
  const author = bookElement.querySelector('.author').textContent;
  const publisher = bookElement.querySelector('.publisher').textContent;
  const bookImage = bookElement.querySelector('img').src;
  const amazonProductUrl = bookElement.querySelector('.amazon-link').href;
  const modalText = bookElement.querySelector('.modal-text');

  const book = {
    _id: id,
    title: title,
    description: description,
    author: author,
    publisher: publisher,
    book_image: bookImage,
    amazon_product_url: amazonProductUrl,
  };

  if (e.target.textContent === 'Add to shopping list') {
    modalText.style.display = 'block';

    if (localStorageItems.find(item => item._id === id)) return;

    e.target.textContent = 'Remove from shopping list';
    localStorageItems.push(book);
    localStorage.setItem('books', JSON.stringify(localStorageItems));
  } else if (e.target.textContent === 'Remove from shopping list') {
    modalText.style.display = 'none';
    const index = localStorageItems.findIndex(item => item._id === id);

    if (index !== -1) {
      localStorageItems.splice(index, 1);
      localStorage.setItem('books', JSON.stringify(localStorageItems));
      e.target.textContent = 'Add to shopping list';
    }
  }
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

async function openBasicModal(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') {
    return;
  }

  e.stopPropagation();
  const id = e.target.parentNode.id;
  try {
    const book = await booksApi.getBook(id);

    let buttonText = 'Add to shopping list';

    if (localStorageItems.findIndex(el => el._id === book._id) > -1) {
      buttonText = 'Remove from shopping list';
    }

    const markup = `
  <div class="book" id="${book._id}">
    <img src="${book.book_image}" alt="${book.title}">
    <h3>${book.title}</h3>
    <p class="description">${book.description}</p>
    <p class="author">Author: ${book.author}</p>
    <p class="publisher">Publisher: ${book.publisher}</p>
    <a class="amazon-link" href="${book.amazon_product_url}" target="_blank">Buy on Amazon</a>
    <button class="add-btn" type="button">${buttonText}</button>
    <p class="modal-text">Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>
  </div>`;

    const escapeKey = event => {
      if (event.code === 'Escape') {
        instance.close();
      }
    };

    const instance = basicLightbox.create(markup, {
      className: 'modal',
      onShow: () => {
        const modalText = instance.element().querySelector('.modal-text');

        if (localStorageItems.find(item => item._id === id)) {
          modalText.classList.add('visible');
        }

        document.addEventListener('keydown', escapeKey);
        document.addEventListener('click', onAddAndRemoveToLocalStorageOnModal);
      },
      onClose: () => {
        document.removeEventListener('keydown', escapeKey);
      },
    });

    instance.show();
  } catch (error) {
    console.log(error);
    iziToast.error({
      title: 'Error',
      message: `Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${error.message}`,
      position: 'topRight',
    });
  }
}

// Додаємо слухачі подій для рендера окремої категорії, відкриття модалки, додавання та видалення до Shopping List
categoriesList.addEventListener('click', onGalleryItemClick);
categoryItem.addEventListener('click', onShowCategoryBtnClick);
// categoryItem.addEventListener('click', onAddAndRemoveToLocalStorageOnModal);

categoryItem.addEventListener('click', openBasicModal);

// Рендер списка категорій, топ-5 книг кожної категорії та Shopping List, де рендеряться об'єкти з localStorage
renderFunds(funds);
renderBooksList();
renderTopBooks();
