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
            <table class="table">
                <thead>
                    <th scope="col>Nombre</th>
                    <th scope="col>Materia</th>
                    <th scope="col>Calificacion</th>
                    <th scope="col>Correo</th>
                </thead>
                <tbody>
                    <td scope="row>${elemento.nombre}</td>
                     <td scope="row>${elemento.materia}</td>ls
                      <td scope="row>${elemento.calificacion}</td>
                       <td scope="row>${elemento.correo}</td>
                        <td scope="row"><button class="btn-warning"onclick="editar(${index})"> Editar</button></td>
                         <td scope="row"><button onclick="borrar(${index})">Borrar</button></td>
                </tbody>
            </table>
        </div>
        `
    })

    document.getElementById("nombre").value = ""
    document.getElementById("materia").value = ""
    document.getElementById("calificacion").value = ""
    document.getElementById("correo").value = ""
}

function borrar(i){
    console.log(array.splice(i, 1))
    localStorage.setItem("canasta", JSON.stringify(array))
    render()
}

function editar(index){
    for(i = 0; i < array.length; i++){
        if(i == index){
            document.getElementById("nombre").value = array[i].nombre
            document.getElementById("materia").value = array[i].materia
            document.getElementById("calificacion").value = array[i].calificacion
            document.getElementById("correo").value = array[i].correo

         let verDatos = document.getElementById("mostrar")
             verDatos.innerHTML = `
        <td><button onclick="reguardar(${i})">Guardar</button><td>
        <td><button onclick="salir(this)">Salir</button><td>
     `
        }

    }
     
 
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

function salir(e){
console.log(e)
// e.target.reload()
// const parent = e.currentTarget.parentNode;
// parent.remove()
// e.parentElement.parentElement.remove()
render()
}

