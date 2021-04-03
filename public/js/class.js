class Carrito{
    constructor(id, nombre, img, precio){
        this.id = id;
        this.nombre = nombre;
        this.img = img;
        this.precio = precio;
        this.arrayCompra =[]; 
        this.total=0;
    }
    
    cargar(id){
        let compra = id[0];
        var artSeleccion = 0;
        let almacen = JSON.parse(localStorage.getItem("carr"));
        if(almacen){
            arrayCompra=JSON.parse(localStorage.getItem("carr"));
            }    
        arrayCompra.push(artSeleccion = new Carrito(compra.id, compra.nombre, compra.img, compra.precio));
        localStorage.setItem('carr', JSON.stringify(arrayCompra));
        alert("El producto fue agregado al carrito")
    }

    // mostrar(arrayObjetos){
    //     let carrito = document.getElementById("carrito");
    //     arrayObjetos.forEach(e => {
    //         carrito.innerHTML += `
    //         <div class="artContainer col-6 col-md-4 col-lg-3">
    //             <div class="artImage">
    //                 <img src="${e.img}" alt="vermuda">
    //             </div>
    //             <div class="artComent">
    //                 <p class="descripcion">${e.nombre}</p>
    //             </div>
    //             <div class="artPrice">
    //                 <strong>$<span class="precio">${e.precio}</span></strong>
    //             </div>
    //             <div class="artSelect">
    //                 <input class="button" type="button" value="Quitar" onclick="quitarArticulo(${e.id})">
    //             </div>
    //         </div> `
    //     });
        
    // }

    vaciar(){
        localStorage.clear();
        location.reload();
    }
    
    sumarProductos(objetosCarrito){
        var totales = document.getElementById("total");
        objetosCarrito.forEach(e => {
            total += e.precio;
        })
        totales.innerHTML += total;
    }

    quitarArticulo(id){
        arrayC=JSON.parse(localStorage.getItem("carr"));
        var elem = arrayC.filter(art => art.id === id);
        var elemen = elem[0]; 
        var bus=arrayC.indexOf(elemen);
        arrayC.splice(bus,1);
        localStorage.setItem('carr', JSON.stringify(arrayC));
        location.reload();
    }
}

class Productos{
    constructor(id, nombre, imagen, precio){
        this.id = id;
        this.Nombre = nombre;
        this.imagen = imagen;
        this.precio = precio;
    }
}