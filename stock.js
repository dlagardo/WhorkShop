var juan ='';
function traerDatos() {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', './db/catalago.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let stockProductos2 = JSON.parse(this.responseText);
            // mostrarProductos(stockProductos2)
            console.log("stockproductos2",stockProductos2)
            juan = Object.assign({},stockProductos2)

            // dd = stockProductos2;
    
            console.log("juan",juan)
        }
    }
}

// function readTextFile(file, callback) {
//     var rawFile = new XMLHttpRequest();
//     rawFile.overrideMimeType("application/json");
//     rawFile.open("GET", file, true);
//     rawFile.onreadystatechange = function() {
//         if (rawFile.readyState === 4 && rawFile.status == "200") {
//             callback(rawFile.responseText);
//         }
//     }
//     rawFile.send(null);
// }




// let stockProductos = [
//     {id: 1, nombre: "Buzo 1", tipo: "buzo", desc: "Un buzo que re va con vos", precio: 1200, talle: "L", img: './img/buzo.jpg'},
//     {id: 2, nombre: "Buzo 2", tipo: "buzo", desc: "Un buzo que re va con vos", precio: 1100, talle: "L", img: './img/buzo.jpg'},
//     {id: 3, nombre: "Buzo 3", tipo: "buzo", desc: "Un buzo que re va con vos", precio: 1200, talle: "M", img: './img/buzo.jpg'},
//     {id: 4, nombre: "Buzo 4", tipo: "buzo", desc: "Un buzo que re va con vos", precio: 1400, talle: "M", img: './img/buzo.jpg'},
// ]