import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import changeTheme from '../actions/changeTheme'; // importa o action

import lightSwitch from '../images/light-switch.png';
import lampLightMode from '../images/lamp-light-mode.png';
import lampDarkMode from '../images/lamp-dark-mode.png';
import sullivanLightMode from '../images/sullivan-light-mode.png';
import sullivanDarkMode from '../images/sullivan-dark-mode.png';
import '../styles/home.css';

class Home extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { theme } = this.props;
    const { setTheme } = this.props;
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  render() {
    const { theme } = this.props;
    return (
      <div className={ theme }>
        <h1 className="title-light-mode">SHOP S.A.</h1>
        <button
          className="light-switch-button"
          type="button"
          onClick={ this.handleClick }
        >
          <img
            className="light-switch"
            src={ lightSwitch }
            alt="Interruptor"
          />
        </button>
        <img
          className="lamp"
          src={ theme === 'light' ? lampLightMode : lampDarkMode }
          alt="Lampada"
        />
        <img
          className="sullivan"
          src={ theme === 'light' ? sullivanLightMode : sullivanDarkMode }
          alt="Sullivan"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  //acessamos isso na props la em cima
  //no lugar de theme, posso colocar qualquer chave
  theme: state.myReducer.theme, // tem o valor do meu state la no reducer
});

const mapDispatchToProps = (dispatch) => ({
  // posso novamente colocar o nome que eu quiser na chave
   //dipatch dispara uma action
  //  dentro dele eu ponho qual action eu quero
  //  quando eu chamar essa função la em cima ela vai disparar
  setTheme: (mode) => dispatch(changeTheme(mode)),
  //se eu tivesse outra action era so colocar em baixo
  //  setName: (mode) => dispatch(changeTheme(mode));
});

Home.propTypes = ({
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
});

//1°ler - 2°altera
// tem que ser sempre essa ordem
export default connect(mapStateToProps, mapDispatchToProps)(Home)
//se nao tiver uma das, coloque null
// export default connect(null, mapDispatchToProps)(Home)
// export default connect(mapStateToProps, null)(Home)

