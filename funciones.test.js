const test = require("node:test");
const funciones = require("./funciones.js");
// test calcularDescuento
test ("$1000 menos el 20% es igual a 800", () => {
    expect (funciones.calcularDescuento(1000,20)) .toBe (800);
});

test ("$500 menos el 10% es igual a 450", () => {
    expect (funciones.calcularDescuento(500,10)) .toBe (450);
});

test ("$1000 menos el 0% es igual a Porcentaje inválido", () => {
    expect (funciones.calcularDescuento(1000,0)) .toBe ("Porcentaje inválido");
});

test ("$1000 menos el 100% es igual a Porcentaje inválido", () => {
    expect (funciones.calcularDescuento(1000,100)) .toBe ("Porcentaje inválido");
});

test ("$1000 menos el 120% es igual a Porcentaje inválido", () => {
    expect (funciones.calcularDescuento(1000,120)) .toBe ("Porcentaje inválido");
});

// test validarPassword
test ("La contraseña adriana1234 es válida", ()=>{
    expect (funciones.validarPassword("adriana1234")) .toBeTruthy ();
});

test ("La contraseña 12345678 es válida", ()=>{
    expect (funciones.validarPassword("12345678")) .toBeTruthy ();
});

test ("La contraseña AdrI04 es válida", ()=>{
    expect (funciones.validarPassword("AdrI04")) .toBeFalsy ();
});

test ("La contraseña adrianaa es inválida", ()=>{
    expect (funciones.validarPassword("adrianaa")) .toBeFalsy ();
});

//test celcius
test ("0 celcius es igual a 32 Fahrenheit", () => {
    expect (funciones.celsiusAFahrenheit(0)) .toBe (32);
});

test ("-10 celcius es igual a 14 Fahrenheit", () => {
    expect (funciones.celsiusAFahrenheit(-10)) .toBe (14);
});

// test mayordeedad
test ("si tienes 10 años eres menor de edad", ()=>{
    expect (funciones.esMayorDeEdad(10)) .toBeFalsy ();
});

test ("si tienes 20 años eres mayor de edad", ()=>{
    expect (funciones.esMayorDeEdad("20")) .toBeTruthy ();
});

//  test generarnombrecompleto

test("Genera el nombre completo correctamente", () => {
    expect(funciones.generarNombreCompleto("Adriana", "Benítez")).toBe("Adriana Benítez");
});

