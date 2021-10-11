function traerDatos() {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', './db/catalago.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let stockProductos2 = JSON.parse(this.responseText);
            for(let item of stockProductos2) {
                // console.log(item)
            } 
            
let stockProductos3 = [
    {id: stockProductos2[0].id, nombre: stockProductos2[0].nombre, tipo:stockProductos2[0].tipo, desc:stockProductos2[0].tipo, precio:stockProductos2[0].tipo, talle:stockProductos2[0].talle, img: stockProductos2[0].img},

]
console.log(stockProductos3);
            // const ricci=[];
            // ricci.push(stockProductos2);      
            // console.log(ricci)
            // console.log(stockProductos2[0]);
            // console.log(stockProductos);
            // return stockProductos2;
    return stockProductos3
        }
    }
   
}

let stockProductos = [
    {id: 1, nombre: "Buzo 1", tipo: "buzo", desc: "Un buzo que re va con vos", precio: 1200, talle: "L", img: './img/buzo.jpg'},
    {id: 2, nombre: "Buzo 2", tipo: "buzo", desc: "Un buzo que re va con vos", precio: 1100, talle: "L", img: './img/buzo.jpg'},
    {id: 3, nombre: "Buzo 3", tipo: "buzo", desc: "Un buzo que re va con vos", precio: 1200, talle: "M", img: './img/buzo.jpg'},
    {id: 4, nombre: "Buzo 4", tipo: "buzo", desc: "Un buzo que re va con vos", precio: 1400, talle: "M", img: './img/buzo.jpg'},
]