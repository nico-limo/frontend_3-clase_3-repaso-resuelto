import React, {useState, useEffect} from 'react'
import axios from 'axios'
import chuck from "../images/chuck.png"
import "../App.css"

const Button = ({ onClick}) => {
    const [fraseBoton, setFraseBoton] = useState("Haz Click");
    const [chuckFrase, setChuckFrase] = useState("");

    useEffect( () => {
        async function fetchData() {
            const resultado = await axios.get('https://api.chucknorris.io/jokes/random')
            setChuckFrase(resultado.data.value);
          };
          fetchData();
    }, [fraseBoton])

    const handleFrase = () => {
        setFraseBoton(onClick(fraseBoton,chuckFrase))
    }
       
      

    return (
        <div className="app__nuevaFrase">
        <div>
        <button disabled={!chuckFrase ?? false} id="chuck_button" onClick={handleFrase}>{fraseBoton}</button>
        <p>{chuckFrase}</p>
        </div>
        <img id="chuck_norris" src={chuck} alt="chuck" />
      </div>
    )
}

export default Button
