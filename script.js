function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.id = crypto.randomUUID();
}

let myLibrary = [];

function addBookToLibrary(title, author, pages, status) {
    const book = new Book(title, author, pages, status);
    myLibrary.push(book);
    return book;
}

const book1 = addBookToLibrary("The Hobbit", "J. R. R. Tolkien", 295, true)
const book2 = addBookToLibrary("The Game of Thrones", "George R. R. Martin", 694, false)

function showLibrary(myLibrary) {
    const tableBody = document.querySelector("tbody");
    tableBody.textContent = "";
    
    for (let book of myLibrary) {
        const tableRow = document.createElement("tr");
        
        for (let prop in book) {
            const tableData = document.createElement("td");
            if (prop === "id") continue;

            if (prop === "status") {
                tableData.textContent = book.status ? "read": "not read";
            } else {
                tableData.textContent = book[prop];
            }
            tableRow.appendChild(tableData);
        }

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "x"

        tableRow.setAttribute("data-id", book.id);

        tableRow.appendChild(removeBtn);
        tableBody.appendChild(tableRow);
    }

}

showLibrary(myLibrary);

const form = document.querySelector("form");
const tableBody = document.querySelector("tbody");

tableBody.addEventListener("click", e => {
    const id = e.target.parentElement.getAttribute("data-id");
    myLibrary = myLibrary.filter(book => book.id !== id);
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