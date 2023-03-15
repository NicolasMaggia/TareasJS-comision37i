/*punto 1 
un sistema, en el cual se podrá ingresar el nombre, edad, actividad
favorita y deporte favorito en una tarjeta de presentación predeterminada*/

/*let nombreEstudiantes, edad, actividadFavorita, deporteFavorito;

nombreEstudiantes = prompt('Ingrese su nombre: ');
edad = prompt('Ingrese su edad: ');
actividadFavorita = prompt('Ingrese su actividad favorita: ');
deporteFavorito = prompt('Ingrese su deporte favorito: ');

document.write(`El nombre del estudiante es ${nombreEstudiantes}, su edad es ${edad}, su actividad favorita es ${actividadFavorita} y su deporte favorito es ${deporteFavorito}`); 

*/
/*punto 3 
Realizar un programa que lea cuatro valores numéricos e informar su suma y producto.*/

/*let num1, num2, num3, num4, suma, producto;

num1= parseInt(prompt('Ingrese el primer numero: '));
num2= parseInt(prompt('Ingrese el segundo numero: '));
num3= parseInt(prompt('Ingrese el tercer numero: '));
num4= parseInt(prompt('Ingrese el cuarto numero: '));

suma= num1 + num2 + num3 + num4;

producto = num1 * num2 * num3 * num4;

document.write(`El valor de la suma de ${num1} , ${num2} , ${num3} y ${num4} es ${suma}, y el valor de multiplicar ${num1} , ${num2} , ${num3} y ${num4} es ${producto}`);*/


/*punto 4
Se debe desarrollar un programa que pida el ingreso del precio de un artículo y la cantidad
que lleva el cliente. Mostrar lo que debe abonar el comprador (Ingresar por teclado un precio
sin decimales, es decir un entero: 2, 7, 90 etc*/

/*let producto, cantidad, montoFinal;

producto = (prompt('Ingrese el precio del articulo: '));
cantidad = (prompt('Ingrese la cantidad: '));

montoFinal = producto * cantidad; 

document.write(`El valor del articulo es de: ${producto} pesos, la cantidad a comprar es: ${cantidad} unidades y el valor a pagar es de: ${montoFinal} pesos.`);*/

/*punto 2 
Ingresar dos números
● Si el primero es mayor que el segundo mostrar en consola la suma de ambos
● Si el primero es menor que el segundo mostrar en consola la resta del segundo
menos el primero.
● Si son iguales mostrar en consola la multiplicación de ambos.
(ejemplo del mensaje: 2 es menor que 5, la resta de 5 - 2 es igual a 3)*/

/*let num1, num2, suma, resta, multiplicacion;

num1 = parseInt(prompt('Ingrese el primer numero: '));
num2 = parseInt(prompt('Ingrese el segundo numero: '));

suma = num1 + num2;
resta = num2 - num1;
multiplicacion = num1 * num2;

if(num1 > num2){
    document.write(`El resultado de ${num1} mas ${num2} es de: ${suma}`);
} else if(num1 < num2){
    document.write(`El resultado de ${num1} menos ${num2} es de: ${resta}`);
}else if(num1 = num2){
    document.write(`El resultado de ${num1} por ${num2} es ${multiplicacion}`);
} */


/*punto 5 
Ingresar 3 números
● indicar cual es el mayor
● indicar cual es el menor
● obtener la raíz cuadrada del segundo número*/


let num1, num2, num3, raizCuadrada;

num1 = parseInt(prompt('Ingrese el primer numero: '));
num2 = parseInt(prompt('Ingrese el segundo numero: '));
num3 = parseInt(prompt('Ingrese el tercer numero: '));

raizCuadrada = Math.sqrt(num2);

if(num1 > num2 && num1 > num3){
    document.write(`El numero mayor es: ${num1} `);
}else if (num2 > num1 && num2 > num3){
    document.write(`El numero mayor es: ${num2} `);

}else if (num3 > num1 && num3 > num2){
    document.write(`El numero mayor es: ${num3} `);
}
    document.write('<br>')

if(num1 < num2 && num1 < num3){
    document.write(`El numero menor es: ${num1} `);
}else if (num2 < num1 && num2 < num3){
    document.write(`El numero menor es: ${num2} `);

}else if (num3 < num1 && num3 < num2){
    document.write(`El numero menor es: ${num3} `);
}   

document.write('<br>')

document.write(`La raiz cuadrada de ${num2} es ${raizCuadrada}`)

