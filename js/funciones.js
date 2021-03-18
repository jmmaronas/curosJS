function cargarArt(p){
    var container = document.getElementById("artCont");
    for(i=0; i<p.length;i++){
    
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
        <input type="button" value="Agregar" onclick="cargarCarrito(${p[i].id})">
    </div>
    </div> `
    }
    
}

var arrayCompra = []; 
function cargarCarrito(id){
    var compra = arrayArtNenes.filter(art => art.id == id);
    var artSeleccion = 0;
    arrayCompra.push(artSeleccion = new Carrito(compra[0].id, compra[0].nombre, compra[0].img, compra[0].precio));
    console.log(arrayCompra);
    return arrayCompra;
}

function mostrarCarrito(arrayObjetos = arrayCompra){
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