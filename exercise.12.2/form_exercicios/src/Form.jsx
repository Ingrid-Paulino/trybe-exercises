import React, { Component } from 'react'

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      age: '',
      cpf: '',
      endereco: '',
      cidade: '',
      cargo: '',
      descCargo: '',
      termos: false,
    }

    this.handleChange = this.handleChange.bind(this)
  }

  // forma 1

  // handleChange(event) {
  //   this.setState({
  //     email:event.target.value,
  //   });
  // }

  // forma 2

  // handleChange({ target }) {
  //   const { name, value } = target;
  //   this.setState({
  //     [name]: value,
  //   });
  // }

  // forma 3 - tratando junto o checkbox

  handleChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  renderSelectInput() {
    const { age } = this.state;

    return (
      <label htmlFor="age">
        Idade:
        <select
          id="age"
          name="age"
          onChange={ this.handleChange }
          value={ age }
        >
          <option value="">Selecione</option>
          <option value="adult">Maior que 18</option>
          <option value="underage">Menor que 18</option>
        </select>
      </label>
    );
  }

  render() {
    const { name, email, age, cpf, endereco, cidade, cargo, descCargo, termos } = this.state

    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <fieldset>
            <legend>Informações pessoais</legend>
            <label htmlFor="name">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                maxLength="40"
                autofocus
                required
                onChange={ this.handleChange }
                value={ name }
            />
            </label>
            <label htmlFor="email">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="E-mail"
                maxLength="50"
                required
                onChange={ this.handleChange }
                value={ email }
            />
            </label>
            <label htmlFor="cpf">
              <input
                type="text"
                id="cpf"
                name="cpf"
                placeholder="CPF"
                maxLength="11"
                required
                onChange={ this.handleChange }
                value={ cpf }
            />
            </label>
            <label htmlFor="endereco">
              <input
                type="text"
                id="endereco"
                name="endereco"
                placeholder="Endereço"
                maxLength="200"
                required
                onChange={ this.handleChange }
                value={ endereco }
            />
            </label>
            <label htmlFor="">
              <input
                type="text"
                id="cidade"
                name="cidade"
                placeholder="Cidade"
                maxLength="28"
                required
                onChange={ this.handleChange }
                value={ cidade }
            />
            </label>
          </fieldset>
          <fieldset>
          <legend>Texto de Cargo e arquivos</legend>
          <label htmlFor="cargo">
              <input
                id="cargo"
                name="cargo"
                maxLength="500"
                required
                placeholder="Cargo"
                onChange={ this.handleChange }
                value={ cargo }
              />
            </label>
          <label htmlFor="descCargo">
              <textarea
                id="descCargo"
                name="descCargo"
                maxLength="500"
                required
                cols="30" rows="10"
                placeholder="Descrição do Cargo"
                onChange={ this.handleChange }
                value={ descCargo }
              />
            </label>
          <label htmlFor="">
            Adicione um aquivo em pdf
            <input type="file" />
            {/* escole arquivo/documento */}
          </label>
          </fieldset>

          <label htmlFor="termos">
              <input
                type="text"
                id="termos"
                name="termos"
                onChange={ this.handleChange }
                value={ termos }
              />
              Concordo com termos e acordos
            </label>
        </form>
      </div>
    );
  }
}
