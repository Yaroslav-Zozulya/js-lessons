import '../../sass/main.scss';
const BASE_URL = 'http://localhost:3000';

/*
 * POST request
 */

async function addBook(book) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  };

  const newBook = {
    title: 'CSS for beginner',
    author: 'A. Repeta',
    genres: ['Программирование'],
    rating: 10,
  };

  const response = await fetch(`${BASE_URL}/books`, options);
  const addedBook = await response.json();

  return addedBook;
}

/*
 * DELETE request
 */

async function deleteBookById(bookId) {
  const options = {
    method: 'DELETE',
  };
  const response = await fetch(`${BASE_URL}/books/${bookId}`, options);
  return response;
}

/*
 * PUTCH request
 */

async function updateBookById(book, bookId) {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  };
  const response = await fetch(`http://localhost:3000/books/${bookId}`, options);
  const updatedBook = response.json();
  return updatedBook;
}

async function renderNewBook() {
  try {
    const book = await addBook();
    console.log(book);
  } catch (error) {
    console.log('Some Error');
  }
}
