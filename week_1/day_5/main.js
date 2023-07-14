class Task{
    constructor(description){
        this.description = description;
    }
}

class UI{
    constructor(){
        this.task = document.getElementById('task');
        this.addButton = document.getElementById('add-button');

        this.tableBody = document.getElementById('table-body');

        this.addButton.addEventListener('click', () => this.onAdd());

        this.tasks = [];

        this.renderTasks();
    }

    onAdd(){
        if(this.task.value == ''){
            return;
        }
        console.log("made it kinda");

        const task = new Task(this.task.value);
        this.tasks.push(task);
        this.renderTasks();

        this.task.value = '';
    }

    renderTasks(){  
        this.tableBody.innerHTML = '';

        for(let i = 0; i< this.tasks.length; i++){
            const task = this.tasks[i];

            const tr = this.createTaskTableRow(task);
            this.tableBody.appendChild(tr);
        }
    }

    createTaskTableRow(task){
        const tr = document.createElement('tr');

        tr.setAttribute('class', 'text-center');

        const tdDescription = document.createElement('td');
        const tdComplete = document.createElement('td');
        const tdAction = document.createElement('td');

        tdDescription.innerHTML = task.description;

        const completeButton = this.createCompleteButton();
        tdComplete.appendChild(completeButton);

        const actionButton = this.createActionButton();
        tdAction.appendChild(actionButton);

        tr.appendChild(tdDescription);
        tr.appendChild(tdComplete);
        tr.appendChild(tdAction);

        return tr;
    }

    createCompleteButton(){
        const completeButton = document.createElement('input');

        completeButton.setAttribute('class', 'form-check-input mt-0');
        completeButton.setAttribute('type', 'radio');
        completeButton.innerHTML = '';
        completeButton.addEventListener('click', () => {
            console.log('Complete was clicked');
        });

        return completeButton;
    }

    createActionButton(){
        const trashCan = document.createElement('button');

        trashCan.setAttribute('class', 'btn-close');
        trashCan.innerHTML = '';
        trashCan.addEventListener('click', () => {
            console.log('Trash can was clicked');
        });

        return trashCan;
    }

    
}

const ui = new UI();