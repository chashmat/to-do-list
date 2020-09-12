let todos = [];
let input = document.querySelector('input');

window.onload = function () {
    if (JSON.parse(localStorage.getItem("todo-element")) != null) {
        todos = JSON.parse(localStorage.getItem("todo-element"));
        console.log(todos);
        display();
    }
}

function todo() {
    if (event.keyCode === 13 && input.value !== '') {
        todos.push(input.value);
        if (localStorage.getItem("todo-element") == null) {
            localStorage.setItem("todo-element", JSON.stringify(todos));
        }
        else {
            localStorage.setItem("todo-element", JSON.stringify(todos));
        }
        console.log(localStorage.getItem("todo-element"));
        input.value = '';
        display();
    }
}

function display() {
    document.querySelector('ul').innerHTML = ``;
    for (let i = 0; i < todos.length; i++) {
        document.querySelector('ul').innerHTML += `
        <li>
            <div class="tick-word">
                <span class="tick" onclick="check(${i})">
                    <img src="images/tick.png">
                </span>
                <span class="words">${todos[i]}</span>
            </div>
            <span class="bin" onclick="del(${i})">
                <img src="images/trash.png">
            </span>
        </li>`;
    }
}

function del(index) {
    todos.splice(index, 1);
    if (localStorage.getItem("todo-element") == null) {
        localStorage.setItem("todo-element", JSON.stringify(todos));
    }
    else {
        localStorage.setItem("todo-element", JSON.stringify(todos));
    }
    display();
}

function check(index) {
    if (todos[index].includes("<strike>")) {
        todos[index] = todos[index].replace("<strike>", "");
    }
    else {
        todos[index] = "<strike>" + todos[index] + "</strike>";
    }
    if (localStorage.getItem("todo-element") == null) {
        localStorage.setItem("todo-element", JSON.stringify(todos));
    }
    else {
        localStorage.setItem("todo-element", JSON.stringify(todos));
    }
    display();
}