let button = document.getElementById('add__task');
let taskList = document.getElementById('task__list');


function addTask(){
    let newTask = document.getElementById('new__task');
    let content = '';
    content += `
                <li class="single__task">
                    <span class="task__description shadow-sm p-1 mb-2 bg-white rounded">${newTask.value}</span>
                    <img class="delete__task pulse" src="./img/borrar.png" alt="borrar">
                </li>`;
    taskList.innerHTML += content;

     // boton eliminar
    for(let element in taskList.children){
        let eachButton = taskList.children[element].lastElementChild;
        // console.log(eachButton)
        eachButton.addEventListener('click', () => taskList.children[element].hidden = true);
    }
}


// añadir tareas a la lista
button.addEventListener('click',()=>{addTask()});

// filtrar resultados

function mostrarCoincidencias() {

    let coincidences = document.getElementById("coincidences");
    let coincidencesValue = coincidences.value.toUpperCase();
    // console.log(taskList.children)

    for (let child of taskList.children) {
        let span = child.getElementsByTagName("span")[0];
        // console.log(child)
        let spanContent = span.innerText;
        if (spanContent.toUpperCase().indexOf(coincidencesValue) != -1) {
            child.style.display = "";
        } else {
            child.style.display = "none";
        }
    }

}

let coincidences = document.getElementById('coincidences');

coincidences.addEventListener('keyup',()=> mostrarCoincidencias());