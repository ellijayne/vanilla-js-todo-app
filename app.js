loadEvents();
// load every event in the page
function loadEvents() {
    document.querySelector('form').addEventListener('submit', submit);

    document.getElementById('clear').addEventListener('click', clearList);

    document.querySelector('ul').addEventListener('click', deleteOrTick);

    document.addEventListener('change', hideList);
}

// deleteTick
function deleteOrTick(e) {
    if (e.target.className == 'delete')
        deleteTask(e);
    else {
        tickTask(e);
    }
}

// delete task
function deleteTask(e) {
    let remove = e.target.parentNode;
    let parentNode = remove.parentNode;
    parentNode.removeChild(remove);
}

// tick a task - This function starts with const task = e.target.nextSibling; this line of code gets the text that is within the li element, e.target is the tick button, so e.target.nextSibling is the actual task. Then it checks if it was checked if it was it changes the text - decoration to line - through and change the text color to #ff0000.If it was unchecked it changes the text - decoration to none and changes back the text color to #2f44f.

function hideList() {
    let listItems = document.querySelectorAll('li');
    console.log('listening')

    if (listItems.length == 0) {
        document.querySelector('.tasksBoard').style.display = 'none';
    } else {
        document.querySelector('.tasksBoard').style.display = 'block';
    }
}

function tickTask(e) {
    const task = e.target.nextSibling;
    if (e.target.checked) {
        task.style.textDecoration = "line-through";
        task.style.color = "#ff0000";
    } else {
        task.style.textDecoration = "none";
        task.style.color = "#2f4f4f";
    }
}

//clear list if clicked.
function clearList(e) {
    // setting the ul innerHML to an empty string
    let ul = document.querySelector('ul').innerHTML = '';
    document.querySelector('.tasksBoard').style.display = 'none';
}
// subit data function
function submit(e) {
    e.preventDefault();
    let input = document.querySelector('input');
    if (input.value != '')
        addTask(input.value);
    input.value = '';
}

// add tasks
function addTask(task) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.innerHTML = `<span class="delete">×</span><input type="checkbox"><label>${task}</label>`;
    ul.appendChild(li);

    document.querySelector('.tasksBoard').style.display = 'block';
    
}