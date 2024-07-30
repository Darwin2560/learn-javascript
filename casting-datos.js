// Coversion de datos
/**
 *  a String => String(), toString()
 * a Number => Number(), parseInt()
 * a Decimal => Number(), parseFloat()
 */

let dato = 15;
console.log(typeof dato); // number

dato = dato.toString();
console.log(typeof dato); // string

let stringToFloat = "25.0";
console.log(typeof stringToFloat); // string

stringToFloat = parseFloat(stringToFloat);
console.log(typeof stringToFloat); // Number