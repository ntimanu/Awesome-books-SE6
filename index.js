import Books from './modules/book.js';
import { updateTime } from './modules/time.js';

const form = document.getElementById('form');

const newBook = new Books();
form.addEventListener('submit', (e) => {
  e.preventDefault();
  newBook.submit();
});

updateTime();
