export const bookListSection = document.querySelector('#book-list-section');
export const navBtns = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('section');

export function renderPage(e) {
  sections.forEach((section) => {
    section.style.display = 'none';
  });
  navBtns.forEach((btn) => {
    btn.classList.remove('btn-active');
  });
  const btn = e.target;
  const idOfClicked = btn.getAttribute('data-id');
  const section = document.querySelector(`#${idOfClicked}`);
  section.style.display = 'flex';
  btn.classList.toggle('btn-active');
}