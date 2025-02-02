import { useState } from "react";
import "./App.css";
import Equivalents from "./data/equivalents.json";
import Unidades from "./data/unidadesWe.json";

function App() {
  const INITIAL_FROM = "kms";
  const INITIAL_TO = "mts";

  const [result, setResult] = useState(0);
  const [valor, setValor] = useState(1);
  const [prueba, setPrueba] = useState(0);
  const [value, setValue] = useState(0);
  const [from, setFrom] = useState(INITIAL_FROM);
  const [to, setTo] = useState(INITIAL_TO);

  const handleValue = (event) => {
        setValue(event.target.value)
  }

  const handleFrom = (event) => {

    setFrom(event.target.value)
  }

  const handleTo = (event) => {
    console.log(event.target.value)
    setTo(event.target.value)
  }
  const handleRes = () => {
    setResult()
  }
  
  const convert= () => {
    // 1er en el json obtener el valor por el cual debo multiplicar el valor
    const equivalent = value * Equivalents[from][to]
    setResult(equivalent);
  }

  const Reiniciar = () => {
    setResult(0)
    setValue(0)
    setFrom(INITIAL_FROM)
    setTo(INITIAL_TO)
    setValor(1)
    setPrueba(0)
  }
  const contador = () => {
    setValor(valor+1)
  }
  const funcionX = () => {
    setPrueba(prueba+2)
  }

  return (
    <>
      <h1>Conversor</h1>
      
      <p className="result">{result +" "+Equivalents[to]["label"]} </p>
      <p className="result">{valor} </p>
      <p>{prueba}</p>
      <hr />
      <div className="inputs">
        <input 
          type="number" 
          name="base" 
          id="base" 
          placeholder="valor" 
          value={value}
          onChange={(e)=>{handleValue(e)}}
          min={0}
          />
        <select 
          name="" 
          id="" 
          value={from}
          onChange={handleFrom}
        >
          {
            Unidades.map(
              (cadena)=>
                (<option value={cadena}>{Equivalents[cadena]["label"]}</option>)
            )
          }
        </select>
        <p className="emoji">👉</p>
        <select 
          name="" 
          id="" 
          value={to}
          onChange={handleTo}
        >
          {
            Unidades.map(
              (cadena)=>
                (<option value={cadena}>{Equivalents[cadena]["label"]}</option>)
            )
          }
        </select>

        <button
          onClick={convert}
        >Convertir</button>
        
        <button
          onClick={Reiniciar}
        >  
          Reiniciar</button>
        <button
        onClick={contador}
        >
          Contador
        </button>
        <button
        onClick={funcionX}
        
        >Funcion</button>

      </div>
      

    </>
  );
}

export default App;
