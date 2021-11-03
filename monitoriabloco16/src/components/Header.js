import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { theme } = this.props;
    return (
      <header className={ `header-${theme}-mode` }>
        <Link to="/" className={ `title-store-${theme}-mode` }>SHOP S.A.</Link>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  theme: state.myReducer.theme,
});

Header.propTypes = ({
  theme: PropTypes.string.isRequired,
});

export default connect(mapStateToProps)(Header);