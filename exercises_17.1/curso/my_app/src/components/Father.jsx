// components/Father.jsx
import React, { Component } from 'react'
import Daugther from './Daugther'

export default class Father extends Component {
  render() {
    return (
      <div>
        <h3>Eu sou a Pai</h3>
        {/* Apartir do momento que eu consigo consumir com o context API, eu não preciso mais mais passar as propriedades por parametro para o component, como a linha a baixo  */}
        {/* <Daugther money={this.props.money} spendMoney={this.props.spendMoney}/> */}
        <Daugther />

      </div>
    )
  }
}
