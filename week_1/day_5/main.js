class Task{
    constructor(description){
        this.description = description;
    }

    static fromJSON(json){
        return new Task(json.description);
    }
}

class UI{
    constructor(){
        this.task = document.getElementById('task');
        this.addButton = document.getElementById('add-button');

        this.tableBody = document.getElementById('table-body');

        this.addButton.addEventListener('click', () => this.onAdd());

        this.tasks = [];

        this.loadTasksFromLocalStorage();
        this.renderTasks();
    }

    onAdd(){
        if(this.task.value == ''){
            return;
        }
        console.log("made it kinda");

        const task = new Task(this.task.value);
        this.tasks.push(task);

        this.saveTasksToLocalStorage();
        this.renderTasks();


        this.task.value = '';
    }

    renderTasks(){  
        this.tableBody.innerHTML = '';

        for(let i = 0; i < this.tasks.length; i++){
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

        const completeButton = this.createCompleteButton(task);
        tdComplete.appendChild(completeButton);

        const actionButton = this.createActionButton(task);
        tdAction.appendChild(actionButton);

        tr.appendChild(tdDescription);
        tr.appendChild(tdComplete);
        tr.appendChild(tdAction);

        return tr;
    }

    createCompleteButton(task){
        const completeButton = document.createElement('input');

        completeButton.setAttribute('class', 'form-check-input mt-0');
        completeButton.setAttribute('type', 'radio');
        completeButton.innerHTML = '';
        completeButton.addEventListener('click', () => {
            this.onCompleteButtonClicked(task);
            console.log('Complete was clicked');
        });

        return completeButton;
    }

    onCompleteButtonClicked(){
        //maybe don't need
    }


    createActionButton(task){
        const trashCan = document.createElement('button');

        trashCan.setAttribute('class', 'btn-close');
        trashCan.innerHTML = '';
        trashCan.addEventListener('click', () => {
            this.onDeleteButtonClicked(task);
            console.log('Trash can was clicked');
        });

        return trashCan;
    }

    onDeleteButtonClicked(task){
        this.tasks = this.tasks.filter((x) => {
            return task.description != x.description;
        });
        this.saveTasksToLocalStorage();
        this.renderTasks();
    }

    saveTasksToLocalStorage(){
        const json = JSON.stringify(this.tasks);
        localStorage.setItem('tasks', json);
    }

    loadTasksFromLocalStorage(){
        const json = localStorage.getItem('tasks');
        if(json){
            const taskArr = JSON.parse(json);
            const newTasks =[];
            for(let i = 0; i< taskArr.length; i++){
                console.log(taskArr[i]);
                newTasks.push(Task.fromJSON(taskArr[i]));
            }
            this.tasks = newTasks;
        }
    }
}

const ui = new UI();