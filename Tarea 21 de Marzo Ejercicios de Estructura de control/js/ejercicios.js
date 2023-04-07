/*  1. Realizar la carga del lado de un cuadrado, mostrar por pantalla el perímetro del
mismo (El perímetro de un cuadrado se calcula multiplicando el valor del lado por
    cuatro*/

/*let lado, perimetro

lado = parseInt(prompt('Ingrese un lado del cuadrado'));
perimetro = lado * 4;

document.write(`El perimetro del cuadrado es de ${perimetro}`)
*/


/* 2. Escribir un programa en el cual se ingresan cuatro números, calcular e informar la
suma de los dos primeros y el producto del tercero y el cuarto.*/

/*let num1, num2, num3, num4, suma, producto

num1 = parseInt(prompt('Ingrese el primer numero'));
num2 = parseInt(prompt('Ingrese el segundo numero'));
num3 = parseInt(prompt('Ingrese el tercer numero'));
num4 = parseInt(prompt('Ingrese el cuarto numero'));

suma = num1 + num2;
producto = num3 * num4;

document.write(`La suma de ${num1} + ${num2} es de ${suma}`);
document.write(`El producto de ${num3} + ${num4} es de ${producto}`);*/


/* 3.Realizar un programa que lea cuatro valores numéricos e informe su suma y
producto*/

/*let num1, num2, num3, num4, suma, producto

num1 = parseInt(prompt('Ingrese el primer numero'));
num2 = parseInt(prompt('Ingrese el segundo numero'));
num3 = parseInt(prompt('Ingrese el tercer numero'));
num4 = parseInt(prompt('Ingrese el cuarto numero'));

if(!isNaN(num1) && !isNaN(num2) && !isNaN(num3) && !isNaN(num4)){
    suma = num1 + num2 + num3 + num4;
    producto = num1 * num2 * num3 * num4;
    document.write(`La suma de los numeros es igual a: ${suma} <br>`);
    document.write(`El producto de los numeros es igual a: ${producto}`);
} else {
    document.write('Un valor ingresado es invalido');
}*/

/* 4.Se debe desarrollar un programa que pida el ingreso del precio de un artículo y la
cantidad que lleva el cliente. Mostrar lo que debe abonar el comprador (Ingresar por
teclado un precio sin decimales, es decir un entero: 2, 7, 90 etc.)*/

/*let precio, cantidad, montoFinal

precio = parseInt(prompt('Ingrese el valor del producto'));
cantidad = parseInt(prompt('Ingrese la cantidad del producto'));

montoFinal = precio * cantidad;

document.write(`El monto final a pagar es de $ ${montoFinal}`);*/

/* 5. Se ingresan tres notas de un alumno, si el promedio es mayor o igual a siete mostrar
el mensaje 'Promocionado'. Tener en cuenta que para obtener el promedio debemos
operar suma=nota1+nota2+nota3; y luego hacer promedio=suma/3;
Cuando cargamos una nota y queremos convertir inmediatamente el valor ingresado
a entero podemos hacer:
nota1=prompt('Ingrese primer nota:','');
nota1=parseInt(nota1);
O en forma más corta:
nota1=parseInt(prompt('Ingrese primer nota:',''));*/

/*let nota1, nota2, nota3, suma, promedio

nota1 = parseInt(prompt('Ingrese la primera nota'));
nota2 = parseInt(prompt('Ingrese la segunda nota'));
nota3 = parseInt(prompt('Ingrese la tercera nota'));

suma = nota1 + nota2 + nota3;
promedio = suma / 3;

document.write(`El promedio final del alumnos es de ${promedio}`);*/

/* 6. Solicitar que se ingrese dos veces una clave. Mostrar un mensaje si son iguales
(tener en cuenta que para ver si dos variables tienen el mismo valor almacenado
debemos utilizar el operador ==)*/

/*let clave1, clave2

clave1 = parseInt(prompt('Ingrese una clave'));
clave2 = parseInt(prompt('Repita la clave ingresada.'));2

if(clave1 == clave2){
    document.write('Las claves ingresadas son iguales.')
} else{
    document.write('Las claves ingresadas no son iguales.')
};*/

/* 7. Se ingresa por teclado un valor entero, mostrar una leyenda que indique si el
número es positivo, cero o negativo.*/

/*let valor

valor = parseInt(prompt('Ingrese un valor.'));

if(valor > 0){
    document.write('El valor ingresado es positivo.')
} else if(valor == 0){
    document.write('El valor ingresado es 0.')
} else if(valor < 0){
    document.write('El valor ingresado es negativo.')
} else{
    document.write('El valor ingresado no es valido.')
};*/

/* 8. Confeccionar un programa que permita cargar un número entero positivo de hasta
tres cifras y muestre un mensaje indicando si tiene 1, 2, o 3 cifras.*/

/*let num

num  = parseInt(prompt('Ingrese un valor de hasta 3 digitos.'));

if (num >= 0  && num < 10 ){
    document.write('El valor ingresado es de un digito.')
} else if(num > 9 && num < 100){
    document.write('El valor ingresado es de dos digitos.')
} else if(num > 99 && num < 1000){
    document.write('El valor ingresado es de tres digitos.')
} else{
    document.write('El valor ingresado no es invalido.')
}*/


