
//funcion para cargar en el storage
function test() {
    console.log("Ejecutando función test()");
    var nombre = document.getElementById("nombretxt").value;
    var apellido = document.getElementById("apellidotxt").value;


    const usuario = localStorage.getItem(nombre);
    
    console.log(usuario)
    if (usuario === null) {
        console.log("No existe Usuario")
    } else {

        document.getElementById("nombretxt2").value = nombre;
        document.getElementById("apellidotxt2").value = apellido;


        console.log(nombre)



    }
    /*Mostrar datos almacenados*/
}


//funcion para eliminar del storage
function test2() {
    console.log("Ejecutando función test()");
    // var nombre =  document.getElementById("nombretxt").value;
    // var apellido= document.getElementById("nombretxt").value;
    var nombre2 = document.getElementById("nombretxt").value;
    console.log(nombre2)


    const usuario = localStorage.getItem(nombre2);
    console.log(usuario)
    localStorage.removeItem(nombre2);
    /*Mostrar datos almacenados*/


}

// const usuario=localStorage.getItem(prompt("Ingrese nombre de usuario a buscar : "));
// if(usuario!=null){
//     alert("Bienvenido Usuario :"+usuario)
// }else{
//     alert("Usuario no existe")
// }