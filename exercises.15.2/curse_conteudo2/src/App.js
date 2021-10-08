import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      email: '',
    };
  }

  handleInput(e) {
    const { name, value } = e.target;
    console.log(name, value);
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <h1>Teste de inputs</h1>
        <p>
          Nome:
          <input
            onChange={(e) => this.handleInput(e)}
            name='nome'
            value={this.state.nome}
          />
        </p>
        <p>
          E-mail:
          <input
            onChange={(e) => this.handleInput(e)}
            name='email'
            value={this.state.email}
          />
        </p>
      </div>
    );
  }
}
export default App;

// Agora, vamos testar se esses componentes estão na tela corretamente, e se conseguimos digitar valores neles no teste. Para nos ajudar a identificar os campos, é interessante utilizar a propriedade data-testid nos inputs , como veremos a seguir. Coloque as propriedades e depois começaremos os testes:
<p>
//  Nome:
//  <input
//    onChange={(e) => this.handleInput(e)}
//    name='nome'
      data-testid='input-nome'
//    value={this.state.nome}
//  />
//  </p>
//  <p>
//  E-mail:
//  <input
//    onChange={(e) => this.handleInput(e)}
//    name='email'
      data-testid='input-email'
//    value={this.state.email}
//  />
</p>