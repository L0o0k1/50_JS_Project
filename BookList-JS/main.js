// Book Class : Represent a Book .

class B{
    constructor(title, author, ISBN){
        this.title = title;
        this.author = author;
        this.ISBN = ISBN; 
    }
}
// UI Class : That Will Handle UI Tasks .
// Define a Book class to represent individual books
class Book {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
    }
}

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
}

// initialization:

    document.addEventListener('DOMContentLoaded', UI.dispBooks);

// Adding a book
    document.querySelector('#book-form').addEventListener('submit', (e) => {
        e.preventDefault();
// Values:
        let title = document.querySelector('#title').value;
        let author = document.querySelector('#author').value;
        let ISBN = document.querySelector('#ISBN').value;

// Instantiate a new Book object
        let nBook = new Book(title, author, ISBN);
            console.log(nBook); // Just for testing

// Add the new book to the UI
        UI.addBookToList(nBook);

// Clear the form fields
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#ISBN').value = '';
});
