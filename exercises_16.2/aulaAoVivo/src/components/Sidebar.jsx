import React from 'react';
import { connect } from 'react-redux';
import { selectMovie as selectMovieAction } from '../action'; // as muda o nome. mudei o nome pois 

class Sidebar extends React.Component {
  render() {
    // peguei esse categories do mapStateToProps
    const { categories, selectMovie } = this.props;
    return (
      <aside>
      {categories.map((category) => (
        <div key={ category.id }>
          <h3>{ category.name }</h3>
          <ul>
            {category.movies.map((movie) => (
              <li key={ movie.id }>
                { movie.title }
                {' '}
                was released in
                {' '}
                { movie.released }
                <button
                  type="button"
                  onClick={ () => selectMovie(movie, category) }
                >
                  Select
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
    );
  }
}

const mapStateToProps = (state) => ({
  // state vai me retornar um obj
  //movies é chave que criei no redux
  // a chave eu coloquei categories, mas posso colocar qualquer um , foi eu que criei essa chave
  categories: state.movies.categories,
});

const mapDispatchToProps = (dispatch) => ({
  //retorna um ojt tbm mas com uma função
  // o nome da chave eu que inventei pode ser qualquer um
  selectMovie: (selectedMovie, selectedCategory) => (
    dispatch(selectMovieAction(selectedMovie, selectedCategory))),
});

//coneta o react ao redx
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);