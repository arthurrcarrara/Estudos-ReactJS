import "./App.css";

import React from "react";

import Mega from './components/loteria/Mega'
import Contador from "./components/contador/Contador";
import Input from "./components/formulario/Input";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import DiretaPai from "./components/comunicacao/DiretaPai";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import ParOuImpar from "./components/condicional/ParOuImpar";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Familia from "./components/basicos/Familia";
import Card from "./components/layout/Card";
import Aleatorio from "./components/basicos/Aleatorio";
import Fragmento from "./components/basicos/Fragmento";
import ComParametro from "./components/basicos/ComParametro";
import Primeiro from "./components/basicos/Primeiro";

export default () => (
  <div className="App">
    <h1>Fundamentos React </h1>

    <div className="Cards">

    <Card titulo="#12 - Desafio Mega Loteria" color="#2B9464">
      <Mega/>
    </Card>

    <Card titulo="#12 - Contador" color="#2B9464">
      <Contador numeroInicial={10}/>
      </Card>

    <Card titulo="#11 - Componente Controlado" color="#9B539C">
      <Input/>
      </Card>

    <Card titulo="#10 - Comunicacao Indireta" color="#E1D041">
        <IndiretaPai/>
      </Card>

    <Card titulo="#09 - Comunicacao Direta" color="#354458">
        <DiretaPai/>
      </Card>
      
      <Card titulo="#08 - Renderizacao Condicional" color="#D0C91F">
        <ParOuImpar numero={1}/>
        <UsuarioInfo usuario={{ nome: 'Fernando' }} />
        <UsuarioInfo  usuario={{  }}/>
      </Card>

      <Card titulo="#07 - Desafio Repeticao" color="#DC403B">
        <TabelaProdutos />
      </Card>

      <Card titulo="#06 - Repeticao" color="#5E412F">
        <ListaAlunos />
      </Card>

      <Card titulo="#05 - Componente com filhos" color="#00C8F8">
        <Familia sobrenome="Silva">
          <FamiliaMembro nome="Pedro" />
          <FamiliaMembro nome="Ana" />
          <FamiliaMembro nome="Gustavo" />
        </Familia>
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
