//konstanty
const button = document.getElementById('addTask');
const input = document.getElementById('taskInput');
const deadline = document.getElementById('taskTime');
const list = document.getElementById('taskList');

//event listener
button.addEventListener('click', () => {
    console.log("task pridan!");
    const task = input.value;
    const taskTime = deadline.value;
    const formattedDate = new Date(taskTime).toLocaleString('cs-CZ', {weekday: 'long', month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric'});
    if (task && taskTime) {
        const listItem = document.createElement('li');
        listItem.setAttribute('data-deadline', taskTime);
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        listItem.innerText = task + ' - ' + formattedDate;
        listItem.appendChild(checkbox);
        list.appendChild(listItem);
        input.value = '';
        deadline.value = '';
    }
    else {
        alert('Zadej prosím úkol a čas!');
    }
});

//interval pro kontrolu ukolu
setInterval(() => {
    const tasks = document.querySelectorAll('li');
    const current = new Date();
    
    tasks.forEach(task => {
        const checkbox = task.querySelector('input');
        const deadline = task.getAttribute('data-deadline');
        const deadlineDate = new Date(deadline);
        console.log(`Current: ${current}, Deadline: ${deadlineDate}`);
        
        if (checkbox.checked) {
            task.style.backgroundColor = 'lightgreen'
        } else {
            task.style.backgroundColor = 'beige';
            task.style.textDecoration = 'none'; 
        }
        if (deadline && deadlineDate <= current) {
            task.style.backgroundColor = 'red'; 
            checkbox.disabled = true; 
        }
    });
}, 1000);