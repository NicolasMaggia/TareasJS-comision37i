/*1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.*/

 /* document.write(alert('un mensaje.'));  */

/* 2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write). */
/* 
document.write('Hello World'); */

/* 3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5. */

/* document.write(`3 + 5 es igual a 8. `) */

/* 4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»
Ejemplo: 

input: Coder 
Output: Hola Coder */

/* let nombre = (prompt('Ingresa tu nombre'));
document.write(`Hola ${nombre} `);
 */

/* 5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
Nota: Tener en cuenta la siguiente función: parseInt
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/parseInt
 */

/* let num1 = parseInt(prompt('Ingrese un numero.'));
let num2 = parseInt(prompt('Ingrese otro numero.'));
let suma = num1 + num2 

document.write(`La suma de ambos numeros es: ${suma}`); */

/* 6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
Ejemplo: 
input: 15 , 3
Output: El 15 es el número más grande */

/* let num1 = parseInt(prompt('Ingrese un numero.'));
let num2 = parseInt(prompt('Ingrese otro numero.'));

if(num1 > num2){
    document.write(`${num1} es el mayor.`)
} else{
    document.write(`${num2} es el mayor.`)
}
 */

/* 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
Ejemplo: 
input: 15 , 3, 9
Output: El 15 es el número más grande */

/* let num1 = parseInt(prompt('Ingrese un numero.'));
let num2 = parseInt(prompt('Ingrese otro numero.'));
let num3 = parseInt(prompt('Ingrese otro numero.'));

if(num1 > num2 && num1 > num3){
    document.write(`${num1} es el numero mas grande.`)
} else if(num2 > num1 && num2 > num3){
    document.write(`${num2} es el numero mas grande.`)
}else{
    document.write(`${num3} es el numero mas grande.`)
} */

/* 8.- Escribe un programa que pida un número y diga si es divisible por 2
Ejemplo: 
input: 10
input: 15
Output: El 10 es divisible por 2.
Output: El 15 no es divisible por 2.
 */

let num = parseInt(prompt('Ingrese un numero.'));

if(num % 2 == 0 && num > 0 ){
    document.write(`${num} es divisible por 2.  `)
} else{
    document.write(`${num} no es divisible por 2. `)
}

