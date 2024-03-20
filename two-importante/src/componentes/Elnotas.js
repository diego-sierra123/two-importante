import React from "react";
import { useState, useEffect } from "react";
import '../css/Elnotas.css';


function Elnotas() {

    const [numo, setNum] = useState('')
    const [numt, setNumt] = useState('')
    const [numth, setNumth] = useState('')
    const [numfo, setNumfo] = useState('')
    const [numfi, setNumfi] = useState('')
    const [res, setRes] = useState('')

    useEffect(
        () => {
            console.log("La paginá si a cargado.")
        }, []
    );


    function determinar() {
        if (isNaN(numo) || isNaN(numt) || isNaN(numth) || isNaN(numfo) || isNaN(numfi)) {
            setRes('Ingrese correctamente los datos ya que ingreso un dato incorrecto o no numérico.');
        } else {
            if (numo < 0 || numo > 50 || numt < 0 || numt > 50 || numth < 0 || numth > 50 || numfo < 0 || numfo > 50 || numfi < 0 || numfi > 50) {
                setRes('Los datos deben ser mayores a 0 y menores a 50.');
            } else {
                setRes((parseFloat(numo) + parseFloat(numt) + parseFloat(numth) + parseFloat(numfo) + parseFloat(numfi)) / 5);
            }
        }
    }
    
    function borrar() {
        setNum('')
        setNumt('')
        setNumth('')
        setNumfo('')
        setNumfi('')
    }

    return (
        <div className="centrar">
            <form className="formulario" style={{ borderRadius: '20px', border: '4px solid gray' }}>
                <div className="text-center">
                    <h2 className="text-white"><b>CALCULAR EL PROMEDIO DE 5 NÚMEROS</b></h2>
                </div>
                <br />
                <div className="mb-3">
                    <label className="form-label text-white"><b>INGRESE EL 1 NÚMERO:</b></label>
                    <input type="number" placeholder="Ingrese un número" className="form-control" value={numo} onChange={(e) => setNum(e.target.value)} />
                    <div id="emailHelp" class="form-text text-white"><b>En este campo deberá ingresar el número.</b></div>
                </div>
                <div className="mb-3">
                    <label className="form-label text-white"><b>INGRESE EL 2 NÚMERO:</b></label>
                    <input type="number" placeholder="Ingrese un número" className="form-control" value={numt} onChange={(e) => setNumt(e.target.value)} />
                    <div id="emailHelp" class="form-text text-white"><b>En este campo deberá ingresar el número.</b></div>
                </div>
                <div className="mb-3">
                    <label className="form-label text-white"><b>INGRESE EL 3 NÚMERO:</b></label>
                    <input type="number" placeholder="Ingrese un número" className="form-control" value={numth} onChange={(e) => setNumth(e.target.value)} />
                    <div id="emailHelp" class="form-text text-white"><b>En este campo deberá ingresar el número.</b></div>
                </div>
                <div className="mb-3">
                    <label className="form-label text-white"><b>INGRESE EL 4 NÚMERO:</b></label>
                    <input type="number" placeholder="Ingrese un número" className="form-control" value={numfo} onChange={(e) => setNumfo(e.target.value)} />
                    <div id="emailHelp" class="form-text text-white"><b>En este campo deberá ingresar el número.</b></div>
                </div>
                <div className="mb-3">
                    <label className="form-label text-white"><b>INGRESE EL 5 NÚMERO:</b></label>
                    <input type="number" placeholder="Ingrese un número" className="form-control" value={numfi} onChange={(e) => setNumfi(e.target.value)} />
                    <div id="emailHelp" class="form-text text-white"><b>En este campo deberá ingresar el número.</b></div>
                </div>
                <div className="text-center">
                    <button type="button" className="btn btn-secondary" style={{ border: '2px solid black', marginTop: '5px', marginRight: '5px' }} onClick={borrar}>Borrar</button>
                    <button type="button" className="btn btn-primary" style={{ border: '2px solid black', marginTop: '5px', marginRight: '5px' }} onClick={determinar}>Determinar </button>
                </div>
                <br />
                {res && (
                    <div className="text-center" id="res" style={{ marginLeft: '10px', marginRight: '10px', borderColor: 'red', border: '7px' }}>
                        <h5 className='text-white'>{res}</h5>
                    </div>
                )}
            </form>
        </div>
    );

}

export default Elnotas;