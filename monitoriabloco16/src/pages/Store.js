import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Products from '../components/Products';
import fetchApi from '../actions/fetchApi';
import Header from '../components/Header';
import Cart from '../components/Cart';
import '../styles/store.css';

class Store extends Component {
  componentDidMount() {
    const { setFetchApi } = this.props;
    setFetchApi();
  }

  render() {
    const { theme } = this.props;
    return (
      <>
        <Header />
        <main className={ `main-${theme}-mode` }>
          <Products />
          <Cart />
        </main>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  theme: state.myReducer.theme,
});

const mapDispatchToProps = (dispatch) => ({
  setFetchApi: () => dispatch(fetchApi()),
});

Store.propTypes = ({
  setFetchApi: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
});

export default connect(mapStateToProps, mapDispatchToProps)(Store);