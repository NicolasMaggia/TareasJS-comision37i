//10.
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



//3.

let num1, num2, num3, num4, suma, producto

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
}
