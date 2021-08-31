// import React from 'react';
import React, {Component} from 'react'; 
// import { Fragment } from 'react';
import HelloWorld from './HelloWorld';
import UseMap from './UseMap';

import './App.css';

// --------------------------------------------

// Essa forma é com função, mas eu recomendo usar class. Exemplo mais abaixo!


// function App() {
//   const element = (
//       <h3>Usar React vai ser Maravilhoso, AMEM</h3>
//     );

//     // esse elemento é igual o de cima, so a forma criada que foi diferente
//     const element2 = React.createElement(
//       'h1',
//       {className: 'hello-world'},
//       'Vai com tudo ingridzinha'
//     );

//   return (
//   // Se ouver mais de um conteudo, tem que ter um elemento pai
//   // Podemos usar tags semanticas, Fragment 0u <></>
//   <Fragment> 
//     {/* React não usa class e sim className, pois class é uma palavra reservada para o react*/}
//     <h1 className='hello-world'>Hello, World!</h1>
//     <p>Esse é o meu primeiro App React</p>
//     {element}
//     {element2}
//   </Fragment>
//   );
// }

//---------------------------------------

// destruturei o component, se eu não tivesse destruturado eu usaria - React.Component -> pois React é um objeto por isso podemos usar o . 
//dessa forma criamos arquivos diferentes com pedaços de codigo
class App extends Component {
  render() {
    return (
      <>
      <HelloWorld />
      <UseMap />
      </>
    );
  }
}

export default App;
