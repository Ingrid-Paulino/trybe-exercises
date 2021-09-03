import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    }
    // this.handleChange = this.handleChange.bind(this); //se usarmos ArrowFunction Não precisa de bind

    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  //Não é recomendado fazer uma função por input
  //se usarmos ArrowFunction Não precisa de bind
  handleChange = (event) => { 
    this.setState({ email: event.target.value });
  }

  handleChangePassword (event) { 
    this.setState({ password: event.target.value });
  }

  render() {
    const { email, password } = this.state;

    return (
    <section className="login-form">
      <h1>Login</h1>
      <form>
        {/* Referencia: https://pt-br.reactjs.org/docs/forms.html */}
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
        <label htmlFor="password">
          Password
          <input 
            type="password" 
            name="password" 
            id="password" 
            value={ password }
            onChange={ this.handleChangePassword } //handleChange é a função
          />
        </label>
      </form>
    </section>
    )
  }
}

export default LoginForm;
