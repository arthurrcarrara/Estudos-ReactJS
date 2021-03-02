import './App.css'

import React from "react";

import Familia from './components/basicos/Familia'
import Card from './components/layout/Card'
import Aleatorio from "./components/basicos/Aleatorio"
import Fragmento from "./components/basicos/Fragmento";
import ComParametro from "./components/basicos/ComParametro";
import Primeiro from "./components/basicos/Primeiro";


export default () => (
  <div className="App">
    <h1>Fundamentos React </h1>

      <div className="Cards">

        <Card titulo="#05 - Componente com filhos" color="#00C8F8">
          <Familia sobrenome="Ferreira"/>
        </Card>
        
        <Card titulo="#04 - Desafio Aleatorio" color="#FA6900">
          <Aleatorio min={1} max={100} />
        </Card>

        <Card titulo="#03 - Fragmento" color="#E94C6F">
          <Fragmento />
        </Card>

        <Card titulo="#02 - Com Parametro" color="#E8B71A">
          <ComParametro titulo="Situacao do aluno" aluno="Pedro" nota={9.3} />
        </Card>
        
        <Card titulo="#01 - Primeiro Componente" color="#588C73">
          <Primeiro />
        </Card>
      </div>

  </div>
);
