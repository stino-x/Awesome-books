const form = document.querySelector('#input-form');
const titleInput = document.querySelector('#Title');
const authorInput = document.querySelector('#Author');
const bookList = document.querySelector('#display-area');

let myBooks = [];

// Check if there are any saved books in local storage
if (localStorage.getItem('books')) {
  myBooks = JSON.parse(localStorage.getItem('books'));
}

// Display all books in list
function displayBooks(books) {
  bookList.innerHTML = '';
  books.forEach((book, index) => {
    const li = document.createElement('li');
    li.innerHTML = `<div>${book.title}</div>
    <div>${book.title}</div>
     <input type="submit" id="#button" value="Remove Book" class="remove">`;
    li.dataset.index = index;
    bookList.appendChild(li);
    li.setAttribute('class', 'form-border');
  });
}

// Display saved books on page load
if (myBooks.length > 0) {
  displayBooks(myBooks);
}

// Add book to list
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = titleInput.value;
  const author = authorInput.value;
  const book = { title, author };
  myBooks.push(book);
  localStorage.setItem('books', JSON.stringify(myBooks));
  displayBooks(myBooks);
  form.reset();
});

// Remove book from list
bookList.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove')) {
    const bookIndex = e.target.parentElement.dataset.index;
    myBooks.splice(bookIndex, 1);
    localStorage.setItem('books', JSON.stringify(myBooks));
    displayBooks(myBooks);
  }
});
