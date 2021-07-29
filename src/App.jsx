import React, {useState} from 'react'; // No prestar atencion a esto
import './App.css';
import Button from "./components/Button";

function App() {
  const frasesBoton = ["Click si eres valiente", "Prueba otra frase", "Yo controlo el boton"];
  const [frasesChuck, setFrasesChuck] = useState([]);

  const getRandom = (value, fraseChuck) => {
    const prevFrase = value;
    const nextFrase = frasesBoton[parseInt(Math.random() * frasesBoton.length)]   
    if (prevFrase === nextFrase){ 
          getRandom(prevFrase, fraseChuck); 
        } else {
          if(frasesChuck.length <= 5 )setFrasesChuck([...frasesChuck,fraseChuck]); 
          return nextFrase;
        }
        return nextFrase;
  }

  return (
    <div className="app">
      <Button onClick={getRandom} />
      <div className="app__viejasFrases">
        <h3>ULTIMAS 5 FRASES</h3>
        {frasesChuck.map((frase, index) => <p key={index}>{frase}</p>)} 
      </div>
    </div>
  );
}

export default App;
