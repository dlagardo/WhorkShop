class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
}
let x = 0;
const personas = [];
let persona1 = '';


// let text = document.createTextNode('Bienvenido  ' + persona1.nombre);
// document.getElementById("bienvenido").appendChild(text);



//localStorage.setItem(parseInt(prompt("Ingrese su Dni")),prompt("Ingrese su Nombre"));


function test() {
    console.log("Ejecutando función test()");
    var nombre = document.getElementById("nombretxt").value;
    var apellido = document.getElementById("apellidotxt").value;


    localStorage.setItem(nombre, apellido);
    /*Mostrar datos almacenados*/
    document.getElementById("nombretxt").innerHTML = nombre;
    document.getElementById("apellidotxt").innerHTML = apellido;

}
// const usuario =localStorage.getItem(parseInt(prompt("Ingrese su Dni")));
// console.log(usuario)