// function BookData(title, author) {
//   this.title = title;
//   this.author = author;
// }

// const info = document.querySelector('.btn-add');
// const titleInfo = document.querySelector('#name');
// const authorInfo = document.querySelector('#author');
// const list = document.querySelector('.book-list');

// // displaying book data
// function showList(newData) {
//   const data = document.createElement('div');
//   data.classList.add('books');
//   data.innerHTML = `
//     <p>${newData.title}</p>
//     <p>${newData.author}</p>
//     <button type="button">Remove</button>
//     <hr />
//     `;
//   list.appendChild(data);
// }

// // event to add book data
// info.addEventListener('click', () => {
//   const title = titleInfo.value;
//   const author = authorInfo.value;
//   if (title.trim() !== '' && author.trim() !== '') {
//     const newBookData = new BookData(title, author);
//     showList(newBookData);
//     titleInfo.value = '';
//     authorInfo.value = '';
//   }
// });
