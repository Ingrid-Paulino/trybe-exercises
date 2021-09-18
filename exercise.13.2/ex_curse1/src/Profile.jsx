import React from 'react';
import { Link } from 'react-router-dom'

export default class Profile extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">Voltar para Home</Link>
        <h1>Meu perfil: {this.props.name}</h1>
      </div>
      );
  }
}