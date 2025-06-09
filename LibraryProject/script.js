const Title = document.querySelector(".title-textbox");
const Author = document.querySelector(".autor-textbox");
const NumberOfPage = document.querySelector(".number-of-page-textbox");
const AddButton = document.querySelector(".add-book-button");
const ShowBook = document.querySelector(".book-data");

let myLibrary = [];

function saveBook(data) {
  localStorage.setItem("BookList", JSON.stringify(data));
}

function loadData() {
  const books = localStorage.getItem("BookList");
  if (books) {
    myLibrary = JSON.parse(books);
    displayBooks();
  }
}

function displayBooks() {
  ShowBook.innerHTML = myLibrary
    .map(({ author, title, numberOfPage }, index) => {
      return `
        <div>${author}</div>
        <div>${title}</div>
        <div>${numberOfPage}</div>
        <button class="remove-button" onclick="removeBook(${index})">Remove</button>
      `;
    })
    .join("");
}

AddButton.addEventListener("click", () => {
  const author = Author.value
  const title = Title.value;
  const numberOfPage = NumberOfPage.value;

  if (author && title && numberOfPage) {
    myLibrary.push({ author, title, numberOfPage });
    saveBook(myLibrary);
    displayBooks();

    // Clear inputs
    Author.value = "";
    Title.value = "";
    NumberOfPage.value = "";
  } else {
    alert("Please fill out all fields.");
  }
});

function removeBook(index) {
  myLibrary.splice(index, 1);
  saveBook(myLibrary);
  displayBooks();
}

loadData();
