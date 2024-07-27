// Book Class : Represent a Book.
class Book {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
    }
}

// UI Class : Handle UI Tasks.
class UI {
    static dispBooks() {
        const books = [
            {
                title: "Book One",
                author: "Author One",
                ISBN: "1234567890",
            },
            {
                title: "Book Two",
                author: "Author Two",
                ISBN: "0987654321",
            }
        ];
        
        books.forEach(book => {
            UI.addBookToList(book);
        });
    }
    
    static addBookToList(book) {
        const list = document.querySelector('#book-list');
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.ISBN}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;
        list.appendChild(row);
    }

    static delBook(el) {
        if (el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    }

    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector(".container");
        const form = document.querySelector("#book-form");
        container.insertBefore(div, form);
        
        // Vanish in 3 seconds....
        setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }
}

// Initialization
document.addEventListener('DOMContentLoaded', UI.dispBooks);

// Adding a book
document.querySelector('#book-form').addEventListener('submit', (e) => {
    e.preventDefault();

    // Values
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let ISBN = document.querySelector('#ISBN').value;

    // Validation
    if (title === '' || author === '' || ISBN === '') {
        UI.showAlert("Please fill in all fields", 'danger');
    } else {
        // Instantiate a new Book object
        let nBook = new Book(title, author, ISBN);
        console.log(nBook); // Just for testing

        // Add the new book to the UI
        UI.addBookToList(nBook);

        // Clear the form fields
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#ISBN').value = '';

        // Show success message
        UI.showAlert("Book Added", 'success');
    }
});

// Remove Book Event
document.querySelector('#book-list').addEventListener("click", (e) => {
    UI.delBook(e.target);

    // Show delete message
    UI.showAlert("Book Removed", 'success');
});
