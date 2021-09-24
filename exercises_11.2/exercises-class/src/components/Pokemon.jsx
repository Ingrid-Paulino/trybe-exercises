import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Pokemon extends Component {
  render() {
    const { pokemon: { name, type, averageWeight, image } } = this.props;

       // Fizemos um map no nosso array de pokemons
    // que vai renderizar o componente Pokemon para cada item do array.
    // Então, recebemos a props "pokemon" que é um objeto do array de pokemons
    // Nesses objetos temos informações como name, type e etc, então
    // desestruturamos essas informações e renderizamos em uma tag HTML,
    // no caso, utilizamos um <p>.

    return (
      // Coloquei das duas formas a props, destruturado e nao distruturado
      <section className="pokemon">
        <h1>{this.props.pokemon.name}</h1> <br />
        <h1>{name}</h1> <br />
        <br />

        <h2>{this.props.pokemon.type}</h2> <br />
        <h2>{type}</h2> <br />
        <br />

        <p>{ `Average weight: ${ this.props.pokemon.averageWeight.value} ${ this.props.pokemon.averageWeight.measurementUnit}`}</p> <br />
        <p>{`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p> <br />
        <br />

        <img src={this.props.pokemon.image} alt={this.props.pokemon.name} /> <br />
        <img src={image} alt={`${name} sprite`} /> <br />
        <br />
      </section>
    );
  }
  }
  Pokemon.propTypes = {
    pokemon: PropTypes.shape({
      name: PropTypes.string,
      type: PropTypes.string,
      averageWeight: PropTypes.shape({
        measurementUnit: PropTypes.string,
      value: PropTypes.number,
      }),
      image: PropTypes.string,
      id: PropTypes.number,
    })
}
