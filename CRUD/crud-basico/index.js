
let datos = JSON.parse(localStorage.getItem("canasta")) ? JSON.parse(localStorage.getItem("canasta")) : []
let prueba = []

  function guardar(){
      let name = document.getElementById("nombre").value 
      let commit = document.getElementById("comentario").value 
      let arrayDatos = {
          "nombre": name, 
          "comentario": commit
      }
      console.log("array", arrayDatos)
      prueba.push(arrayDatos)
     localStorage.setItem("canasta", JSON.stringify(datos))

      render()

      document.getElementById("nombre")= ""
      document.getElementById("comentario")=""
  }

//  function guardar(){
//      let name = document.getElementById('nombre').value 
//      let commit = document.getElementById('comentario').value
//      let inputValue = ({
//          "nombre": name,
//          "comentario":commit
//      })
//      datos.push(inputValue)
//      localStorage.setItem('canasta', JSON.stringify(datos))
//   render()
//  }

function render(){
    console.log(localStorage.getItem('canasta'))
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
        console.log(index)
        lista.innerHTML += `
        <td> ${element.nombre}</td>
        <td> ${element.comentario} </td>
        <td><button onclick="editar(${index})" class="btn btn-warning">Editar </button></td>
        <td><button onclick="borrar(${index})" class="btn btn-danger">Borrar</button></td>
        `
    });

}


//  function renderizado(){
//       let lista = document.getElementById("lista")
//      lista.innerHTML = `
//      <thead>
//      <th>Nombre</th>
//      <th>Comentario</th>
//      </thead>
//      `
  
//         datos.forEach((element, index) => {
//         lista.innerHTML += `
//           <tbody>
//           <td>${element.name}</td>
//           <td>${element.commit}</td>
//           <td><button onclick="editar(${index})")>Editar</button></td>
//           <td><button onclick="editar(${index})">Borrar</button></td>
//           </tbody>
//           `
//      });
//  }


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
         <td><button onclick="reguardar()">Editar</button></td>
         <td><button onclick="salir()">Borrar</button></td>
         </tbody>
      
     `
 }

