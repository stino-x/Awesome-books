// const bookObject = [
// //   {
// //     Title: '',
// //     Author: '',
// //   },
// ];
// const addButton = document.querySelector('#add-button');
// const removeButton = document.querySelector('#remove-button');
// const titleInputArea = document.querySelector('#Title');
// const AuthorInputArea = document.querySelector('#Author');
// const displayArea = document.querySelector('.display-area');
// const inputObject = {
//   Title: String(titleInputArea.value.innerText),
//   Author: String(AuthorInputArea.value.innerText),
// };

// // FUNCTIONS
// function addBook() {
//   const newBook = document.createElement('div');
//   newBook.setAttribute('class', 'form-border');
//   newBook.setAttribute('class', `book-${bookObject.length}`);
//   newBook.setAttribute('id', `${bookObject.length}`);
//   newBook.append(titleInputArea.value.innerText);
//   newBook.append(AuthorInputArea.value.innerText);
//   const newBookbuttonRemove = document.createElement('button');
//   newBookbuttonRemove.textContent = 'Remove';
//   newBook.append(newBookbuttonRemove);
//   newBookbuttonRemove.setAttribute('class', 'remove-button');
//   newBookbuttonRemove.setAttribute('class', `remove-book-${bookObject.length}`);
//   newBookbuttonRemove.setAttribute('id', `${bookObject.length}`);
//   displayArea.append(newBook);
//   bookObject.push(inputObject);
//   const Stringobject = JSON.stringify(inputObject);
//   bookObject.forEach((book) => {
//     localStorage.setItem(`book-${book}`, Stringobject);
//   });
// }

// function removeBook(e) {
// //   const currentbutton = document.querySelector('.remove-button');
// //   const currentbook = document.querySelector('.form-border');
//   bookObject.forEach((book) => {
//     if (book.Title.value === titleInputArea.value && book.Author.value === AuthorInputArea.value) {
//       bookObject.splice(book, 1);
//     }
//   });
// }

// // EVENT LISTENERS
// addButton.addEventListener('click', addBook);
// removeButton.addEventListener('click', removeBook);