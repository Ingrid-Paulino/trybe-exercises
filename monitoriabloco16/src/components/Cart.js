//components/Carts
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeCart } from '../actions/changeCart';

class Cart extends Component {
  render() {
    const { theme, listCart, totalItems, totalPrice, setRemoveCart } = this.props;
    return (
      <div className={ `cart-${theme}-mode` }>
        <div className="num-items">{ totalItems }</div>
        <h2 className={ `title-cart-${theme}-mode` }>Carrinho de compras</h2>
        { listCart.map((product, index) => {
          const { id, price, thumbnail, title } = product;
          return (
            <div key={ index } className="card-cart">
              <img className="card-cart-img" src={ thumbnail } alt={ title } />
              <span>
                <p>{ id }</p>
                <p>{ `R$${price.toFixed(2)}` }</p>
              </span>
              <button
                type="button"
                value={ id }
                onClick={ () => setRemoveCart(product) }
                className="remove-button-card"
              >
                x
              </button>
            </div>
          );
        }) }
        <h3>{ `Total: R$${totalPrice.toFixed(2)}` }</h3>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setRemoveCart: (product) => dispatch(removeCart(product)),
});

const mapStateToProps = (state) => ({
  theme: state.myReducer.theme,
  listCart: state.cartReducer.listCart,
  totalItems: state.cartReducer.totalItems,
  totalPrice: state.cartReducer.totalPrice,
});

Cart.propTypes = ({
  theme: PropTypes.string.isRequired,
  listCart: PropTypes.arrayOf(PropTypes.object).isRequired,
  totalItems: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
  setRemoveCart: PropTypes.func.isRequired,
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
