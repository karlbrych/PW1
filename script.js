//konstanty
const button = document.getElementById('addTask');
const input = document.getElementById('taskInput');
const deadline = document.getElementById('taskTime');
const list = document.getElementById('taskList');

button.addEventListener('click', () => {
    console.log("task pridan!");
    const task = input.value;
    const taskTime = deadline.value;
    
    if (task && taskTime) {
        const listItem = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        listItem.innerText = task + ' - ' + taskTime;
        listItem.appendChild(checkbox);
        list.appendChild(listItem);
        input.value = '';
        deadline.value = '';
    }
    else {
        alert('Zadej prosím úkol a čas!');
    }
});