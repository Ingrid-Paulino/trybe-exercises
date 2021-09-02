import React from 'react';
import colors from './colorsData'
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    //guarda as informaçoes do filter
    this.state = {
      //vamos guardar aqui o valor do input
      filterText: '',
    };
    //estou possibilitando do hand.. acessar o this
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    // this.state.filterText = event.target.value; //eRRRRRRAAAAADOOO, PERIGO 
    // troca o valor do estado
    this.setState({ filterText: event.target.value })
    console.log(event.target.value);
  }

  render() {
    const { filterText } = this.state;

    return (
      <main>
        <h1>Filtre as cores:</h1>
        <input type="text" 
        value={ filterText } 
        onChange={ this.handleChange } />
        <ul>
          {colors
          .filter((element) => element.name.includes(filterText))
          .map((color) => (
            <li key={ color.hex }> 
              <div style={ { background: color.hex } } className="color-display" />
              {color.name }
            </li>
        ))}
        </ul>
      </main>
    );
  }
}

export default App;
