import React, { Component } from 'react';
  
class Cronometer extends Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  //ciclo de vida
  //soma1
  componentDidMount() {
    const ONE_SECOND = 1000;
    this.cronometerInterval = setInterval(() => {
      this.setState((prevState) => ({ seconds: prevState.seconds + 1}))
  }, ONE_SECOND); //executa de 1 em 1 segundo
}
  //quando chegar no 30, vai pro 0
  componentDidUpdate(prevProps, prevState) {
    // console.log(prevProps, prevState);
    //nunca ponha o this.setState aqui direto,pois cria um loop infinito
    const MAX_SECONDS = 30;
    //posso colocar o this.setState dentro de um if por exemplo, mas o lint reclama, entao o recomendado  é colocar em uma função e so chamar dentro do if, como o resetSeconds                                                                                                                                                                                                                                                                                                                                                                                                                                        
    if (prevState.seconds === MAX_SECONDS) {
      // alert('O tempo acabou!')
      this.resetSeconds()
      
    }
  }

  //limpa o intervalo, pq quando clico em desliga o cronometro, ele continua rodando
  componentWillUnmount() {
    clearInterval(this.cronometerInterval)
  }

  resetSeconds = () => {
    this.setState({ seconds: 0 })
  }

  

  render() {
    const { seconds } = this.state;

    return (
      <h2>
        {seconds}
      </h2>
    );
  }
}

export default Cronometer;