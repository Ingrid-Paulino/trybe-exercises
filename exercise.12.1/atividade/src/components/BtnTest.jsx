import React, { Component } from 'react'

export default class BtnTest extends Component {
  constructor()  {
    super();
    this.state = {
      numeroDecliques: 0,
    }
    this.handleClickSum = this.handleClickSum.bind(this)
  }
  handleClick1 = () => {
    console.log("Oiiii amigão!!!");
  }

  handleClick2 = () => {
    console.log("Oiiii coração!!!");
  }

  handleClick3 = () => {
    console.log("Oiiii Lindeza!!!");
  }

  handleClickSum() {
    this.setState((estadoAnterior, _props) => ({
      numeroDecliques: estadoAnterior.numeroDecliques + 1
    }))
  }

  getButtonColor(num) {
    return num % 2 === 0 ? 'green' : 'white';
  }

  render() {
    const {  numeroDecliques } = this.state;
    return (
      <div>
        <button onClick={ this.handleClick1 }>
          Inprimir Texto 1
        </button>
        <button onClick={ this.handleClick2 }>
          Inprimir Texto 2
        </button>
        <button onClick={ this.handleClick3 }>
          Inprimir Texto 3
        </button>

        <h3>Conta numeros de clicks </h3>

        <button 
          onClick={ this.handleClickSum }
          style={{ backgroundColor: this.getButtonColor(numeroDecliques)}}
        >
          Botao 4 | const =  {numeroDecliques}
        </button>
      </div>
    );
  }
}