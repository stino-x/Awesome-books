// Book Class: Represents a Book
// class Book {
//   constructor(title, author, isbn) {
//     this.title = title;
//     this.author = author;
//     this.isbn = isbn;
//   }
// }

// UI Class: Handle UI Tasks
class UI {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  static addBookToList() {
    const displayArea = document.querySelector('.display-area');
    const form = document.createElement('form');
    form.classList.add('form-border');
    form.innerHTML = '';
    form.innerHTML = `
    ${this.title}
    ${this.author}
    <input type="submit" id="#button" class="delete" value="Remove">`;
    displayArea.appendChild(form);
  }

  static displayBooks() {
    const books = UI.getBooks();
    books.forEach((book) => UI.addBookToList(book));
  }

  static deleteBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.remove();
    }
  }

  static showAlert(message) {
    const errorcontainer = document.createElement('small');
    errorcontainer.classList.add('error-container');
    errorcontainer.appendChild(document.createTextNode(message));
    const form = document.querySelector('.form-border');
    const deletebutton = document.querySelector('.delete');
    form.insertBefore(deletebutton, errorcontainer);

    // Vanish in 3 seconds
    setTimeout(() => document.querySelector('.error-message').remove(), 3000);
  }

  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
  }

  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }

  static addBook(book) {
    const books = UI.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(author) {
    const books = UI.getBooks();

    books.forEach((book, index) => {
      if (book.author === author) {
        books.splice(index, 1);
      }
    });

    localStorage.setItem('books', JSON.stringify(books));
  }
}

// Store Class: Handles Storage
// class Store {
//   static getBooks() {
//     let books;
//     if (localStorage.getItem('books') === null) {
//       books = [];
//     } else {
//       books = JSON.parse(localStorage.getItem('books'));
//     }

//     return books;
//   }

//   static addBook(book) {
//     const books = Store.getBooks();
//     books.push(book);
//     localStorage.setItem('books', JSON.stringify(books));
//   }

//   static removeBook(isbn) {
//     const books = Store.getBooks();

//     books.forEach((book, index) => {
//       if (book.isbn === isbn) {
//         books.splice(index, 1);
//       }
//     });

//     localStorage.setItem('books', JSON.stringify(books));
//   }
// }

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a Book
document.querySelector('#input-form').addEventListener('submit', (e) => {
  // Prevent actual submit
  e.preventDefault();

  // Get form values
  const title = document.querySelector('#Title').value.trim();
  const author = document.querySelector('#Author').value.trim();

  // Validate
  if (title === '' || author === '') {
    UI.showAlert('Please fill in all fields');
    setTimeout(() => document.querySelector('.alert').remove(), 3000);
  } else {
    // Instatiate book
    const book = new UI(title, author);

    // Add Book to UI
    UI.addBook(book);

    // Add book to store
    UI.addBookToList();

    // Show success message
    UI.showAlert('Book Added');

    // Clear fields
    UI.clearFields();
  }
});

// Event: Remove a Book
document.querySelector('.display-area').addEventListener('click', (e) => {
  // Remove book from UI
  UI.deleteBook(e.target);

  // Remove book from store
  UI.removeBook(e.target.parentElement.previousElementSibling.textContent);

  // Show success message
  UI.showAlert('Book Removed');
});