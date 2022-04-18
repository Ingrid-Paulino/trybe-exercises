// components/GreatGrandmother.jsx
// irei começar a prover o estado, apartir do component bizavó. Então preciso colocar o meu Provider aqui.
import React, { Component } from 'react'
import Grandmother from '../components/Grandmother'
import MyContext from './MyContext'; //import

export default class GreatGrandmother extends Component {
  constructor(props) {
    super(props);

    //eu preciso ter o estado criado no component que eu quero prover
    this.state={
      money:10000000
    }

  this.handleSpendMoney = this.handleSpendMoney.bind(this);
  }

  handleSpendMoney() {
    this.setState((prevState) => (
      { money: prevState.money - 1000 }
    ));
  }

  render() {
    // vou passar esse obj como valor
    const contextValue = {
      money: this.state.money,
      spendMoney: this.handleSpendMoney
    }

    return (
      //Aqui colocamos o provider, e todo conteudo dentro dele
      // value é o valor que eu vou prover, esse value é uma props
      //colo eu quero passar o estado e a função handleSpendMoney, eu vou criar um objeto.
      <MyContext.Provider value={ contextValue }>
        {/* //dentro de qualquer component que esteja dentro do meu provider eu consigo acessar o value */}
      <div>
        <h1>Eu sou a bissavó</h1>
        {/* aqui tem so um component que é o grandmoder, mas se eu tivesse outro componente aqui, ele tambem conseguiria fazer acesso a esse meu provedor. pois assim ele estaria dentro da minha arvore. */}
        <Grandmother />
      </div>
      </MyContext.Provider>
    )
  }
}
