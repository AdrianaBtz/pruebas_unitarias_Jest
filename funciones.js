function calcularDescuento(precio, porcentaje){
    if (porcentaje <=0 || porcentaje >=100 ){
        return "Porcentaje inválido";
    } else {
       const descuento = precio * (porcentaje/100);
       const precioFinal = precio - descuento;
       return precioFinal;
    }
} // calcular descuento

function validarPassword(password){
    if (password.length >= 8 && (/[0-9]/.test(password))){
        return true;
    } else {
        return false;
    }
}

function celsiusAFahrenheit(celcius){
    return celcius * 9/5 + 32;
}

function esMayorDeEdad (edad){
    if(edad >=18){
        return true;
    } else {
        return false;
    }
}

function generarNombreCompleto (nombre, apellido){
    return nombre + " " + apellido;
}

module.exports.calcularDescuento = calcularDescuento;
module.exports.validarPassword = validarPassword;
module.exports.celsiusAFahrenheit = celsiusAFahrenheit;
module.exports.esMayorDeEdad = esMayorDeEdad;
module.exports.generarNombreCompleto = generarNombreCompleto;