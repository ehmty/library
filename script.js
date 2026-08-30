function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

const myLibrary = [];

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
    return book;
}

const book1 = addBookToLibrary("The Hobbit", "J. R. R. Tolkien", 295, true)
const book2 = addBookToLibrary("The Game of Thrones", "George R. R. Martin", 694, false)

function showBooks(myLibrary) {
    const tableBody = document.querySelector("tbody");
    
    for (let book of myLibrary) {
        const tableRow = document.createElement("tr");
        
        for (let prop in book) {
            const tableData = document.createElement("td");
            if (prop === "read") {
                tableData.textContent = book.read ? "read": "not read yet";
            } else {
                tableData.textContent = book[prop];
            }
            tableRow.appendChild(tableData);
        }

        tableBody.appendChild(tableRow);
    }
}

showBooks(myLibrary);

