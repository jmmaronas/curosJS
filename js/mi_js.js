class Persona{
    constructor(nombre, apellido, dni, email){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.email = email;
    }
}

class Producto{
    constructor(tipo, descripcion, precio){
        this.tipo = tipo;
        this.descripcion = descripcion;
        this.precio = precio;
    }
}

class Financiar{
    constructor(montoInicial, cantCuotas){
        this.monto = montoInicial;
        this.cuotas = cantCuotas;
        this.montoCuota = 0;
    }

    valorCoutas = function(){

        if (this.cuotas <=3){
            this.montoCuota = calcularCuota(this.monto, 1.15, this.cuotas);
        }
        else if(this.cuotas <=6){
            this.montoCuota = calcularCuota(this.monto, 1.30, this.cuotas);
        }
        else if(this.cuotas <=9){
            this.montoCuota = calcularCuota(this.monto, 1.45, this.cuotas);
        }
        else if(this.cuotas <=12){
            this.montoCuota = calcularCuota(this.monto, 1.60, this.cuotas);
        }
        else if(this.cuotas <= 18){
            this.montoCuota = calcularCuota(this.monto, 1.75, this.cuotas);
        }
        else{
            alert("Las cuotas deben ser entre 1 y 18");
        }

    }
}

var cliente = 0; //Objeto de la clase Persona
var pedido = []; //array de objetos de la clase Producto
var financiado = 0; //Objeto de la clase Financiar 

