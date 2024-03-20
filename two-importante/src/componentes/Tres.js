import React from "react";
import { useState, useEffect } from "react";
import '../css/Tres.css';

function Tres() {

    const [cantidad, setCantidad] = useState(0)
    const [ope, setOpe] = useState(0)
    const [res, resSet] = useState('')

    useEffect(() => {
        console.log("Se ha iniciado la página")
    }, [])

    function Calcular() {
        let numero, calculo = 0;
        if (cantidad > 0 && (ope >= 1 && ope <= 2)) {
            let operacion = +ope;
            for (let index = 0; index < cantidad; index++) {
                numero = prompt("Ingrese el " + (index + 1) + " número");
                numero = parseFloat(numero);
                if (!isNaN(numero)) {
                    if (operacion === 1) {
                        calculo = calculo + numero; 
                    } else if (operacion === 2) {
                        calculo = calculo - numero; 
                    } 
                    resSet(calculo);
                } else {
                    resSet("El dato ingresadono es un número válido. Por favor, ingrese otro dato.");
                    return;
                }
            }
        } else {
            resSet("El valor ingresado no es válido en el primer campo o la operación no es válida.");
        }
    }

    return (
        <div className="centrar">
            <div className="text-center">
                <h1>EJERCICIO 3</h1>
                <br />
                <h4 className="text-dark"><b>CALCULADORA</b></h4>
            </div>
            <br />
            <div className="mb-3">
                <label className="form-label text-dark"><b>Cuántos números va a ingresar:</b></label>
                <br />
                <br />
                <input value={cantidad} onChange={(e) => setCantidad(e.target.value)} placeholder="Números que calculará" type="number" style={{ fontSize: '15px' }}></input>
                <br />
                <br />
                <label className="form-label text-dark"><b>Qué operación va a realizar (1) Suma, (2) Resta:</b></label>
                <br />
                <br />
                <input value={ope} onChange={(e) => setOpe(e.target.value)} placeholder="Ingrese el número de operación" type="number" style={{ fontSize: '15px' }}></input>
                <br />
                <br />
                <br />
                <button className="btn btn-danger mr-2" onClick={Calcular}>Calcular</button>
            </div>
            <div>
                <p>Resultado: {res}</p>
            </div>
        </div>
    )
}

export default Tres;