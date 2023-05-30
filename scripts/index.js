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
      books = JSON.parse(localStorage.getItem('books'));
      if (title === '' || author === '') {
        errorMsg('All fields are required');
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
        <div class="item-list"><strong>${title}</strong> by <strong>${author}</strong></div>
        `;
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';
    items.append(removeBtn);

    const hr = document.createElement('hr');
    items.append(hr);


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
  