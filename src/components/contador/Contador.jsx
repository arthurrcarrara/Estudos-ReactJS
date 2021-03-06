// import React from 'react'
/*
export default class Contador extends React.Component {
    
}
Isso seria uma maneira de escrever
*/

//Ou escrever da seguinte maneira:
import "./Contador.css"
import React, { Component } from "react";
import Display from "./Display";
import Botoes from "./Botoes";
import PassoForm from "./PassoForm";

class Contador extends Component {
  state = {
    numero: this.props.numeroInicial || 0,
    passo: this.props.passoInicial || 5,
  };

  inc = () => {
    this.setState({
      numero: this.state.numero + this.state.passo,
    });
  };

  dec = () => {
    this.setState({
      numero: this.state.numero - this.state.passo,
    });
  };

  setPasso = (novoPasso) => {
    this.setState({
      passo: novoPasso,
    });
  };

  render() {
    return (
      <div className="Contador">
        <h2>Contador</h2>
        {/* <h3>{this.state.numero}</h3> */}
        <Display numero={this.state.numero}/>

        {/* <div>
          <label htmlFor="passoInput">Passo: </label>
          <input
            id="passoInput"
            type="number"
            value={this.state.passo}
            onChange={this.setPasso}
          />
        </div> */}
        <PassoForm passo={this.state.passo} setPasso={this.setPasso}/>

        {/* <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button> */}
        <Botoes setInc={this.inc} setDec={this.dec}/>
      </div>
    );
  }
}

export default Contador;
