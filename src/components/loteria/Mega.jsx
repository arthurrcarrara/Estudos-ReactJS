import React, { useState } from "react";
import './Mega.css'

export default props => {

  const [valores, setValores] = useState(Array(6).fill(0))
  const [numeroValores, setNumeroValores] = useState(valores.length)


  function numRandom() {
    return Math.floor(Math.random() * 100);
    // console.log(numero);
  }

  const gerarValores = () => {
      const arrNumeros = [];
  
      for (let i = 0; i < numeroValores; i++) {
        let value = numRandom();
        // console.log(value)

        arrNumeros.push(value)
      }
      arrNumeros.sort((n1, n2) => (n1 - n2))
      return setValores(arrNumeros);
    }

  function mudarValores(e){
    setNumeroValores(e.target.value)
  }

  const valoresLI = valores.map( valor => {
    return (
      <li>
        {valor}
      </li>
    )
  })



  return (
    <div className="Mega">
      <h1>Mega Loteria</h1>
        <div className="ContainerLi">
          {valoresLI}
        </div>
        <div className="MegaButton">
          <label>Numeros a serem sorteados</label>
          <input type="number" value={numeroValores} onChange={mudarValores}/>
        </div>
        <button onClick={gerarValores}>Gerar numeros</button>
    </div>
  );
};
