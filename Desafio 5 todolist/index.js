
const listadetareas = [];
let id = 1;
let contador=0;
let realizado=0;




const inputTarea = document.querySelector(".nuevatarea")

const botonAgregar = document.querySelector(".agregartarea")

const contenedor = document.querySelector(".contenedorlista")

const ContadorTareas = document.querySelector(".totaltareas");

const tareasRealizadas = document.querySelector(".realizadas");
botonAgregar.addEventListener("click", agregarTarea)

function agregarTarea() {
  
    const descripcion = inputTarea.value;
    
    const tarea = { id: id, descripcion: descripcion, terminado: false };
  
    listadetareas.push(tarea);
   
    id++;
    
    inputTarea.value = "";
    
    mostrarListaHTML();
    contador++;
    totalTareas();
}


function totalTareas(){
    console.log(contador);
    ContadorTareas.innerHTML = `Total: ${contador}`;

}

function totalRealizadas (){
tareasRealizadas.innerHTML = `Realizadas: ${realizado}`;
}

function mostrarListaHTML() {

    contenedor.innerHTML = "";
   
    listadetareas.forEach((tarea) => {
        
        contenedor.innerHTML += `
        <div>
            <p>${tarea.id}</p>
            <h3>${tarea.descripcion}</h3>
            <input onclick="chequearTarea(${tarea.id})" type="checkbox" ${tarea.terminado === true ? "checked" : ""}>
            <button onclick="borrarTarea(${tarea.id})">X</button>
        </div>`
    })
   
}

function borrarTarea(id) {
    const index = listadetareas.findIndex(tarea => tarea.id === id);

    if (index !== -1) {
        
        listadetareas.splice(index, 1);
        
        mostrarListaHTML();
    }
    contador--;
    totalTareas();
}
function chequearTarea(id) {
    
    const index = listadetareas.findIndex(tarea => tarea.id === id);
    
    listadetareas[index].terminado = !listadetareas[index].terminado;
    if(listadetareas[index].terminado === true)
    {
    realizado++;}
    else{
    realizado--
    }
    totalRealizadas();
}






