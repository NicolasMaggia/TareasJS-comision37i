
/* 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje. */

/* let edad = parseInt(prompt('Ingresa tu edad.'));

if (edad >= 18){
    document.write(`Ya puede conducir.`)
}else{
    document.write('La edad ingresa no es valida. ')
}*/

/* 2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:
0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente
Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.
Ejemplo:
Input: 5
Input: 50
Input: hola10
Output: Suficiente
Output: Número erróneo
Output: Introduce un número válido
 */

/* let nota = parseInt(prompt('Ingrese una nota. '));

if(nota <= 2 ){
    document.write(`Muy deficiente. `);
}else if(nota > 2 && nota < 5){
    document.write('Insuficiente.');
}else if(nota >= 5 && nota < 7){
    document.write(`Suficiente. `);
}else if(nota == 7){
    document.write('Bien.');
}else if(nota > 7 && nota < 10){
    document.write('Notable. ');
}else if(nota == 10){
    document.write('Sobresaliente.');
}else{
    document.write('El numero ingresado no es valido. ');
} */

/* 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp */

/* 
 let text = prompt('Ingrese una oracion.');
    
    while (confirm) {
        let input = prompt('Ingrese otra oracion que desea a concatenar con las siguientes');

        if(input == null) {
            console.log('cancel');
            break;
        }else{
            text = (`${text}-${input}`);
        }
    }

    document.write(` ${text.substring(0)}`); */

/* 
    4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
 */
    
/* let sum = 0;
     
while (true) {
        
    let input = prompt('Ingrese un numero a sumar');
    
if(input == null) {   
    console.log('cancel');
    break;

}else if(isNaN(parseFloat(input))){
    alert('Este programa solo permite ingresar numeros, pruebe nuevamente.')

}else{
    sum = sum + parseFloat(input);
}
}
        
alert(`La sumatoria de los numeros es: ${sum}`);
     */

/* 5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).
El algoritmo para calcular la letra del dni es el siguiente :
El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

Ejemplo: 
Input:  40773821 
Output: ‘L’
 */

/* let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B' ,'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E' ];

while (true){
    let input = prompt('Ingrese DNI a calcular.');
    let parsedInput = parseFloat(input);

    if(input == null){
        console.log('cancel');
        break;

    }else if(isNaN(parsedInput)){
        alert('Este programa solo permite ingresar numeros. Ingrese nuevamente.')
    }else if(parsedInput < 0 || parsedInput > 99999999){
        alert('Este programa solo permite numeros del 0 al 99999999, pruebe nuevamente.');
    }else{
        alert(`La letra correspondiente al DNI es "${letras[parsedInput%23]}". (resto ${parsedInput%23} )` )
    }
} */
/* 
6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :
1
22
333
4444
55555
666666
…….
 */

/* let i, repeticion;
//Crear ciclo for para los 30 escalones
for(i = 1; i <= 30; i++){
    //crear el bucle interior para imprimir la piramide
    for(repeticion = 0; repeticion < i; repeticion++){
        //imprimir la piramide
        document.write(i)
    }
    // imprimir un salto de linea
    document.write("<br>");
} */

/* 7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).
303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1 */

//solicitar el numero de escalones que dara el usuario
/* 
let numrep = prompt('Ingresa el numero de escalones que tendra la piramide.');
//validar si el dato obtenido es un numero
if(Number(numrep) == numrep){
    //validar el tope de la piramide
    if(numrep > 0 && numrep <= 50){
        let rep, i;
        //crear el ciclo for para la piramide i hasta 1
        for(i = numrep; i >= 1; i--){
        //crear el bucle interno para imprimir la piramide
            for(rep = i; rep >= 1; rep--){
            document.write(i);
            }
            document.write('<br>');
        }
    }
    else{
        alert("El valor introducido no esta dentro del rango o es un valor valido.")
    }
}else{
    alert("No es un valor numerico.");
}*/

/* 8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……
 */

/* let numrep = prompt('Ingresa el numero de escalones que tendra la piramide. El numero no debe ser mayor a 50.');
//validar si el dato obtenido es un numero
if(Number(numrep) == numrep){
    //validar el tope de la piramide
    if(numrep > 0 && numrep <= 50){
        let rep, i;
        //crear el ciclo for para la piramide i hasta 1
        for(i = 1; i <= numrep; i++){
        //crear el bucle interno para imprimir la piramide
            for(rep = 0; rep < i; rep++){
            document.write(i);
            }
            document.write('<br>');
        }
    }
    else{
        alert("El valor introducido no esta dentro del rango o es un valor valido.")
    }
}else if(numrep > 50){
    alert('El valor ingresado es mayor que 50.');

}else{
    alert("No es un valor numerico.");
}
 */

/* 9- Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :

1
2
3
4 (Múltiplo de 4)
5-
————————————————————-

6
7
8 (Múltiplo de 4)
9 (Múltiplo de 9)
10 */

let i, linea = 0;
//Crear ciclo for para los 30 escalones
for(i = 1; i <= 500; i++){
    document.write(i)
    if(i % 4 == 0){
        document.write('es divisible por 4');
    }
    if(i % 9 == 0){
        document.write('es divisible por 9');
    }
    if(i % 5 == 0){
        document.write('<br>');
        document.write('<hr>');
    }
    document.write("<br>");
}