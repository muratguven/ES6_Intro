
// İşlemler için gerekli elementlerin seçilmesi
const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");

const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");

const clearButton = document.querySelector("#clear-todos");

eventListeners();

function eventListeners() {
    todoForm.addEventListener("submit", addNewTodo);
    document.addEventListener("DOMContentLoaded",loadTodosFromStorage);
    secondCardBody.addEventListener("click",deleteTodo);
    filter.addEventListener("keyup",filterTodos);
    clearButton.addEventListener("click",clearAllTodos);
}

function clearAllTodos(e){
    todoList.innerHTML ="";
    localStorage.removeItem("todos");
}

function filterTodos(e){
    const listGroup = document.querySelectorAll(".list-group-item");
    const filterValue = e.target.value.toLowerCase();

    listGroup.forEach(function(listItem){
        const text = listItem.textContent.toLowerCase();
        if(text.indexOf(filterValue)===-1){
            listItem.setAttribute("style","display:none !important");
        }else{
            listItem.setAttribute("display","display:block");
        }
    });

}

function deleteTodo(e){
    if(e.target.className==="fa fa-remove"){

        e.target.parentElement.parentElement.remove();
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
        showAlert("success","Todo başarıyla silindi...");
        
    }

}

function deleteTodoFromStorage(deleteTodo){
    let todos = getTodoFromStorage();
    todos.forEach(function(todo,index){
        if(todo===deleteTodo){
            todos.splice(index,1);
        }
    });

    localStorage.setItem("todos",JSON.stringify(todos));
}

function loadTodosFromStorage(){
    let todos = getTodoFromStorage();
    todos.forEach(function(newTodo){
        addNewTodoToUI(newTodo);
    });
}
function addNewTodo(e) {



    const newTodo = todoInput.value.trim();
    if (newTodo == "") {
        showAlert("danger", "Lütfen bir Todo Girin!");
    } else {
        addNewTodoToUI(newTodo);
        addTodoToStorage(newTodo);
        showAlert("success", "Todo Eklendi.");
    }


    e.preventDefault();


}

// Todos card body içersine ekleme 
function addNewTodoToUI(newTodo) {
    //    <li class="list-group-item d-flex justify-content-between">
    //     Todo 1
    //     <a href="#" class="delete-item">
    //         <i class="fa fa-remove"></i>
    //     </a>

    // </li>


    // Yeni List item oluşturma 
    console.log(newTodo);
    const listItem = document.createElement("li");
    listItem.className = "list-group-item d-flex justify-content-between";

    const link = document.createElement("a");
    link.className = "delete-item";
    link.href = "#";
    link.innerHTML = "<i class='fa fa-remove'></i>";

    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);
    todoList.appendChild(listItem);

}

// Alert Fonk.
function showAlert(type, message) {

    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.role = "alert";
    alert.textContent = message;
    firstCardBody.appendChild(alert);

    setTimeout(function () {
        alert.remove();
    }, 2000);

}

function getTodoFromStorage() {

    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;

}

function addTodoToStorage(newTodo){
    let todos = getTodoFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos",JSON.stringify(todos));
}
