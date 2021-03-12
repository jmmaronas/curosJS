
var producto = document.getElementsByClassName("descripcion");
var precio = document.getElementsByClassName("precio");

console.log(producto[0].innerText);

function aplicarDescuento(){
    for(i=0; i < precio.length; i++){
        precio[i].innerText *= 0.9;
        console.log(precio.innerText); 
    }
}

var productoDestacado = 0;
function agregarProducto(){
    var textProd = document.createElement("p");
    textProd.innerText = "Nombre:";
    document.getElementById("agregar").appendChild(textProd);
    var producto = document.createElement("input");
    document.getElementById("agregar").appendChild(producto);

    var precioProd = document.createElement("p");
    precioProd.innerText = "Precio:";
    document.getElementById("agregar").appendChild(precioProd);
    var precio = document.createElement("input");
    document.getElementById("agregar").appendChild(precio);
}
var array=[];
var nuevoPrdocto;
for(i=0; i < precio.length; i++){
    array.push(nuevoPrdocto = new Producto("0", producto[i],precio[i].innerText));
}
console.log(nuevoPrdocto);
console.log(array);