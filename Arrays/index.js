 // 0, 1, 2,3, 4 = 5
let canasta = ["Manzana", "Platano", 1, 3, true]

console.log(canasta.length)

let primero = canasta[0]

console.log(primero)

let ultimo = canasta[4]
console.log(ultimo)

ultimo = canasta.length - 1

console.log(ultimo)


console.log( `| elemento | indice`)
canasta.forEach(function(elemento, indice){
                console.log("|" + elemento +"|" + indice)
                })


let agregar = canasta.push("Naraja")
console.log(canasta)

let ultimo2 = canasta.pop()
console.log(canasta)

let reversa = canasta.reverse()
console.log(canasta)

let estanteria = []

function anadirlibros(autor,titulo,anio){
  estanteria.push({autor, titulo, anio})
}
anadirlibros("Stephen King", "It", "1980")
anadirlibros("Stephen King", "Cementerio de mascotas", "1976")
anadirlibros("Maquiavelo", "El principe", "1856")
console.log(estanteria)