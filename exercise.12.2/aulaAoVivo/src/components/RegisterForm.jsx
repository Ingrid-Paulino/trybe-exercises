import React from "react";

class RegisterForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) { 
    //event.target.name vai funcionar para todos os inputs
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { email } = this.state;
    alert(` O login foi realizado ${email} `)
  }

  render() {
    const { name, email, password } = this.state;

    return (
      <section className="register-form">
      <h1>Register</h1>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">
                  Nome:
                  <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    value={ name }
                    onChange={ this.handleChange } //handleChange é a função
                  />
        <label htmlFor="email">
                  Email:
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    value={ email }
                    onChange={ this.handleChange } //handleChange é a função
                  />
                </label>
                </label>
                <label htmlFor="password">
                  Password
                  <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    value={ password }
                    onChange={ this.handleChange }
                  />
                </label>
                <button type="submit">Fazer login</button>
      </form>
    </section>
    )
  }
}

export default RegisterForm;