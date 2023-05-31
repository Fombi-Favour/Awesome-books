// Handle page navigation

function handlePageChange(e) {
  const navLinks = document.getElementsByClassName('nav-link');
  for (let i = 0; i < navLinks.length; i += 1) {
    navLinks[i].style.color = '';
  }

  if (e.target.classList.contains('list')) {
    document.querySelector('#book-display').style.display = 'block';
    document.querySelector('#add-book').style.display = 'none';
    document.querySelector('#contact').style.display = 'none';
  } else if (e.target.classList.contains('addBook')) {
    document.querySelector('#book-display').style.display = 'none';
    document.querySelector('#add-book').style.display = 'block';
    document.querySelector('#contact').style.display = 'none';
  } else if (e.target.classList.contains('contactInfo')) {
    document.querySelector('#book-display').style.display = 'none';
    document.querySelector('#add-book').style.display = 'none';
    document.querySelector('#contact').style.display = 'block';
  }
}

document.addEventListener('click', (e) => {
  handlePageChange(e);
});

// Date
const timeElement = document.querySelector('.time');
const dateElement = document.querySelector('.date');

/**
 * @param {Date} date
 */
function formatTime(date) {
  const hours12 = date.getHours() % 12 || 12;
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const isAm = date.getHours() < 12;

  return `${hours12.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}:${seconds
    .toString()
    .padStart(2, '0')} ${isAm ? 'AM' : 'PM'}`;
}

/**
 * @param {Date} date
 */
function formatDate(date) {
  const DAYS = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return `${DAYS[date.getDay()]}, ${
    MONTHS[date.getMonth()]
  } ${date.getDate()} ${date.getFullYear()}`;
}

setInterval(() => {
  const now = new Date();

  timeElement.textContent = formatTime(now);
  dateElement.textContent = formatDate(now);
}, 200);

let books = JSON.parse(localStorage.getItem('books'));

class Book {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }

  addBook() {
    const { title, author, id } = this;
    const bookList = { title, author, id };
    const errorMsg = document.querySelector('.warning');
    books = JSON.parse(localStorage.getItem('books'));
    if (title === '' || author === '') {
      errorMsg.innerText = 'All fields are required';
    } else if (books !== null) {
      books.push(bookList);
      localStorage.setItem('books', JSON.stringify(books));
      books = JSON.parse(localStorage.getItem('books'));
    } else {
      books = [];
      books.push(bookList);
      localStorage.setItem('books', JSON.stringify(books));
      books = JSON.parse(localStorage.getItem('books'));
    }
  }

  remove() {
    const { id } = this;
    books = books.filter((book) => {
      if (book.id === id) {
        return false;
      }
      return true;
    });

    localStorage.setItem('books', JSON.stringify(books));
  }
}

// Display books
function showBooks(title, author, id) {
  const bookList = document.querySelector('.book-list');
  const items = document.createElement('li');
  items.innerHTML = `
        <div class="item-list"><strong>"${title}"</strong> by <strong>${author}</strong></div>
        `;
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.className = 'remove-btn';
  items.append(removeBtn);

  // const hr = document.createElement('hr');
  // items.append(hr);

  bookList.appendChild(items);

  removeBtn.addEventListener('click', () => {
    const book = new Book(title, author, id);
    id = removeBtn.id;
    book.remove();
    items.remove();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 100);
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;

    const book = new Book(title, author, id);
    book.addBook();
    if (title && author) {
      showBooks(book.title, book.author, book.id);
    }
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
  });
});

// Appending book to empty object
if (books !== null) {
  books.forEach((book) => {
    showBooks(book.title, book.author, book.id);
  });
}
