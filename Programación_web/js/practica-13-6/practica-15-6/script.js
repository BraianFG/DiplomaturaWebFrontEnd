/* Realizar un programa que solicite la carga por teclado de dos números, 
si el primero es mayor al segundo informar su suma y diferencia, 
en caso contrario informar el producto y la división del primero respecto al segundo. 

Se ingresan tres notas de un alumno, si el promedio es mayor o igual a siete mostrar un mensaje "Promocionado".
Se ingresa por teclado un número positivo de uno o dos dígitos (1..99) mostrar un mensaje indicando 
si el número tiene uno o dos dígitos. 

(Tener en cuenta que condición debe cumplirse para tener dos dígitos un número entero) */

    numero1 = prompt('Ingrese un número');
    numero2 = prompt('Ingrese otro número');

    if (numero1 > numero2) {
        suma = numero1 + numero2;
        diferencia = numero1 - numero2;
        confirm("La suma de " +numero1+ " y " +numero2+ " es " +suma);
        confirm("La resta de "+numero1+" y " +numero2+ " es " +diferencia);
    }else{
        multiplicacion = numero1 * numero2;
        division = numero1 / numero2;
        confirm("La multiplicación de " +numero1+ " y " +numero2+ " es " +multiplicacion);
        confirm("La división de "+numero1+" y " +numero2+ " es " +division);
    }

/*
    nota1 = prompt('Ingrese la primera calificación');
    nota2 = prompt('Ingrese la segunda calificación');
    nota3 = prompt('Ingrese la tercera calificación');
*/