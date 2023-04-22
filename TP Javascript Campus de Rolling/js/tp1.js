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

/* let num = parseInt(prompt('Ingrese un numero.'));

if(num % 2 == 0 && num > 0 ){
    document.write(`${num} es divisible por 2.  `)
} else{
    document.write(`${num} no es divisible por 2. `)
}

 */

/* 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
Ejemplo:
input: Hola mundo
Output: oauo
 */
/* let letra = prompt('Introduce una letra para contar luego en la frase') */
/* let frase = (prompt('Ingrese una frase.'));

for(let i=0; i < frase.length; i++){
    switch(frase.length){
        case a:
            document.write('A');
            break;
        case e:
            document.write('E');
            break;
        case i:
            document.write('I');
            break;
        case o:
            document.write(O);
            break;
        case u:
            document.write('U');
            break
    }
} */


let frase = prompt(`Escriba una frase.`);
let texto = frase.length

for(let i = O; i <= texto; i++){
    if(frase.charAt(i,0) === "a" || frase.charAt(i,0) === "e" || frase.charAt(i,0) === "à" || 
        frase.charAt(i,0) === "E" || frase.charAt(i,0) === "A" || frase.charAt(i,0) === "è" ||
        frase.charAt(i,0) === "i" || frase.charAt(i,0) === "I" || frase.charAt(i,0) === "ì" || 
        frase.charAt(i,0) === "o" || frase.charAt(i,0) === "O" || frase.charAt(i,0) === "ò" || 
        frase.charAt(i,0) === "u" || frase.charAt(i,0) === "ù" || frase.charAt(i,0) === "U" ){
        document.write(frase.charAt(i,0));
    }
}




/* let valor = parseInt(prompt('Ingrese un valor comprendido entre 1 y 5'));
switch(valor){
    case 1:
        document.write('uno');
        break;
    case 2:
        document.write('dos');
        break;
    case 3:
        document.write('tres');
        break;
    case 4:
        document.write('cuatro');
        break;
    case 5:
        document.write('cinco');
        break;
    default:
        document.write('Debe ingresar un valor comprendido entre 1 y 5, no sea porfiado');
} */


/* 10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
Ejemplo: 
input: 20
Output: El 20 es divisible por 2. */

/* let num = parseInt(prompt('Ingrese un numero.'));

if(num % 2 == 0 && num > 0 ){
    document.write(`${num} es divisible por 2. `);
}else if(num % 3 == 0 && num > 0){
    document.write(`${num} es divisible por 3. `);
}else if(num % 5 == 0 && num > 0 ){
    document.write(`${num} es divisible por 5. `);
}else if(num % 7 == 0 && num > 0 ){
    document.write(`${num} es divisible por 7. `);
} else{
    document.write(`El numumero ingresado no es valido. `)
}
 */

/* 11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
Ejemplo: 
input: 20
input: 210
Output: El 20 es divisible por 2 y por 5.
Output: El 210 es divisible por 2, por 3, por 5 y por 7. */

/* 
let num = parseInt(prompt('Ingrese un numero. '));

if(num % 2 == 0 && num > 0 ){
    document.write(`${num} es divisible por 2. <br>`);
} 
if(num % 5 == 0 && num > 0){
    document.write(`${num} es divisible por 5. <br>`);
}
if(num % 3 == 0 && num > 0){
    document.write(`${num} es divisible por 3. <br>`);
}
if(num % 7 == 0 && num > 0 ){
    document.write(`${num} es divisible por 7. <br>`);
} 
 */


