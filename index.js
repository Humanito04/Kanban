function coloresTareas() {
    const letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function generarId() {
    return Math.floor(Math.random() * 100000);
  }

  function addTarea(event) {
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
    descripcionP.textContent = `Descripción : ${descripcion}`;
    const botonBorrar = document.createElement('button');
      botonBorrar.classList.add("BtomBorrar");
      botonBorrar.innerHTML = '<span class="material-symbols-outlined">delete</span>';
      botonBorrar.onclick = () => eliminarTarea(botonBorrar);

    tarea.appendChild(nombreP);
    tarea.appendChild(descripcionP);
    tarea.appendChild(botonBorrar);
    pendientes.appendChild(tarea);

    document.getElementById("nombre").value = "";
    document.getElementById("descripcion").value = "";

    tarea.addEventListener("dragstart", e => {
      e.dataTransfer.setData('text/plain', tarea.id);
    });

    tarea.addEventListener("dragend", e => {
      e.preventDefault();
    });
  }

  function eliminarTarea(boton) {
    boton.parentElement.remove();
  }

  window.onload = () => {
    let form = document.getElementById('taskForm');
    form.addEventListener("submit", addTarea);

    ["pendientes", "en-proceso", "realizado"].forEach(id => {
      const columna = document.getElementById(id);
      columna.addEventListener("dragover", e => {
        e.preventDefault();
      });

      columna.addEventListener("drop", e => {
        const idTarea = e.dataTransfer.getData('text/plain');
        const tarea = document.getElementById(idTarea);
        columna.appendChild(tarea);
      });
    });
  }

