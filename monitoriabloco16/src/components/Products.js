// components/Products
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addCart } from '../actions/changeCart';

class Products extends Component {
  render() {
    const { carregando, error, productList, setAddCart } = this.props;
    console.log(carregando);
    if (carregando) <div>Loading...</div>;
    if (error) <div>{ error }</div>;
    return (
      <div className="cards-container">
        { productList.map((product) => {
          const { id, title, thumbnail, price } = product;
          return (
            <div
              key={ id }
              className="product-card"
            >
              <img className="product-img" src={ thumbnail } alt={ title } />
              <p className="product-name">{ title }</p>
              <div className="price-button">
                <p>{ `R$${price.toFixed(2)}` }</p>
                <button
                  type="button"
                  className="add-button-card"
                  onClick={ () => setAddCart(product) }
                >
                  +
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setAddCart: (product) => dispatch(addCart(product)),
});

const mapStateToProps = (state) => ({
  carregando: state.shop.loading,
  error: state.shop.error,
  productList: state.shop.productList,
});

Products.propTypes = ({
  carregando: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  productList: PropTypes.arrayOf(PropTypes.object).isRequired,
  setAddCart: PropTypes.func.isRequired,
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);

