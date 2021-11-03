// components/Daugther.jsx
import React, { Component } from 'react'
import MyContext from './MyContext'

export default class Daugther extends Component {
  render() {
    return (
      <div>
        <h4>Eu sou a Filhaaaaaaaaaaaaaaa</h4>
        {/* Aqui consumimos as propriedades dos valores que foi passado pelo provider */}
        {/* abri chaves pois dentro vou usar js */}
        {/* dentro preciso usar uma função */}
        {/* recebo como parametro o value, que nesse caso é o objeto la do provider */}
      <MyContext.Consumer>
        {
          // value => console.log(value)
          // tire this.props.money, e coloque value.money, pq agora o money esta dentro de value
          // mesma coisa acontece com o value.spendMoney
          value => (
            <div>
              <p>{`Eu tenho ${value.money} pra gastar`}</p>
             <button onClick={value.spendMoney}>PEDIR UMM IFOOD</button> {/* modifica a função */}
            </div>
          )
        }
      </MyContext.Consumer>
      </div>
    )
  }
}