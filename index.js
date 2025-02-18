function coloresTareas(){
    const letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}

function generarId(){
    let id = Math.floor(Math.random() * 100000);
    return id;
}

function addTarea(event){
    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let descripcion = document.getElementById("descripcion").value;

    let pendientes = document.getElementById("pendientes");

    let tarea = document.createElement("div");
    tarea.draggable = true;
    tarea.id = generarId();
    tarea.style.backgroundColor = coloresTareas();
    tarea.classList.add("taskPendientes", "w-50", "p-3", "rounded", "text-white");

    const nombreP = document.createElement('p');
    nombreP.textContent = `Nombre : ${nombre}`;
    const descripcionP = document.createElement('p');
    descripcionP.textContent = `Descripcion : ${descripcion}`;
    
    tarea.appendChild(nombreP);
    tarea.appendChild(descripcionP);
    pendientes.appendChild(tarea);

    document.getElementById("nombre").value = "";
    document.getElementById("descripcion").value = "";
}