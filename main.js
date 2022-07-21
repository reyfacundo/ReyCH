let producto = " ";
let precio = 0;
let cantidad = 0;
let precioTotal = 0;
let seguirComprando = false;
let cuotas = false; 

let zapatillaSelect = "";
let cuotasSelect = 0;
let arrayCompra = [];

const form = document.getElementById("form");
const shoes = document.getElementById("shoes");
const cuotasId = document.getElementById("cuotas");
const btnCompra = document.getElementById("btnCompra");

btnCompra.addEventListener ( "click", () => {
    
    Swal.fire({
        title: '¿Quieres seguir comprando?',
        showDenyButton: true,
        confirmButtonText: 'Aceptar',
        denyButtonText: `Finalizar compra`,
        icon: 'question',
        confirmButtonColor:'#50C878',
        iconColor:'#9FE2BF'
    }).then((result) => {
        if (result.isConfirmed) {
            zapatillaSelect = shoes.value;
            arrayCompra.push(zapatillaSelect);
        } else{
            zapatillaSelect = shoes.value;
            arrayCompra.push(zapatillaSelect);
            cuotasSelect = cuotasId.value;
            
            console.log("Compro las zapatillas");
            console.log(arrayCompra);
            console.log("En " + cuotasSelect + " Cuotas.");
            localStorage.setItem("Zapatillas", JSON.stringify(arrayCompra));
        }
    })
});