/*  9. De un postulante a un empleo, que realizó un test de capacitación, se obtuvo la
siguiente información: nombre del postulante, cantidad total de preguntas que se le
realizaron y cantidad de preguntas que contestó correctamente. Se pide confeccionar
un programa que lea los datos del postulante e informe el nivel del mismo según el
porcentaje de respuestas correctas que ha obtenido, y sabiendo que:
Nivel superior: Porcentaje>=90%.
Nivel medio: Porcentaje>=75% y <90%.
Nivel regular: Porcentaje>=50% y <75%.
Fuera de nivel: Porcentaje<50%.*/

/*let postulante, cantPreguntas, cantPregCorrectas, porcentaje

postulante = (prompt('Ingrese su nombre.'));
cantPreguntas = parseInt(prompt('Ingrese la cantidad de preguntas realizadas.'));
cantPregCorrectas = parseInt(prompt('Ingrese la cantidad de respuestas correctas.'))

porcentaje = cantPregCorrectas / cantPreguntas

if(porcentaje >= 0.9){
    document.write(`El postulante : ${postulante} <br>`)
    document.write(`El nivel del postulante es Superior.`)
} else if(porcentaje >= 0.7 && porcentaje < 0.9){
    document.write(`El postulante : ${postulante} <br>`)
    document.write(`El nivel del postulante es Medio.`)
} else if(porcentaje >= 0.5 && porcentaje < 0.75){
    document.write(`El postulante : ${postulante} <br>`)
    document.write(`El nivel del postulante es Regular.`)
}else if(porcentaje < 0.5){
    document.write(`El postulante : ${postulante} <br>`)
    document.write(`El nivel del postulante es Fuera de nivel.`)
}*/


/*10. Confeccionar un programa que lea 3 pares de datos, cada par de datos corresponde
a la medida de la base y la altura de un triángulo. El programa deberá informar:
a) De cada triángulo la medida de su base, su altura y su superficie.
b) La cantidad de triángulos cuya superficie es mayor a 12.*/

/*let base, altura, superficie;
let cantTriangMayorDoce = 0;

for(let i = 1; i <= 3; i++){
    base = parseFloat(prompt('Ingrese la base del triangulo'));
    altura = parseFloat(prompt('Ingrese la altura del triangulo'));
    superficie = (base * altura) / 2;
    if(superficie > 12){
        cantTriangMayorDoce++;
    }
    document.write(`Triangulo nº: ${i} <br>`);
    document.write(`Base: ${base} <br>`);
    document.write(`Altura: ${altura} <br>`);
    document.write(`Superficie: ${superficie} <br>`);
}

document.write(`Cantidad de triagulos con superficie mayor a 12: ${cantTriangMayorDoce}`);*/

/*  11.  Desarrollar un programa que solicite la carga de 10 números e imprima la suma de
los últimos 5 valores ingresados.*/

/*let num1, num2, num3, num4, num5, num6, num7, num8, num9, num10, suma

num1 = parseInt(prompt('Ingrese un valor.'));
num2 = parseInt(prompt('Ingrese un valor.'));
num3 = parseInt(prompt('Ingrese un valor.'));
num4 = parseInt(prompt('Ingrese un valor.'));
num5 = parseInt(prompt('Ingrese un valor.'));
num6 = parseInt(prompt('Ingrese un valor.'));
num7 = parseInt(prompt('Ingrese un valor.'));
num8 = parseInt(prompt('Ingrese un valor.'));
num9 = parseInt(prompt('Ingrese un valor.'));
num10 = parseInt(prompt('Ingrese un valor.'));

suma = num6 + num7 + num8 + num9 + num10

document.write(`La suma de los ultimos 5 valores es de ${suma} `);*/

/* 12.  Desarrollar un programa que muestre la tabla de multiplicar del 5 (del 5 al 50).*/

/* let num, i, producto
i = 1;
num = 5;

for(let i = 1; i <= 10; i++){
    producto = i * num; 
    document.write(`${i} x ${num} = ${producto} <br>`);

    } */

// ESTE PROGRAMA TE DICE LA TABLA DEL NUMERO INGRESADO

/* let num, i, producto
i = 1;
num = parseInt(prompt('Ingrese un numero para ver su tabla de multiplicacion'));


for(let i = 1; i <= 10; i++){
    producto = i * num; 
    document.write(`${i} x ${num} = ${producto} <br>`);

    } */
    
/* 13. Confeccionar un programa que permita ingresar un valor del 1 al 10 y nos muestre la
tabla de multiplicar del mismo (los primeros 12 términos)
Ejemplo: Si ingreso 3 deberá aparecer en pantalla los valores 3, 6, 9, hasta el 36.*/

/*  let num, i, producto
i = 1;
num = parseInt(prompt('Ingrese un numero para ver su tabla de multiplicacion'));


for(let i = 1; i <= 12; i++){
    producto = i * num; 
    document.write(`${i} x ${num} = ${producto} <br>`);

    } */

