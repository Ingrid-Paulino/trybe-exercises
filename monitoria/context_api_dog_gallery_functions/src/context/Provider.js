import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

const INITIAL_STATE = [
  {
    dog: 'Thor',
    friend: 'Rafael',
    photo: 'https://www.petlove.com.br/images/breeds/193223/profile/original/golden_retriever-p.jpg?1532539102',
    raca: 'Golden Retriever',
  },
  {
    dog: 'Belinha',
    friend: 'Ana',
    photo: 'https://filhotes.canillc.com.br/imagens/maltes-micro-femea-orcamento.jpg',
    raca: 'Maltês',
  },
  {
    dog: 'Babalu',
    friend: 'Pedro',
    photo: 'https://tudosobrecachorros.com.br/wp-content/uploads/Dachshund.png',
    raca: 'Dachshund',
  },
];

function Provider({ children }) {
  const [dogs, setDogs] = useState(INITIAL_STATE);

  const addDog = (dogInfos) => {
    setDogs([...dogs, dogInfos]);
  };

  const contextValue = {
    dogs,
    addDog,
  };

  return (
    <Context.Provider value={ contextValue }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;