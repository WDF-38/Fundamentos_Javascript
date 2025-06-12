console.log("Hola mundo")

class Rectangulo{
constructor(alto, ancho){
    this.alto = alto; 
    this.ancho = ancho; 
}

calcularArea(){
    return this.alto * this.ancho;
}
}

const rec1 = new Rectangulo(20,15);
console.log("Esto es el area del rectangulo:",rec1.calcularArea()); 

// Principio de Herencia 

// Clase padre
class Animal {
    constructor(nombre){
        this.nombre = nombre;
    }

    correr(){
        console.log(this.nombre + "sale corriendo")
    }
}

class Perro extends Animal{
    constructor(nombre, raza){
        // Va invocar los elementos o constructores o funciones que tenemos en la clase padre
        super(nombre); 
        this.raza = raza; 
    }

    ladra(){
        super.correr(); 
        console.log(`${this.raza}, le ledra`);
    }
}

const miGato = new Perro("Tito", "Pastor Aleman"); 
miGato.ladra(); 

//------

class calculadora{
  constructor(n1, n2){
    this.n1 = n1;
    this.n2 = n2; 
  }
  
  suma(){
    return this.n1 + this.n2
  }
  
  resta(){
    return this.n1 - this.n2
  }
}

const sumaresultado = new calculadora(16,24);
const restaresultado = new calculadora(84,62)
console.log(sumaresultado.suma()); 
console.log(restaresultado.resta())