import React from "react";

// primeira letra tem que ser maiuscula
class HelloWorld extends React.Component {
  render() {

    const element = (
      <h3>Usar React vai ser Maravilhoso, AMEM</h3>
    );

    //a className abaixo nn funcionou - nao sei porque
    const element2 = React.createElement(
      'h1',
      {className: 'oi'},
      'Vai com tudo ingridzinha'
    );

    const currentLearning = (subject) => {
      return (<h2> Eu estou aprendendo {subject} </h2>)
    };
  
  return (
  // Se ouver mais de um conteudo, tem que ter um elemento pai
  // Podemos usar tags semanticas, Fragment 0u <></>
  <> 
    {/* React não usa class e sim className, pois class é uma palavra reservada para o react*/}
    <h1 className='hello-world'>Hello, World!</h1>
    <p>Esse é o meu primeiro App React</p>
    {element}
    {element2}
    <section>
      <p>Esse é o meu primeiro App React</p>
      {currentLearning('React')}
    </section>
  </>  
  );
}
};

export default HelloWorld;


function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);