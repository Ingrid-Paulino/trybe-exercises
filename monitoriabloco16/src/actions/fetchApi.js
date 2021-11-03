//actions/fetchApi
export const LOADING = 'LOADING';
export const API_SUCESS = 'API_SUCESS';
export const API_ERROR = 'API_ERROR';

const loading = () => ({
  type: LOADING,
});

const apiSucess = (results) => ({
  type: API_SUCESS,
  payload: results,
});

const apiError = (erro) => ({
  type: API_ERROR,
  payload: erro,
});

const fetchApi = () => async (dispatch) => {
  dispatch(loading);
  try {
    const query = 'monstros sa';
    const request = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
    const response = await request.json();
    dispatch(apiSucess(response.results));
  } catch (error) {
    dispatch(apiError(error.message));
  }
};

export default fetchApi;