/* 14.  Realizar un programa que lea los lados de 4 triángulos, e informar:
a) De cada uno de ellos, qué tipo de triángulo es: equilátero (tres lados iguales),
isósceles (dos lados iguales), o escaleno (ningún lado igual)
b) Cantidad de triángulos de cada tipo.
c) Tipo de triángulo del que hay menor cantidad.*/


/*let lado1, lado2, lado3, i, equilatero = 0, isosceles = 0, escaleno = 0, cantMayor, cantMenor


for(let i = 1; i <=3; i++){
lado1 = parseInt(prompt('Ingrese el valor del primer lado del triangulo'));
lado2 = parseInt(prompt('Ingrese el valor del segundo lado del triangulo'));
lado3 = parseInt(prompt('Ingrese el valor del tercer lado del triangulo'));

if(lado1 == lado2 && lado1 == lado3 && lado2 == lado3){
        document.write(`El triangulo numero: ${i} es Equilatero. <br>`);
         equilatero = equilatero + 1;
    }else if(lado1 != lado2 && lado1 != lado3 && lado2 != lado3){
        document.write(`El triangulo numero: ${i}  es Escaleno. <br>`);
        escaleno = escaleno + 1;
    }else{
        document.write(`El triangulo numero: ${i}  es Isosceles. <br>`);
        isosceles = isosceles + 1;
}
}

document.write(`<br> Triangulos Equilateros hay: ${equilatero} `);
document.write(`<br> Triangulos Escaleno hay: ${escaleno} `);
document.write(`<br> Triangulos isosceles hay: ${isosceles} `);


min = equilatero; 
cantMenor = equilatero;
if (isosceles < min){
    min = isosceles;
} else if(escaleno < min){
    min = escaleno; 
}
if(escaleno < min){
    cantMenor = escaleno;
}

max = equilatero;
cantMayor = equilatero;
if (isosceles > max){
    max = equilatero; 
    cantMayor = isosceles;
    
} else if(escaleno > max){
    max = escaleno; 
}

document.write(`<br> El tipo de triangulo del que hay menor cantidad es: ${cantMenor} `);
document.write(`<br> El tipo de triangulo del que hay mayor cantidad es: ${cantMayor} `);*/


/*  15. Escribir un programa que pida ingresar coordenadas (x,y) que representan puntos en
el plano. Informar cuántos puntos se han ingresado en el primer, segundo, tercer y
cuarto cuadrante. Al comenzar el programa se pide que se ingrese la cantidad de
puntos a procesar.*/

/*let x, y, i, cantPuntos, primer = 0, segundo = 0, tercer = 0, cuarto = 0

cantPuntos = parseInt(prompt('Informar la cantidad de coordenadas que desea ingresar.'));

for(let i = 1; i <= cantPuntos; i++){        
x = parseInt(prompt('Ingrese la coordenada (x).'));
y = parseInt(prompt('Ingrese la coordenada (x).'));

if(x >= 0 && y >= 0){
        document.write(`La coordenada ${i}  pertenece al primer cuadrante. <br>`);
        primer = primer + 1;
    }else if(x < 0 && y > 0){
        document.write(`La coordenada ${i}  pertenece al segundo cuadrante. <br>`);
        segundo = segundo + 1;
    }else if(x < 0 && y < 0){
        document.write(`La coordenada ${i}  pertenece al tercer cuadrante. <br>`);
        tercer = tercer + 1;
    }else{
        document.write(`La coordenada ${i}  pertenece al cuarto cuadrante. <br>`);
        cuarto = cuarto + 1;
    }
}

document.write(`<br> Se ingresaron: ${primer} puntos en el primer cuadrante.`);
document.write(`<br> Se ingresaron: ${segundo} puntos en el segundo cuadrante.`);
document.write(`<br> Se ingresaron: ${tercer} puntos en el tercer cuadrante.`);
document.write(`<br> Se ingresaron: ${cuarto} puntos en el cuarto cuadrante.`);*/



 /*16. Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
a) La cantidad de valores negativos ingresados.
b) La cantidad de valores positivos ingresados.
c) La cantidad de múltiplos de 15.
d) El valor acumulado de los números ingresados que son pares.*/

/*let num, i, negativos = 0, positivos = 0, cantMultiplosQuince = 0, cantPares = 0

for(let i = 1; i <= 10; i++){
    num = parseFloat(prompt('Ingrese un valores.'));
    if(num > 0){
    positivos = positivos + 1;
    }else{
   negativos = negativos + 1;
    }
    if(num % 2 == 0){
       cantPares = cantPares + num ; 
    } 

    if(num % 15 ==  && num > 0){
        cantMultiplosQuince = cantMultiplosQuince + 1;
    } 

}

document.write(`La cantidad de valores positivos ingresados es: ${positivos} <br> `);
document.write(`La cantidad de valores negativos ingresados es: ${negativos} <br> `);
document.write(`La suma de valores pares ingresados es: ${cantPares} <br> `); 
document.write(`La cantidad de multiplos de 15 son: ${cantMultiplosQuince} <br> `); */

