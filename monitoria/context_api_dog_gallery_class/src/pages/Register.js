import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Context from '../context/Context';

class Register extends Component {
  constructor() {
    super();

    this.state = {
      dog: '',
      friend: '',
      photo: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { addDog } = this.context;
    const { dog, friend, photo } = this.state;
    return (
      <>
        <header>
          <h1>Register</h1>
          <nav>
            <Link to="/">Gallery</Link>
          </nav>
        </header>
        <main className="register">
          <form>
            <input
              type="text"
              placeholder="Dog's name"
              name="dog"
              value={ dog }
              onChange={ this.handleChange }
            />
            <input
              type="text"
              placeholder="Friend's name"
              name="friend"
              value={ friend }
              onChange={ this.handleChange }
            />
            <input
              type="text"
              placeholder="Photo URL"
              name="photo"
              value={ photo }
              onChange={ this.handleChange }
            />
            <button type="button" onClick={ () => addDog(this.state) }>Add</button>
          </form>
        </main>
      </>
    );
  }
}

Register.contextType = Context;

export default Register;