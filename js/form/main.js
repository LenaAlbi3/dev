// 1. obtener datos del form
const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");

const KEY = "tasks"

let tasksLS = JSON.parse(localStorage.getItem(KEY)) ?? [];
// con or, ternario o if, evitamos el null y ponemos solo vacio para evitar conflictos con funciones 
// pero usaremos nullish coalesing, ya q sirve para validar si es undefined o null especificamente

if(tasksLS.length > 0){
    // tipo inferido de datos
    tasksLS.forEach(createLIElement);
}

// 2. agregar un evento al formulario, para saber cuando se envian esos datos

form.addEventListener("submit", (event) => {
    event.preventDefault(); // previene el comportamiento por defecto de los eventos 
                            // (ej, cuando envias submit la pag se recarga)
    const taskText = input.value.trim();
    if(taskText === "") return;
    createLIElement({text: taskText, completed: false});

    
    // 8. limpiar el input

    input.value = "";
    updateLocalStorage();
});


function updateLocalStorage(){
    // tareas -> lista -> []
    // {text, completed} -> tarea
    let tasks = [];
    const taskList = [...list.children]; // childnode trae espacios y saltos de linea
    taskList.forEach((li) => {          // se usa spray operator para convertir en array
        const text = li.firstChild.textContent;  // se puede usar firstnode tambien
        const completed = li.classList.contains("completed")
        tasks.push({ text, completed });
    });
    
    localStorage.setItem(KEY, JSON.stringify(tasks));
}

function createLIElement({text, completed}){
    // 3. crear un li para agregar a la lista (ul)

    const li = document.createElement("li");
    li.innerHTML = `<span>${text}</span>`;

    if(completed){
        li.classList.add("completed");
    }
    else{
        li.classList.remove("completed");
    }
    
    li.oncontextmenu = (e) => {
        e.preventDefault();
        li.classList.toggle("completed")
        updateLocalStorage();
    };

    // 4. crear el boton de eliminar

    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.textContent = "Eliminar";

    // 5. agregamos la funcionalidad al boton para que borre el li

    deleteBtn.onclick = () => {
        list.removeChild(li);
        updateLocalStorage();
    }

    // 6. agregar el boton eliminar al li

    li.appendChild(deleteBtn);

    // 7. agregar el li a la lista de tareas

    list.appendChild(li);

}