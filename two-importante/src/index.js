import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";
import App from './App';
import Uno from './componentes/Uno';
import Dos from './componentes/Dos';
import Tres from './componentes/Tres';
import Show from './componentes/show';
import Card from './componentes/Card';
import vehiculos from './componentes/vehiculos';
import Navegation from './componentes/Navegation';
import Prueba from "./componentes/Prueba";
import Base from "./componentes/Base";


const vehiList = vehiculos.map(v => {
  return <Card title={v.name} description={v.description} />
})

const routes = [
  {
    path: "/",
    element: (
      <div style={{ textAlign: "center", justifyContent: "center" }}>
        <br></br>
        <br></br>
        <h1>PROYECTO O PAGINAS DE PRUEBAS</h1>
        <br></br>
        <br></br>
        <div className="btn btn-success" style={{ marginRight: "4px" }}>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}> <b> Inicio</b> </Link>
        </div>
        <div className="btn btn-primary ml-2 mr-2" style={{ marginRight: "4px" }}>
          <Link to="/about" style={{ color: "white", textDecoration: "none" }}><b>Graficos</b></Link>
        </div>
        <div className="btn btn-warning ml-2 mr-2" style={{ marginRight: "4px" }}>
          <Link to="/contact" style={{ color: "white", textDecoration: "none" }}><b>Ejercicios</b></Link>
        </div>
        <div className="btn btn-dark ml-2 mr-2" style={{ marginRight: "4px" }}>
          <Link to="/services" style={{ color: "white", textDecoration: "none" }}><b>Videos</b></Link>
        </div>
        <div className="btn btn-success ml-2 mr-2" style={{ marginRight: "4px" }}>
          <Link to="/servicess" style={{ color: "white", textDecoration: "none" }}><b>Pruebas</b></Link>
        </div>
        <div className="btn btn-danger ml-2 mr-2" style={{ marginRight: "4px" }}>
          <Link to="/servicesss" style={{ color: "white", textDecoration: "none" }}><b>Base</b></Link>
        </div>
        <br></br>
        <br></br>
      </div>
    ),
  },
  {
    path: "/about",
    element: <App />,
  },
  {
    path: "/contact",
    element: (
      <div style={{ justifyContent: "center", alignContent: "center", textAlign: "center" }}>
        <br></br>
        <br></br>
        <Navegation />
        <br></br>
        <br></br>
        <Uno />
        <Dos />
        <Tres />
      </div>
    ),
  },

  {
    path: "/services",
    element: (
      <div style={{ justifyContent: "center", alignContent: "center", textAlign: "center" }}>
        <br></br>
        <br></br>
        <Navegation />
        <br></br>
        <br></br>
        {vehiList}
        <br></br>
        <Show />
        <br></br>
        <br></br>
      </div>
    ),
  },

  {
    path: "/servicess",
    element: (
      <div style={{ justifyContent: "center", alignContent: "center", textAlign: "center" }}>
        <br></br>
        <br></br>
        <Navegation />
        <br></br>
        <br></br>
        <div style={{ justifyContent: "center", alignContent: "center", textAlign: "center" }}>
          <Prueba />
        </div>
        <br></br>
        <br></br>
      </div>
    ),
  },

  {
    path: "/servicesss",
    element: (
      <div style={{ justifyContent: "center", alignContent: "center", textAlign: "center" }}>
        <br></br>
        <br></br>
        <Navegation />
        <br></br>
        <br></br>
        <div style={{ justifyContent: "center", alignContent: "center", textAlign: "center" }}>
          <Base />
        </div>
        <br></br>
        <br></br>
      </div>
    ),
  },
];

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);