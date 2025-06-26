console.log("Hola mundo")

//---Es un if simplificado -----> la condición ? true : false; 
let datos = JSON.parse(localStorage.getItem("inputValores")) ? JSON.parse(localStorage.getItem("inputValores")) : []; 

function guardarDatos(){

let nombre = document.getElementById("nombre").value
let pass = document.getElementById("password").value

let inputValues = {
    "nombre": nombre,
    "password": pass 
}

datos.push(inputValues)

localStorage.setItem("inputValores", JSON.stringify(datos))


// Para borrar los datos una vez enviados
document.getElementById("nombre").value = "";
document.getElementById("password").value = ""; 
recuperardatos()
}

function recuperardatos(){
    let lista = document.getElementById("lista")

    lista.innerHTML += `
    <table>
    <thead>
    <th>Nombre:</th>
    <th>Password:</th>
    </thead>
    </table>
    `

    datos.forEach((element, index) => {
        lista.innerHTML = `
        <td>${element.nombre}<td>
        <td>${element.password}<td>
        <td><button onclick="borrar(${index})" >Borrar</button></td>
        `
    });

}

function borrar(position){
    datos.splice(position, 1)
    localStorage.setItem("inputValores", JSON.stringify(datos))
    recuperardatos()
}