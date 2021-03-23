function cargarArt(p, s){
    var container = document.getElementById("artCont");
    
    for(i=0; i< p.length;i++){
    
    container.innerHTML += 
    `<div class="artContainer col-6 col-md-4 col-lg-3">
    <div class="artImage">
        <img src="${p[i].img}" alt="vermuda">
    </div>
    <div class="artComent">
        <p class="descripcion">${p[i].nombre}</p>
    </div>
    <div class="artPrice">
        <strong>$<span class="precio">${p[i].precio}</span></strong>
    </div>
    <div class="artSelect">
        <input class="button" type="button" value="Agregar" onclick="cargarCarrito(${p[i].id},${s})">
    </div>
    </div> `
    }
}

// class Carrito{
//     constructor(){
//         this.arrayCompra = [];
//         this.total = 0;
//     }
    var arrayCompra =[]; 
    function cargarCarrito(id, arrayArt){
        var compra = arrayArt.filter(art => art.id == id);
        var artSeleccion = 0;
        var almacen = JSON.parse(localStorage.getItem("carr"));
        if(almacen){
            arrayCompra=JSON.parse(localStorage.getItem("carr"));
            }    
        arrayCompra.push(artSeleccion = new Carrito(compra[0].id, compra[0].nombre, compra[0].img, compra[0].precio));
        localStorage.setItem('carr', JSON.stringify(arrayCompra));
        alert("El producto fue agregado al carrito")
    }

    function mostrarCarrito(arrayObjetos){
        var carrito = document.getElementById("carrito");
        arrayObjetos.forEach(e => {
            carrito.innerHTML += `
            <div class="artContainer col-6 col-md-4 col-lg-3">
                <div class="artImage">
                    <img src="${e.img}" alt="vermuda">
                </div>
                <div class="artComent">
                    <p class="descripcion">${e.nombre}</p>
                </div>
                <div class="artPrice">
                    <strong>$<span class="precio">${e.precio}</span></strong>
                </div>
            
            </div> `
        });
        
    }

    function vaciarCarrito(){
        localStorage.clear();
        location.reload();
    }

    var total=0;
    function sumarProductos(objetosCarrito){
        var totales = document.getElementById("total");
        objetosCarrito.forEach(e => {
            total += e.precio;
        })
        totales.innerHTML += total;
    }
//}