import '../../sass/main.scss';
const BASE_URL = 'http://localhost:3000';

/*
 * GET request
 */

// function fetchBooks() {
//   return fetch(`${BASE_URL}/books/`).then(res => res.json());
// }

// function fetchBookById(bookId) {
//   return fetch(`${BASE_URL}/books/${bookId}`).then(res => res.json());
// }

// fetchBooks();
// fetchBookById(1);
// fetchBookById(5);

/*
 * POST request
 */
// const newBook = {
//   title: 'CSS for beginner',
//   author: 'A. Repeta',
//   genres: ['Программирование'],
//   rating: 10,
// };

// function addBook(book) {
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(book),
//   };

//   return fetch(`${BASE_URL}/books`, options).then(response => response.json());
// }

// addBook(newBook).then(renderBook);

// function renderBook(book) {
//   console.log('Пришёл ответ от сервера. Можно рисовать');
//   console.log(book);
// }

/*
 * PUTCH request
 */

// function updateBookById(book, bookId) {
//   const options = {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(book),
//   };
//   return fetch(`http://localhost:3000/books/${bookId}`, options).then(r => r.json());
// }

// updateBookById({ title: 'Big JS BOOK', author: 'don not no' }, 6);

/*
 * DELETE request
 */

// function deleteBookById(bookId) {
//   const options = {
//     method: 'DELETE',
//   };
//   return fetch(`${BASE_URL}/books/${bookId}`, options).then(response => response.json());
// }

// deleteBookById(6).catch(error => console.log(`'Возникла ошибка: ${error}`));
