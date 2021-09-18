import React from 'react';
import { Link } from 'react-router-dom'

export default class ProfileEx2 extends React.Component {
  render() {
    return (
      <div>
        const { ship } = this.props.match.params;
        <Link to="/">Voltar para Home</Link>
        <h1>Meu perfil: {this.props.name}, do navio {ship} </h1>
      </div>
      );
  }
}