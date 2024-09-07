


let $ingresoUsuario = document.querySelector("#ingreso-usuario");
let $agregarDatos = document.querySelector("#agregar");
let $tareaIngresada = document.querySelector("#tarea-ingresada");

// Función para obtener las tareas desde localStorage
function cargarTareas() {
    const tareas = JSON.parse(localStorage.getItem('tareas')) || [];
    tareas.forEach(tarea => {
        crearTareaElement(tarea);
    });
}

// Función para crear un elemento de tarea y agregarlo al DOM
function crearTareaElement(tareaTexto) {
    let tarea = document.createElement("li");
    tarea.textContent = tareaTexto;
    tarea.draggable = true; // Hacer el elemento arrastrable

    // Crear el botón para borrar
    let botonBorrar = document.createElement("button");
    botonBorrar.innerText = "X";
    botonBorrar.classList.add("boton-borrar-js");
    botonBorrar.setAttribute('aria-label', 'Eliminar la tarea');
    botonBorrar.addEventListener("click", () => {
        eliminarTarea(tarea, tareaTexto);
    });
    tarea.appendChild(botonBorrar);
    $tareaIngresada.appendChild(tarea);
}

// Función para agregar una tarea
function agregarTarea() {
    if ($ingresoUsuario.value.trim() === "") {
        alert("Debes agregar una tarea para continuar");
    } else {
        const tareaTexto = $ingresoUsuario.value.trim();
        crearTareaElement(tareaTexto);

        // Guardar la tarea en localStorage
        const tareas = JSON.parse(localStorage.getItem('tareas')) || [];
        tareas.push(tareaTexto);
        localStorage.setItem('tareas', JSON.stringify(tareas));

        // Limpieza de input principal
        $ingresoUsuario.value = "";
    }
}

// Función para eliminar una tarea
function eliminarTarea(tareaElement, tareaTexto) {

    // Eliminar la tarea del DOM
    tareaElement.remove();

    // Eliminar la tarea de localStorage
    let tareas = JSON.parse(localStorage.getItem('tareas')) || [];
    tareas = tareas.filter(tarea => tarea !== tareaTexto);
    localStorage.setItem('tareas', JSON.stringify(tareas));
}

// Agregar tarea al hacer clic en el botón
$agregarDatos.addEventListener("click", agregarTarea);

// Agregar tarea al presionar Enter
$ingresoUsuario.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault(); 
        agregarTarea()
    }
});

// Eventos de arrastrar y soltar
let draggedItem = null;

$tareaIngresada.addEventListener('dragstart', (event) => {
    draggedItem = event.target;
    if (draggedItem.tagName === 'LI') {
        draggedItem.classList.add('dragging');
    }
});

$tareaIngresada.addEventListener('dragend', (event) => {
    draggedItem.classList.remove('dragging');
    draggedItem = null;
});

$tareaIngresada.addEventListener('dragover', (event) => {
    event.preventDefault(); // Necesario para permitir el drop
    const afterElement = getDragAfterElement($tareaIngresada, event.clientY);
    const dragging = document.querySelector('.dragging');
    if (afterElement == null) {
        $tareaIngresada.appendChild(dragging);
    } else {
        $tareaIngresada.insertBefore(dragging, afterElement);
    }
});

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('li:not(.dragging)')];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

// Cargar las tareas cuando la página se carga
window.addEventListener('DOMContentLoaded', cargarTareas);
let fechaJS = new Date();

// Extraer el día, mes y año
let dia = fechaJS.getDate();
let mes = fechaJS.getMonth(); 
let año = fechaJS.getFullYear().toString().slice(2); 

// Crear un array con los nombres de los meses en español
const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

// Formatear la fecha como "hoy es 7 de septiembre 24"
let fechaFormateada = `Hoy es ${dia} de ${meses[mes]} / ${año}`;

// Mostrar la fecha en un elemento h2
let crearH2 = document.createElement("h2");
let divFecha = document.querySelector("#fecha");
crearH2.textContent = fechaFormateada;
divFecha.appendChild(crearH2);

