import React, { useState } from 'react'; 
import axios from 'axios';
import './App.css';
import Button from "./components/Button";
import Listado from './components/Listado';

function App() {
  // Se puede hacer un arreglo para almacenar datos similares
  const frases = ["Haz Click","Click si eres valiente","Prueba otra frase","Yo controlo el boton"];

  const indiceRandom = (arr) => Math.floor(Math.random() * arr.length); // Se puede retornar sin llaves cuando es una linea
  
  function fraseRandom(arreglo = [],fraseActual, fraseUno, fraseDos, fraseTres) {
    let indice = indiceRandom(arreglo);
    fetchData();
    return fraseActual === arreglo[indice] ? "Dale Click" : arreglo[indice];
  }

const [fraseChuck, setFraseChuck] = useState("") // Manera de react para crear estados
  
async function fetchData() {
   const resultado = await axios.get('https://api.chucknorris.io/jokes/random')
   setFraseChuck(resultado.data.value) // Mandera de react para actualizar estados
 };


  return (
    <div className="app">
      <Button 
      defaultFrase={frases[0]}
      arregloDeFrases={frases}
      onClick={fraseRandom}
      fraseChuck={fraseChuck}
      />
      <Listado listadoDeFrases={fraseChuck} />
    </div>

  )

}

export default App;