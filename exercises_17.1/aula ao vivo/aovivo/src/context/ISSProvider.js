//src/context/ISSProvider.js
import React from 'react';
import { getCurrentISSLocation } from '../services/issAPI';
import ISSContext from './ISSContext';

class ISSProvider extends React.Component {
  constructor() {
    super();

    this.state = {
      latitude: -9.84303,
      longitude: -39.4796,
      error: null,
      isLoading: false,
    };
    this.getISSLocation = this.getISSLocation.bind(this);
  }

  async getISSLocation() {
    const result = await getCurrentISSLocation();
    this.setState({
      latitude: Number(result.iss_position.latitude),
      longitude: Number(result.iss_position.longitude),
    });
  }

  render() {
    const { children } = this.props;
    return (
      <ISSContext.Provider
        // temos varias formas de dados que podemos colocarmos no value;
        // value={ {nome: 'maite', lastName: This.state.lastname} }

        //Nesse caso é se estiver no estado
          // this.state = {
          //   name: 'Maite,
          //   lastname: 'caetano'
          // }
        //value={ {name: this.state.name', lastName: This.state.lastname} }

        //podemos passar so o estado tbm
        // value={{ ...this.state }}

        // posso passar funçoes tambem
        value={ { ...this.state, getISSLocation: this.getISSLocation } }

        //OBS: recomendo criar um objeto e passar ele, como no outro exemplo
      >
        {/* children pega todos os components que estao no app, passei como props */}
        {children} 
      </ISSContext.Provider>
    );
  }
}

export default ISSProvider;