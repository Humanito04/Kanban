
function coloresTareas(){
    let colores = ["red","green","blue","brown","yellow"];
    let id = 0;

        let task = Array.from(document.getElementsByClassName("task"));
    
        task.forEach(element =>{
            let num = Math.floor(Math.random() * colores.length);
            element.style.backgroundColor = colores[num];
            id++;
            element.id = id;
        });
}

function generarId(){
    let id = Math.floor(Math.random() * 100000);
    return id;
}

function addTarea(event){

    event.preventDefautl();

    let nombre = document.getElementById("nombre").value;
    let descripcion = document.getElementById("descripcion").value;

    let pendientes = document.getElementById("pendientes");

    let tarea = document.createElement("div");
    tarea.draggable = true;
    tarea.id = generarId();

    tarea.style.backgroundColor= coloresTareas();

    const nombreP = document.createElement('p').textContent = `Nombre : ${nombre}`;
    const descripcionP = document.createElement('p').textContent = `Descripcion : ${descripcion}`;
    
    tarea.appendChild(nombreP);
    tarea.appendChild(descripcionP);
    pendientes.appendChild(tarea);


    
}
