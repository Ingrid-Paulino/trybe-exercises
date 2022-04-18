import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

const INITIAL_STATE = [
  {
    dog: 'Thor',
    friend: 'Rafael',
    photo: 'https://www.petlove.com.br/images/breeds/193223/profile/original/golden_retriever-p.jpg?1532539102',
  },
  {
    dog: 'Belinha',
    friend: 'Ana',
    photo: 'https://filhotes.canillc.com.br/imagens/maltes-micro-femea-orcamento.jpg',
  },
  {
    dog: 'Babalu',
    friend: 'Pedro',
    photo: 'https://tudosobrecachorros.com.br/wp-content/uploads/Dachshund.png',
  },
];

class Provider extends Component {
  constructor() {
    super();

    this.state = {
      dogs: INITIAL_STATE,
    };

    this.addDog = this.addDog.bind(this);
  }

  addDog(dogInfos) {
    this.setState((prevState) => ({
      dogs: [...prevState.dogs, dogInfos],
    }));
  }

  render() {
    const { dogs } = this.state;
    const { children } = this.props;
    const contextValue = {
      dogs,
      addDog: this.addDog,
    };
    return (
      <Context.Provider value={ contextValue }>
        { children }
      </Context.Provider>
    );
  }
}

//forma 1
// const { oneOfType, arrayOf, node } = PropTypes;

// Provider.propTypes = {
//   children: oneOfType([arrayOf(node), node]).isRequired,
// };

//forma 2 - muito mais rapido e eficaz
//o node ja valida qualquer tipo de dado (number, string , booleano...)
Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;