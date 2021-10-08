export const SELECT_MOVIE = 'SELECT_MOVIE'; // GATANTE QUE EU NN ESCREVA ERRADO EM NENHUM LUGAR

export const selectMovie = (selectedMovie, selectedCategory) => ({
    type: SELECT_MOVIE,
    payload: { //declarei isso la no meu movieReducer
      // selectedMovie: selectedMovie,
      // selectedCategory: selectedCategory,
      //ou
      selectedMovie,
      selectedCategory,
    },
  });


