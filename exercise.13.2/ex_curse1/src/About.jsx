import React from 'react';
import { Link } from 'react-router-dom'

export default class About extends React.Component {
  render() {
    return (
    <div>
      <Link to="/">Voltar para Home</Link>
      <h1>Se meu navio de React é o teseu e eu refatorei todos os seus componentes...</h1>
    </div>
    );
  }
}