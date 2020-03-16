var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

// var toDos = [
//     'Fazer café',
//     'Estudar Javascript',
//     'Acessar a comunidade da Rocketseat'
// ];

var toDos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos(){
    listElement.innerHTML = '';

    for(todo of toDos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        var linkText = document.createTextNode(' Excluir');
        linkElement.setAttribute('href','#');

        var pos = toDos.indexOf(todo);

        linkElement.setAttribute('onclick', 'deleteTask('+pos+')');

        linkElement.appendChild(linkText);
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTask(){
    var todoText = inputElement.value;

    toDos.push(todoText);
    inputElement.value = '';
    renderTodos();
    saveToStorage();
}

buttonElement.onclick = addTask;

function deleteTask(pos){
    toDos.splice(pos,1);
    renderTodos();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('list_todos',JSON.stringify(toDos));
}