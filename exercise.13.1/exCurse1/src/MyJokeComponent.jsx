import React from 'react';

export default class MyJokeComponent extends React.Component {
  constructor() {
    super();
    console.log('constructor')

    this.state = {
      piada: 'Minha piada'
    };
  }

  componentDidMount() {
    console.log('componentDidMount');
  }


  render() {
    console.log('render')
    return (
      <span>{this.state.piada}</span>
    );
  }
}