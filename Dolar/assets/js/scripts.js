let id = parseInt(0);
let iterar;

const ejecutar = async () => {
    const url = "https://www.dolarsi.com/api/api.php?type=valoresprincipales";
    const respuesta = await fetch(url);
    const respuestaJSON = await respuesta.json();
    generarCard(respuestaJSON);
}

    const variables = () =>{
        id = id + 1;

        agencia = iterar.casa.agencia;
        venta = iterar.casa.venta;
        compra = iterar.casa.compra;
    }

    const generarCard = (respuestaJSON) => {
        for (iterar of respuestaJSON) {

        variables();

            document.querySelector("#ver").innerHTML += ` 
                    <div class="card card${id}">
                    <div class="card-title">
                    <p class="title">${iterar.casa.nombre}</p>
                    </div>
                        <div class="card-content card-content">
                        <p>Venta : ${venta}</p>
                        <p>Compra:${compra}</p>
                        </div>
                    </div>
                    </div>`;

            validar();
        }
    }

    const validar = () => {
        switch (agencia) {
            case "311":
                document.querySelector(".card3").style.display = "none";
                //Dolar Soja
                break;

            case "141":
                document.querySelector(".card9").style.display = "none";
                //Argentina
                break;

            case "302":
                document.querySelector(".card8").style.display = "none";
                //Dolar
                break;

            case "399":
                document.querySelector(".card6").style.display = "none";
                //Bitcoin
                break;

            case "406":
                document.querySelector(".card7").style.display = "none";
                //Bitcoin
                break;
        }
        CalcularDolarSolidario();
        agregar();

        agregarDolarTurista();
    }

    const CalcularDolarSolidario = () => {
        if (agencia === "349") {
            let dolarSolidarioCotizacion = iterar.casa.venta;
            dolarSolidarioCotizacion = parseFloat(dolarSolidarioCotizacion);

            let dolarSolidarioRecargo = 65 / 100;
            let dolarSolidarioRecargo2 = dolarSolidarioCotizacion * dolarSolidarioRecargo;
            dolar = dolarSolidarioCotizacion + dolarSolidarioRecargo2;
            dolar = parseFloat(dolar);

        }
    }

    const agregar = () => {
        class dolarSolidario {
            constructor(nombre, venta, id) {
                this.id = id
                this.nombre = nombre
                this.venta = venta
            };
        }
        cotizacion = new dolarSolidario('Dolar Solidario', dolar.toFixed(2), '1');

        document.querySelector(".card0").innerHTML = ` 
        <div class="card-title">
        <p class="title">${cotizacion.nombre}</p>
        </div>
            <div class="card-content">
            <p>Cotización: ${cotizacion.venta}</p>
            </div>
        </div>`;
    }

    const agregarDolarTurista = () => {
        if (agencia === "406") {
            dolarTuristaCotizacion = iterar.casa.venta;

            class dolarTurista {
                constructor(nombre, venta, id) {
                    this.id = id
                    this.nombre = nombre
                    this.venta = venta
                };
            }
            cotizacionTurista = new dolarTurista('Dolar Turista', dolarTuristaCotizacion, '2');
            document.querySelector(".card00").innerHTML = ` 
            <div class="card-title">
            <p class="title">${cotizacionTurista.nombre}</p>
            </div>
                <div class="card-content">
                <p>Cotización: ${cotizacionTurista.venta}</p>
                </div>
            </div>`;
        }

    }

ejecutar();

