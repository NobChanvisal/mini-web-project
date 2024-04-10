const Name = document.querySelector(".input-bar");
const DateInput = document.querySelector(".input-date"); // Renamed to avoid conflicts with reserved word 'Date'
const Add = document.querySelector(".add-button");
const show = document.querySelector(".show");
let todoList = []; 

// Load todoList from localStorage when page loads
window.addEventListener('load', () => {
    const storedTodoList = localStorage.getItem('todoList');
    if (storedTodoList) {
        todoList = JSON.parse(storedTodoList);
        showWebpage();
    }
});

Add.addEventListener("click", () => {
    const name = Name.value;
    const date = DateInput.value; 
    todoList.push({ name, date });
    saveTodoListToLocalStorage(); // Save updated todoList to localStorage
    Name.value = ''; 
    DateInput.value = ''; 
    showWebpage();
});

function saveTodoListToLocalStorage() {
    localStorage.setItem('todoList', JSON.stringify(todoList));
}

function showWebpage() {
    let todoListHtml = ''; // Clear todoListHtml
    for (let i = 0; i < todoList.length; i++) {
        const { name, date } = todoList[i];
        const html = `
            <div>${name}</div> 
            <div>${date}</div>
            <button class="delete-button" onclick="deleteTodo(${i})">Delete</button>
        `;
        todoListHtml += html;
    }
    show.innerHTML = todoListHtml;
}

function deleteTodo(index) {
    todoList.splice(index, 1);
    saveTodoListToLocalStorage(); // Save updated todoList to localStorage
    showWebpage();
}
