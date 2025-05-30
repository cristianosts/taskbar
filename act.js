const addBtn = document.querySelector('#add-btn')

//funcao que add tarefa
function addTask() {
    //titulo da tarefa
    const taskTitle = document.querySelector('#task-title').value

    if(taskTitle) {
        //clonar template
        const template = document.querySelector('.template')
        const newTask = template.cloneNode(true)
        //adicionar titulo
        newTask.querySelector('.task-title').textContent = taskTitle
        //remover as classes desnecessárias
        newTask.classList.remove('template')
        newTask.classList.remove('hide')
        //adicionar tarefa na lista
        const list = document.querySelector('#task-list')
        list.appendChild(newTask)
        //adicionar evento de remover
        const removeBtn = newTask.querySelector('.remove-btn').addEventListener("click", function() {
            removeTask(this)
        })
        //adicionar evento de completar tarefa 
        const doneBtn = newTask.querySelector('.done-btn').addEventListener('click', function() {
            completeTask(this)
        })
        //limpar texto
        document.querySelector('#task-title').value = ''
    }
}

//função de completar a tarefa 
    function completeTask(task) {
        const tasktoComplete = task.parentNode
        tasktoComplete.classList.toggle('done')
    }

//função de remover tarefa

    function removeTask(task) {
        task.parentNode.remove(true)
    }

//evento de add tarefa
addBtn.addEventListener("click", function(e) {
   e.preventDefault()
   addTask()
})