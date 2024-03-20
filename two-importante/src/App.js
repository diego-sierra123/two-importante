import './App.css';
import One from './componentes/One';
import Two from './componentes/two';
import Otro from './componentes/Otro';
import Juan from './componentes/Juan';
import Card from './componentes/Card';
import vehiculos from './componentes/vehiculos';
import Navegation from './componentes/Navegation';

function App() {
  

  const vehiList = vehiculos.map(v =>{
    return <Card title={v.name} description={v.description} />
  })

  return (
    <div className="App">
      <br></br>
      <br></br>
      <Navegation />
      <br></br>
      <br></br>
      <h1 style={{ justifyContent: 'center' }}>TITULO</h1>
      <br></br>
      <br></br>
      <h2>GRAFICA 1</h2>
      <br></br>
      <One />
      <br></br>
      <br></br>
      <h2>GRAFICA 2</h2>
      <br></br>
      <Two />
      <br></br>
      <br></br>
      <h2>GRAFICA 3</h2>
      <br></br>
      <Otro />
      <br></br>
      <br></br>
      <h2>GRAFICA 4</h2>
      <br></br>
      <Juan />
      <br></br>
      <br></br>
    </div>
  );
}

export default App;
