
const addForm = document.getElementById('todo_form');
console.log(addForm)

const todoList = document.getElementById('todo_list');
console.log(todoList)


addForm.addEventListener('submit', function (e) {
    e.preventDefault(); 


    try{
    const taskValue = document.querySelector('input[type="text"]').value.trim();
    const dueDate = document.getElementById('dueDate').value;

        if (taskValue === "") {
            alert("Please enter a valid task!");
            return; 
        }
    
  
   
    
    addTaskToList(taskValue, dueDate);

    
    document.querySelector('input[type="text"]').value = '';
    document.getElementById('dueDate').value = '';
    }

    catch(error){
        console.error(error)
    }
});


function addTaskToList(task, dueDate) {

    const li = document.createElement('li');
    li.classList.add('task');

    
    const checkbox = document.createElement('input');
    try{
        checkbox.type = 'checkbox';
        li.prepend(checkbox);
    }
    catch(error){
        console.error(error)
    }
   


    checkbox.addEventListener('change', function() {
        try{
            if (checkbox.checked) {
                li.style.textDecoration = 'line-through';
            } else {
                li.style.textDecoration = 'none';
            }
        }
        catch(error){
            console.error(error)
        }
    });
       
    
    const taskText = document.createElement('span');
    try{
    taskText.classList.add('task-text');
    taskText.textContent = task;
    li.appendChild(taskText);
    }
    catch(error){
        console.error(error)
    }
    

     
    if (dueDate) {
        try{
            const dueSpan = document.createElement('span');
            dueSpan.classList.add('due-date');
            dueSpan.textContent = `Due: ${dueDate}`;
            li.appendChild(dueSpan);
        }
        catch(error){
            console.error(error)
        }
       
    }


    const editBtn = document.createElement('button');
    try{
        editBtn.textContent = 'Edit';
        li.appendChild(editBtn);
    }
    catch(error){
        console.error(error)
    }
    

    
    editBtn.addEventListener('click', function() {
        try{
            const newTask = prompt("Edit your task:", taskText.textContent);
        if (newTask !== null && newTask.trim() !== "") {
            taskText.textContent = newTask.trim();
        }
        }
        catch(error){
            console.error(error)
        }
        
    });

    
    const deleteBtn = document.createElement('span');
    try{
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete');
        li.appendChild(deleteBtn);
    }
    catch(error){
        console.error(error)
    }
    
    
    deleteBtn.addEventListener('click', function() {
        try{
            todoList.removeChild(li);
        }
        catch(error){
            console.error(error)
        }
    });

    
    todoList.appendChild(li);
}


const clearBtn = document.getElementById('clear-Btn');
try{
    clearBtn.addEventListener('click', function() {
        todoList.innerHTML = '';
        alert('all task will be cleared');
    })
}

catch(error){
    console.error(error)
}


