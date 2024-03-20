import React from "react";
import { Link } from "react-router-dom";

const Navegation = () => {
    return (
        <div>
            <div className="btn btn-success" style={{marginRight: "4px"}}>
                <Link to="/" style={{ color: "white", textDecoration: "none"}}> <b> Inicio</b> </Link>
            </div>
            <div className="btn btn-primary ml-2 mr-2" style={{marginRight: "4px"}}>
            <Link to="/about" style={{ color: "white", textDecoration: "none"}}><b>Graficos</b></Link>
            </div>
            <div className="btn btn-warning ml-2 mr-2" style={{marginRight: "4px"}}>
            <Link to="/contact" style={{ color: "white", textDecoration: "none"}}><b>Ejercicios</b></Link>
            </div>
            <div className="btn btn-dark ml-2 mr-2" style={{marginRight: "4px"}}>
            <Link to="/services" style={{ color: "white", textDecoration: "none"}}><b>Videos</b></Link>
            </div>
            <div className="btn btn-success ml-2 mr-2" style={{marginRight: "4px"}}>
            <Link to="/servicess" style={{ color: "white", textDecoration: "none"}}><b>Pruebas</b></Link>
            </div>
            <div className="btn btn-danger ml-2 mr-2" style={{marginRight: "4px"}}>
            <Link to="/servicesss" style={{ color: "white", textDecoration: "none"}}><b>Base</b></Link>
            </div>
        </div>
    );
};

export default Navegation;