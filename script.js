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
myBookList();
