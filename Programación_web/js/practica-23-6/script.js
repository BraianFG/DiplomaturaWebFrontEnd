function iniciar() {
    let ingreso = document.querySelector("#password").value;

    document.querySelector(".ver").innerHTML=ingreso;

    if (!(ingreso.length >= 8)) {
        document.querySelector(".error0").innerHTML="La contraseña debe tener un mínimo de 8 caracteres";
    }

    if (!(ingreso[ingreso.length-1] == ".")) {
        document.querySelector(".error1").innerHTML="La contraseña debe tener un punto al final";
    }

    if(!(ingreso[ingreso.indexOf("A")] || ingreso[ingreso.indexOf("E")] ||
    ingreso[ingreso.indexOf("I")] || ingreso[ingreso.indexOf("O")] || ingreso[ingreso.indexOf("U")])){
        document.querySelector(".error2").innerHTML="La contraseña al menos debe tener una vocal";
    }

    if(!(ingreso[ingreso.indexOf("0")] || ingreso[ingreso.indexOf("1")] ||
    ingreso[ingreso.indexOf("2")] || ingreso[ingreso.indexOf("3")] || ingreso[ingreso.indexOf("4")] ||
    ingreso[ingreso.indexOf("5")] || ingreso[ingreso.indexOf("6")] || ingreso[ingreso.indexOf("7")] ||
    ingreso[ingreso.indexOf("8")] || ingreso[ingreso.indexOf("9")]) >=1){
        document.querySelector(".error3").innerHTML="La contraseña al menos debe tener un número";
    }

}