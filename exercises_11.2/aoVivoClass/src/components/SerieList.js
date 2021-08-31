import React from 'react';
import Serie from './Serie';
import PropTypes from 'prop-types';

class SerieList extends React.Component {
  render() {
    const { catalog } = this.props;

    return (
      <div className="serie-list">
        {/* é necessario uma chave(key) sempre, o react precisa de uma identificação unica sempre */}
        {catalog.map((serie) => <Serie key={serie.id} serieInfo={ serie }/>)}
      </div>
    )
  }
}

SerieList.propTypes = {
  catalog: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image:PropTypes.string,
    genre:PropTypes.string,
  })).isRequired,
}

//estabeleço uma resposta se não for passado algo
SerieList.defaultProps = {
  // catalog: [] //coloco um array vazio para a aplicacão não quebrar
  
  //ou coloca as 
  catalog: [{
      id: 0,
      name: 'Nome Padrão',
      image: '',
      genre: '',
  }],

}

export default SerieList;