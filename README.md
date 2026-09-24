# Pruebas Unitarias con Jest

## Descripción

Proyecto para practicar **pruebas unitarias en JavaScript** utilizando Jest. Se crearon diferentes funciones y pruebas para comprobar sus resultados.

## Objetivo

Practicar el proceso de **testing en JavaScript**, desde la creación de funciones y pruebas hasta la identificación y corrección de errores.

## Tecnologías

- JavaScript
- Node.js
- Jest
- Visual Studio Code
- Git y GitHub

## Funciones

- **`calcularDescuento()`**: calcula descuentos y valida porcentajes.
- **`validarPassword()`**: valida que una contraseña tenga mínimo 8 caracteres y un número.
- **`celsiusAFahrenheit()`**: convierte grados Celsius a Fahrenheit.
- **`esMayorDeEdad()`**: determina si una persona es mayor de edad.
- **`generarNombreCompleto()`**: une el nombre y apellido.

## Pruebas unitarias

Las pruebas se encuentran en `funciones.test.js`.

Se probaron:

- Casos normales.
- Casos límite.
- Valores inválidos.
- Diferentes entradas.
- Resultados esperados.

Ejemplo:

```js
test("$1000 menos el 20% es igual a 800", () => {
    expect(funciones.calcularDescuento(1000, 20)).toBe(800);
});`



