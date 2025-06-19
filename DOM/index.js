console.log("hola mundo")

let valorInicial = 0; 

// renderizado
function actualizarResultado(){
    let observarResultado = document.getElementById("resultadoClicks");
    console.log("actualizar")
    observarResultado.innerHTML = `${valorInicial}`
}

function clickCounter(){
    valorInicial++;
    console.log(valorInicial)
 actualizarResultado(); 
}

function resetear(){
    valorInicial = 0; 
    console.log(valorInicial)
    actualizarResultado(); 
}

document.getElementById("incrementar").addEventListener('click', clickCounter);
document.getElementById("setear").addEventListener('click', resetear); 



//------------ Onchange

// document.addEventListener("DOMContentLoaded", function(){
//     let miInput = document.getElementById("Input")
//     let mensajeInput = document.getElementById("mensaje")

//     miInput.onchange = function(){
//         mensajeInput.innerHTML = `Tu nombre es: ${miInput.value}`; 
//     }
// })

function onCambio(){
    let miInput = document.getElementById("Input")
    let mensajeInput = document.getElementById("mensaje")

    miInput.onchange = function(){
        mensajeInput.innerHTML = `Tu nombre es: ${miInput.value}`; 
    }
}

document.addEventListener("DOMContentLoaded", onCambio); 