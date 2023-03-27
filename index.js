// import { exports } from "./node_modules/luxon/build/node/luxon.js";
import { DateTime } from './modules/luxon.js';
import BookList from './modules/booklist.js';
import { navBtns, bookListSection, renderPage } from './modules/navigation.js';

const myBookList = new BookList();
myBookList.setupEventListeners();

navBtns.forEach((each) => {
  each.addEventListener('click', renderPage);
});

window.onload = () => {
  bookListSection.style.display = 'flex';
  Array.from(navBtns)[0].className = 'btn-active';
};

setInterval(() => {
  const date = DateTime.now();
  const dateObj = date.toLocaleString(DateTime.DATETIME_MED);
  document.querySelector('#date').textContent = dateObj;
}, 60000);