function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "read" : "not read yet"}`
    }
}

const myLibrary = [];

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
    return book;
}

const book1 = addBookToLibrary("The Hobbit", "J. R. R. Tolkien", 295, true)
const book2 = addBookToLibrary("The Game of Thrones", "George R. R. Martin", 694, false)

console.log(book1.info());
console.log(book2.info());