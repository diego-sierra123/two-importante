import React from "react";
import { useState, useEffect } from "react";
import '../css/Dos.css';

function Dos() {

    const [num, setNum] = useState(0)

    useEffect(() => {
        console.log("Se a iniciado la página")
    }, [])

    function Incrementar() {
        setNum(num + 1);
    }

    function Decrementar() {
        setNum(num - 1);
    }

    function Reiniciar(){
        setNum(0);
    }

    return (
        <div className="centrar">

            <div className="text-center">
                <h1>EJERCICIO 2</h1>
                <br></br>
                <h4 className="text-dark"><b>INCREMENTO Y DECREMENTO DE UN NÚMERO</b></h4>
            </div>
            <br />
            <div className="mb-3">
                <label className="form-label text-dark"><b>NÚMERO:</b></label>
                <div id="emailHelp" class="form-text text-dark" style={{ fontSize: '25px' }}><b>{num}</b></div>
                <br></br>
                <button className="btn btn-danger mr-2" onClick={Decrementar}>Decrementar</button>
                <button className="btn btn-dark ml-2 mr-2" onClick={Reiniciar}>Reiniciar</button>
                <button className="btn btn-secondary ml-2" onClick={Incrementar}>Incrementar</button>
                
            </div>
        </div>
    )
}

export default Dos