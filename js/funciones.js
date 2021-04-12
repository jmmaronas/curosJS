// ANIMACION DEL LOGO AL CARGAR INDEX

$(document).ready(()=>$("#logo").slideDown(2000));

//GENERA LOS PRODUCTOS EN LA PAGINA

function cargarArt(s){
    $.getJSON("../Json/baseArticulos.json", (resultado, estado) =>{
        if(estado = "success"){
            var p = resultado[s];
            for(i=0; i< p.length;i++){
                
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
                    <input class="button" type="button" value="Agregar" onclick=cargarCarrito(${p[i].id},"${s}")>
                </div>
            </div> `
            )} 
        }
    });
}

// CARGAR LOS PRODUCTOS SELECCIONADOS EN EL STORAGE

var arrayCompra =[]; 
function cargarCarrito(id, arrayArt){
    
    $.getJSON("../Json/baseArticulos.json", (resultado, estado) =>{
        if(estado = "success"){
            let p = resultado[arrayArt];
            let compra = p.filter(art => art.id == id);
            let artSeleccion = 0;
            let comprobar = JSON.parse(localStorage.getItem("carr"));
            if(comprobar){
                    arrayCompra=JSON.parse(localStorage.getItem("carr"));
            }    
            arrayCompra.push(artSeleccion = new Carrito(compra[0].id, compra[0].nombre, compra[0].img, compra[0].precio));
            localStorage.setItem('carr', JSON.stringify(arrayCompra));
            //alert("El producto fue agregado al carrito");
            $("#artCont").prepend(`
                <div id="modal" width="320" height= "320">
                    <h2>El producto fue agregado al carrito</h2>
                </div>`
            );
            
            var winH = $(window).height();
            var winW = $(window).width();
            $("#modal").css({
                "background-color": "#d4cece",
                "position": "absolute",
                "width": "10rem",
                "top": winH/2,
                "left": winW/2,
                "border": "solid 1px #000000"
                }).slideUp(6000);
        }
    });
}

//GENERA LA PAGINA CON EL STORAGE 

function mostrarCarrito(arrayObjetos){
    let comprobar = JSON.parse(localStorage.getItem("carr"));
        arrayObjetos.forEach(e => {
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
                </div> `);
        });
}

// VACIA EL STORAGE 

function vaciarCarrito(){
    localStorage.clear();
    location.reload();
}

//SUMA EL VALOR DE LOS PRODUCTOS SELECCIONADOS

var total=0;
function sumarProductos(objetosCarrito){
    let comprobar = JSON.parse(localStorage.getItem("carr"));
    
    if(comprobar === null){
    
    }
    else{
        var totales = document.getElementById("total");
        objetosCarrito.forEach(e => {
            total += e.precio;
        })
        totales.innerHTML += total;
    }
}

//QUITA EL ARTICULO SELECCIONADO DEL STORAGE

function quitarArticulo(id){
    arrayC=JSON.parse(localStorage.getItem("carr"));
    var elem = arrayC.filter(art => art.id === id);
    var elemen = elem[0]; 
    var bus=arrayC.indexOf(elemen);
    arrayC.splice(bus,1);
    localStorage.setItem('carr', JSON.stringify(arrayC));
    location.reload();
}

//CAPTURA EL EVENTO Y GENERA UN FORM EN EL CARRITO

$("#pedido").click(function(){
    $("#formPedido").html(`
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
    </form>`);
    
    $.ajax({            
        data:  {"parametros": localStorage.getItem("carr")}, //datos que se envian a traves de ajax
        url:   '../pages/correo.php', //archivo que recibe la peticion
        type:  'post', //método de envio
        beforeSend: function () {
                $("#resultado").html("Procesando, espere por favor...");
        },
        success:  function (response) { //una vez que el archivo recibe el request lo procesa y lo devuelve
                $("#resultado").html(response);
        }
    });
});
    
