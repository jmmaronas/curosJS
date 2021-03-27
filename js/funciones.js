function cargarArt(p, s){
    //var html = document.getElementById("artCont");
    
    for(i=0; i< p.length;i++){
    
    //html.innerHTML += 
    $("#artCont").append(
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
            <input class="button" type="button" value="Agregar" onclick="cargarCarrito(${(p[i].id)},${s})">
        </div>
    </div> `
    )}
}


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
        //var carrito = document.getElementById("carrito");
        arrayObjetos.forEach(e => {
            //carrito.innerHTML += `
            $("#carrito").append(`
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
                <div class="artSelect">
                    <input class="button" type="button" value="Quitar" onclick="quitarArticulo(${e.id})">
                </div>
            </div> `)
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

    function quitarArticulo(id){
        arrayC=JSON.parse(localStorage.getItem("carr"));
        var elem = arrayC.filter(art => art.id === id);
        var elemen = elem[0]; 
        var bus=arrayC.indexOf(elemen);
        arrayC.splice(bus,1);
        localStorage.setItem('carr', JSON.stringify(arrayC));
        location.reload();
    }

    $("#pedido").click(function(){
        $("#pedido").append(`
        <form action="correo.php" method="POST" name="Formulario Consulta">
            <fieldset>
                <legend class="encabezado">Fomulario</legend>
                    <div class="form-group">                
                        <label for="nombre">Nombres:</label>
                        <input class="form-control input" type="text" value="" name="nombre" placeholder="Juan..." id="nombre">
                    </div>
                    <div class="form-group">
                        <label for="apellido">Apellidos:</label>
                        <input class="form-control input" type="text" name="apellido" placeholder="Matinez.." id="apellido">
                    </div>
                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input class="form-control input" type="email" name="email" placeholder="tu_mail@algo.com" id="email">
                    </div>
                    <div class="form-group">
                        <label for="telefono">Telefono:</label>
                        <input class="form-control input" type="number" name="telefono" placeholder="011-132465.." id="telefono">
                    </div>
                    <input class="btn btn-primary button" type="submit" value="Enviar" name="enviar">
                    <input class="btn btn-primary button" type="reset" value="Restablecer">
            </fieldset>
        </form>`)});
    
