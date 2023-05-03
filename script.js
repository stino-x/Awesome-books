class BookList {
  constructor(formSelector, titleSelector, authorSelector, displaySelector) {
    this.form = document.querySelector(formSelector);
    this.titleInput = document.querySelector(titleSelector);
    this.authorInput = document.querySelector(authorSelector);
    this.bookList = document.querySelector(displaySelector);
    this.myBooks = [];
    this.initialize();
  }

  initialize() {
    // Check if there are any saved books in local storage
    if (localStorage.getItem('books')) {
      this.myBooks = JSON.parse(localStorage.getItem('books'));
    }

    // Display saved books on page load
    if (this.myBooks.length > 0) {
      this.displayBooks(this.myBooks);
    }

    // Add event listener for form submission
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = this.titleInput.value;
      const author = this.authorInput.value;
      const book = { title, author };
      this.myBooks.push(book);
      localStorage.setItem('books', JSON.stringify(this.myBooks));
      this.displayBooks(this.myBooks);
      this.form.reset();
    });

    // Add event listener for removing book from list
    this.bookList.addEventListener('click', (e) => {
      if (e.target.classList.contains('remove')) {
        const li = e.target.closest('li');
        const bookIndex = li.dataset.index;
        this.myBooks.splice(bookIndex, 1);
        localStorage.setItem('books', JSON.stringify(this.myBooks));
        this.displayBooks(this.myBooks);
      }
    });
  }

  displayBooks(books) {
    this.bookList.innerHTML = '';
    books.forEach((book, index) => {
      const li = document.createElement('li');
      li.innerHTML = `<div class="container">
      <div class="right-part"> <span>${book.title}</span>  <span> by </span> <span>${book.author}</span></div>
      <input type="submit" id="#button" value="Remove Book" class="remove"> </div>`;
      li.dataset.index = index;
      this.bookList.appendChild(li);
      li.setAttribute('class', 'form-border');
    });
  }
}

const myBookList = new BookList('#input-form', '#Title', '#Author', '#display-area');
myBookList.initialize();
// Navigation

const datetime = document.getElementById('datetime');

setInterval(() => {
  const now = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = now.toLocaleDateString('en-US', options);
  const time = now.toLocaleTimeString();
  datetime.innerHTML = `${date} ${time}`;
}, 1000);

const navList = document.getElementById('navList');
const navAdd = document.getElementById('navAdd');
const navContact = document.getElementById('navContact');
const listHeader = document.getElementById('list');
const addNewHeader = document.getElementById('add_new');
const contactHeader = document.getElementById('contact');
const bookList = document.getElementById('display-area');
const Addbook = document.getElementById('input-form');
const contact = document.getElementById('contact_sec');

navList.addEventListener('click', () => {
  listHeader.style.display = 'inline';
  bookList.style.display = 'inline';
  addNewHeader.style.display = 'none';
  Addbook.style.display = 'none';
  contactHeader.style.display = 'none';
  contact.style.display = 'none';
});

navAdd.addEventListener('click', () => {
  listHeader.style.display = 'none';
  bookList.style.display = 'none';
  addNewHeader.style.display = 'inline';
  Addbook.style.display = 'flex';
  contactHeader.style.display = 'none';
  contact.style.display = 'none';
});

navContact.addEventListener('click', () => {
  listHeader.style.display = 'none';
  bookList.style.display = 'none';
  contactHeader.style.display = 'inline';
  contact.style.display = 'inline';
  addNewHeader.style.display = 'none';
  Addbook.style.display = 'none';
});
