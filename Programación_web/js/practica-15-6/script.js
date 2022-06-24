function calculadora() {
    alert("Para inciar la calculadora,elija opercación");
    alert("Para sumar seleccione 1 \n Para restar seleccione 2 \n Para multiplicar seleccione 3 \n Para dividir seleccione 4");
    let operar = prompt("Ingrese alguna de las opciones validas");
    operar = parseInt(operar);

    switch (operar) {

        
        case 1:
            alert("eligió sumarlo");
            num1 = prompt("ingrese un número");
            num2 = prompt("ingrese otro número");
            num1 = parseInt(num1);
            num2 = parseInt(num2);
            num3 = num1 + num2;
            alert("La suma entre " +num1+ " y "+num2+ " es "+num3);
            break;

        case 2:
            alert("eligió restarlo");
            num1 = prompt("ingrese un número");
            num2 = prompt("ingrese otro número");
            num1 = parseInt(num1);
            num2 = parseInt(num2);
            num3 = num1 - num2;
            alert("La resta entre " +num1+ " y "+num2+ " es "+num3);
            break;

        case 3:
            alert("eligió multiplicarlo");
            num1 = prompt("ingrese un número");
            num2 = prompt("ingrese otro número");
            num1 = parseInt(num1);
            num2 = parseInt(num2);
            num3 = num1 * num2;
            alert("La multiplicación entre " +num1+ " y "+num2+ " es "+num3);
            break;

        case 4:
            alert("eligió dividirlo");
            num1 = prompt("ingrese un número");
            num2 = prompt("ingrese otro número");
            num1 = parseInt(num1);
            num2 = parseInt(num2);
            num3 = num1 / num2;
            alert("La división entre " +num1+ " y "+num2+ " es "+num3);
            break;

        default:
            alert("Ingrese alguna de las opciones validas");
            break;
    }
}    