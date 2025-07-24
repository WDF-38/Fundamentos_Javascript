
let datos = JSON.parse(localStorage.getItem("canasta")) ? JSON.parse(localStorage.getItem("canasta")) : []

function guardar(){
      let name = document.getElementById("nombre").value 
      let commit = document.getElementById("comentario").value 
      let arrayDatos = {
          "nombre": name, 
          "comentario": commit
      }
    datos.push(arrayDatos)
    localStorage.setItem("canasta", JSON.stringify(datos))
    render()
}


function render(){
    console.log("render")
    // console.log(localStorage.getItem('canasta'))
    let lista = document.getElementById('lista')
    //let datos = JSON.parse(localStorage.getItem('comentarios')) ? JSON.parse(localStorage.getItem('comentarios')) : []
    lista.innerHTML = `
    <thead>
    <th>Nombre</th>
    <th>Correo</th>
    <th>Comentario</th>
    <thead>
    `
    datos.forEach((element,index) => {
        console.log("indice: ", index)
        lista.innerHTML += `
        <td> ${element.nombre}</td>
        <td> ${element.comentario} </td>
        <td><button onclick="editar(${index})">Editar </button></td>
        <td><button onclick="borrar(${index})">Borrar</button></td>
        `
    });

   }

 function editar(){
      let lista = document.getElementById("lista")
      lista.innerHTML = `
       <thead>
        <th>Nombre</th>
        <th>Comentario</th>
        </thead>
        <tbody>
          <td><input type="text" placeholder="nombre" id="nombreEditar">
          <td><input type="text" placeholder="Comentario" id="comentarioEditar"></td>
          <td><button onclick="reguardar()">Guardar</button></td>
          <td><button onclick="salir()">Salir</button></td>
          </tbody>
      `
  }

 function borrar(position){
     console.log(datos.splice(position, 1))
     localStorage.setItem("canasta", JSON.stringify(datos))
     render()
 }

 function reguardar(element){
     let nombreEdit = document.getElementById("nombreEditar").value
     let commitEdit = document.getElementById("comentarioEditar").value
     let valueInput = {
         "nombre": nombreEdit, 
         "comentario": commitEdit
     }
     console.log("Valor de datos nuevos:", valueInput)
     datos.push(valueInput)
     console.log("Envio de datos al array:", datos)
     console.log("Datos eliminados", datos.splice(element,1))
     localStorage.setItem("canasta", JSON.stringify(datos))
     render()
 }


//  function renderizado(){
//     console.log("render")
//     let lista = document.getElementById('lista')
   
//     datos.forEach((element,index) => {
//         console.log("indice: ", index)
//         lista.innerHTML += `
//         <td> ${element.nombreEdit}</td>
//         <td> ${element.commitEdit} </td>
//         `
//     });

//    }

 function salir(){
     render()
 }



