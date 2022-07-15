let producto = " ";
let precio = 0;
let cantidad = 0;
let precioTotal = 0;
let seguirComprando = false;
let cuotas = false; 

do {
    producto = Number(prompt("Elija un producto escribiendo su ID : Nike air force - ID 1, Adidas Superstar - ID 2, Vans Old Skool - ID 3, Puma Borussia - ID 4, Fila Racer ID - 5, Reebok Lite - ID 6"));
    cantidad = Number(prompt("Cantidad de productos"));
    switch (producto) {
        case 1:
            precio = 15000;
            break;
        case 2:
            precio = 10000;
            break;
        case 3:
            precio = 13400;
            break;
        case 4:
            precio = 9000;
            break;
        case 5:
            precio = 7600;
            break;
        case 6:
            precio = 11500;
            break;
        default:
            alert("Producto no disponible");
            break;
            precio = 0;
            cantidad = 5500;
    }
    precioTotal += precio * cantidad;
    seguirComprando = confirm ("¿Seguir comprando?");
} while (seguirComprando);

alert("Total:"+precioTotal);

cuotas = confirm("¿Quieres pagar en cuotas?"); 

if(cuotas == true){
    let cuotasSelec = parseInt(prompt("Lo pagará en 3, 6 o 12 cuotas?"));
    precioFinal(precioTotal, cuotasSelec);
    alert("Pagará " + cuotasSelec + " cuotas de $" + precioTotalCuotas + " por mes.");
} else {
    alert("Total:"+precioTotal)
}

function precioFinal(resultado, cuotas) {
    switch (cuotas) {
        case 3:
            precioTotalCuotas = resultado / 3;
            break;
        case 6:
            precioTotalCuotas = resultado / 6;
            break;
        case 12:
            precioTotalCuotas = resultado / 12;
            break;
        default:
            alert("Número incorrecto de cuotas");
            break;
    }
}

let listado = [
    {ID: 1, precio: 15000},
    {ID: 2, precio: 10000},
    {ID: 3, precio: 13400},
    {ID: 4, precio: 9000},
    {ID: 5, precio: 7600},
    {ID: 6, precio: 11500},
    {ID: 7, precio: 5500},
]

let ofertaNavideña = listado.filter(navidad => navidad.precio <= 10000);

console.log(ofertaNavideña);

const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const edad = document.getElementById("edad");
const email = document.getElementById("email");

form.onsubmit = (event) => {
    event.preventDefault()
    const usuario = {
        name: nombre.value,
        age: edad.value,
        email: email.value
    }
    console.log(usuario)
}
