import React from 'react';
import { Link } from 'react-router-dom'

export default class HowTo extends React.Component {
  render() {
    return (
    <div>
      <Link to="/">Voltar para Home</Link>
      <h1>Como navegar? na internet ou nos mares do caribe, saiba tudo aqui!</h1>
    </div>
    );
  }
}