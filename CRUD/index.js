console.log("hola mundo")

let array = JSON.parse(localStorage.getItem("canasta")) ? JSON.parse(localStorage.getItem("canasta")) : []; 

function guardar(){
    let obterDatos = {
        "nombre": document.getElementById("nombre").value,
        "materia": document.getElementById("materia").value,
        "calificacion": document.getElementById("calificacion").value,
        "correo": document.getElementById("correo").value
    }

    array.push(obterDatos)

    localStorage.setItem("canasta", JSON.stringify(array))

    document.getElementById("nombre").value = ""
    document.getElementById("materia").value = ""
    document.getElementById("calificacion").value = ""
    document.getElementById("correo").value = ""

    render()
}

function render(){
    let verDatos = document.getElementById("mostrar")
    verDatos.innerHTML=""
    array.forEach(function(elemento, index){
        verDatos.innerHTML += `
             <div>
            <table>
                <thead>
                    <th>Nombre</th>
                    <th>Materia</th>
                    <th>Calificacion</th>
                    <th>Correo</th>
                </thead>
                <tbody>
                    <td>${elemento.nombre}</td>
                     <td>${elemento.materia}</td>
                      <td>${elemento.calificacion}</td>
                       <td>${elemento.correo}</td>
                        <td><button onclick="editar(${index})"> Editar</button></td>
                         <td><button>Borrar</button></td>
                </tbody>
            </table>
        </div>
        `
    })
}

function editar(index){
    for(i = 0; i < array.length; i++){
        if(i == index){
            document.getElementById("nombre").value = array[i].nombre
            document.getElementById("materia").value = array[i].materia
            document.getElementById("calificacion").value = array[i].calificacion
            document.getElementById("correo").value = array[i].correo
        }
    }
     
    let verDatos = document.getElementById("mostrar")
    verDatos.innerHTML = `
    <td><button onclick="reguardar(${i})">Guardar</button><td>
    <td><button>Salir</button><td>
    `
}

function reguardar(i){

     let obterDatos = {
        "nombre": document.getElementById("nombre").value,
        "materia": document.getElementById("materia").value,
        "calificacion": document.getElementById("calificacion").value,
        "correo": document.getElementById("correo").value
    }
    console.log("Borrado",array.splice(i, 1))
    array[i] = obterDatos
    console.log(array[i])
    
    localStorage.setItem("canasta", JSON.stringify(array))

    document.getElementById("nombre").value = ""
    document.getElementById("materia").value = ""
    document.getElementById("calificacion").value = ""
    document.getElementById("correo").value = ""

    render()

}