import React, {useState} from "react";

function Show(){
    // Estados
    const [show, setShow] = useState(true);

    // Eventos
    const handleClick = (event) => {
    setShow(!show);
    };

    //Renderizado condicional
    return(
        <div>
            <button className="btn btn-dark" onClick={handleClick} >{show ? "Hide" : "Show"}
                Text
            </button>
            <br />
            <br />
            {show && <h2>HIDE ME</h2>}
            <br />
            <br />
        </div>
    );
}

export default Show;