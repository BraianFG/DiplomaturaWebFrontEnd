ejecutar = async () => {

    let id = parseInt(0);
    let agencia;
    let dolarSolidario = parseInt(0);
    const url = "https://www.dolarsi.com/api/api.php?type=valoresprincipales";
    const respuesta = await fetch(url);
    const respuestaJSON = await respuesta.json();

    for (let iterar of respuestaJSON) {
        document.querySelector("#ver").innerHTML += ` 
                <div class="card card${id}">
                <div class="card-title">
                <p class="title">${iterar.casa.nombre}</p>
                </div>
                    <div class="card-content">
                    <p>Venta : ${iterar.casa.venta}</p>
                    <p>Compra:${iterar.casa.compra}</p>
                    </div>
                </div>
                </div>`;

                
        agencia = iterar.casa.agencia;

        switch (agencia) {
            case "311":
                document.querySelector(".card2").style.display = "none";
                break;

            case "141":
                document.querySelector(".card8").style.display = "none";
                break;

            case "302":
                document.querySelector(".card7").style.display = "none";
                break;

            case "399":
                document.querySelector(".card5").style.display = "none";
                break;
        }

        id = id + 1;
        console.log(iterar.casa)
        if(iterar.casa.agencia === "349"){
            dolarSolidarioCotizacion = iterar.casa.venta ;
            dolarSolidarioCotizacion = parseInt(dolarSolidarioCotizacion);

            dolarSolidarioRecargo =   65 /100;
            dolarSolidarioRecargo2 = dolarSolidarioCotizacion *  dolarSolidarioRecargo;
            dolar = dolarSolidarioCotizacion + Math.trunc(dolarSolidarioRecargo2);

        }
    }
    agregar();

}
ejecutar();

agregar = () => {
    class dolarSolidario {
        constructor(nombre, venta, id) {
            this.id = id
            this.nombre = nombre
            this.venta = venta
        };
    }
    cotizacion = new dolarSolidario('Dolar Solidario', dolar,'1');      

    document.querySelector(".card9").innerHTML = ` 
    <div class="card-title">
    <p class="title">${cotizacion.nombre}</p>
    </div>
        <div class="card-content">
        <p>Cotización: ${cotizacion.venta}</p>
        </div>
    </div>`;
}
