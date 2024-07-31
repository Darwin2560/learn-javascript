// Entrada
let consumo = Number(prompt('Ingrese el consumo:'));
let descuento, datoDescuento;


// Validación de consumo
if (consumo <= 100) {
    // Descuento del 10%
    datoDescuento = '10%';
    descuento = consumo * 0.10;
} else if (consumo > 100 && consumo <= 200) {
    // Descuento del 20%
    datoDescuento = '20%';
    descuento = consumo * 0.20;
} else if (consumo > 200) {
    // Descuento del 30%
    datoDescuento = '30%';
    descuento = consumo * 0.30;
}

let montoDescuento = consumo - descuento;
let iva = montoDescuento * 0.19;
let totalPagar = montoDescuento + iva;

// Salida
document.write(`<pre>
    Consume: ${consumo}
    Descuento: ${descuento} ************** ${datoDescuento}
    Monto con descuento: ${montoDescuento}
    IVA: ${iva} ************* 19%
    Total a pagar: ${totalPagar}
</pre>`)
