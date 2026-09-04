class Book {
    constructor (title, author, pages, status) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
        this.id = crypto.randomUUID();
    }

    toggleStatus() {
        this.status = !this.status;
    }
}

let myLibrary = [];

function addBookToLibrary(title, author, pages, status) {
    const book = new Book(title, author, pages, status);
    myLibrary.push(book);
    return book;
}

function showLibrary(myLibrary) {
    const tableBody = document.querySelector("tbody");
    tableBody.textContent = "";
    
    for (let book of myLibrary) {
        const tableRow = document.createElement("tr");
        
        const title = document.createElement("td");
        title.textContent = book.title;

        const author = document.createElement("td");
        author.textContent = book.author;

        const pages = document.createElement("td");
        pages.textContent = book.pages;

        const status = document.createElement("td");
        const statusBtn = document.createElement("button");
        statusBtn.classList.add("status-btn");
        statusBtn.classList.add(book.status ? "read" : "not-read");
        statusBtn.textContent = book.status ? "read" : "not read";
        status.appendChild(statusBtn);

        const remove = document.createElement("td");
        const removeBtn = document.createElement("button");
        removeBtn.classList.add("remove-btn");
        removeBtn.textContent = "x";
        remove.appendChild(removeBtn);

        tableRow.append(title, author, pages, status, remove);

        tableRow.setAttribute("data-id", book.id);
        
        tableBody.appendChild(tableRow);
    }

}

showLibrary(myLibrary);

const form = document.querySelector("form");
const tableBody = document.querySelector("tbody");

tableBody.addEventListener("click", e => {
    const id = e.target.closest("tr").getAttribute("data-id");

    if (e.target.classList.contains("remove-btn")) {
        myLibrary = myLibrary.filter(book => book.id !== id);
    }
    
    if (e.target.classList.contains("status-btn")) {
        const book = myLibrary.find(book => book.id === id);
        book.toggleStatus();
    }

    showLibrary(myLibrary);
})


form.addEventListener("submit", e => {
    e.preventDefault();

    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const status = document.querySelector("input[type='radio']:checked").value === "true";

    addBookToLibrary(title, author, pages, status);
    showLibrary(myLibrary);

    form.reset();
})