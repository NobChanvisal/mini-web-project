const Title = document.querySelector(".title-textbox");
const Author = document.querySelector(".autor-textbox");
const NumberOfpage = document.querySelector(".number-of-page-textbox");
const AddButton = document.querySelector(".add-book-button");
const ShowBook = document.querySelector(".book-data");
const myLibrary = [];

AddButton.addEventListener("click", () => {
  const author = Author.value;
  const title = Title.value;
  const numberOfPage = NumberOfpage.value;
  myLibrary.push({ author, title, numberOfPage }); // Pushing an object
  console.log(myLibrary);
  Author.value = ""; // Clearing input values
  Title.value = "";
  NumberOfpage.value = "";
  addBookToLibrary();
});

function Book(author, title, numberOfpage) {
  //the constructor
  this.author = author;
  this.title = title;
  this.numberOfpage = numberOfpage;
}
const book = new Book("Visal", "Life with code", 120);

console.log(book);

function addBookToLibrary() {
  let bookList = ""; // Initialize variable
  for (let i = 0; i < myLibrary.length; i++) {
    // Fix loop condition
    const { author, title, numberOfPage } = myLibrary[i]; // Destructure object
    const html = `  
                        <div>${author}</div>
                        <div>${title}</div>
                        <div>${numberOfPage}</div> 
                        <button class="remove-button" onclick="removeBook(${i})">Remove</button>
                        `;
                    
    bookList += html;
  }
  ShowBook.innerHTML = bookList; // Use assignment instead of addition to avoid appending multiple times
}
function removeBook(index) {
  myLibrary.splice(index, 1);
  addBookToLibrary();
}
