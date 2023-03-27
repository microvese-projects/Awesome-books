import { BookList } from "./modules/booklist.js";
import { navBtns, bookListSection, renderPage } from "./modules/navigation.js";

const myBookList = new BookList;
myBookList.setupEventListeners();

navBtns.forEach((each) => {
  each.addEventListener('click', renderPage);
});

window.onload = () => {
  bookListSection.style.display = 'flex';
  Array.from(navBtns)[0].className = 'btn-active';
};