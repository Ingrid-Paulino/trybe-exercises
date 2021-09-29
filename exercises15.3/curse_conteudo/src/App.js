import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

export const About = () => <h1>Você está na página Sobre</h1>;
export const Home = () => <h1>Você está na página Início</h1>;
export const NoMatch = () => <h1>Página não encontrada</h1>;

export default function App() {
  return (
    <div>
      <Link to="/">Início</Link>
      <br />
      <Link to="/about">Sobre</Link>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route component={NoMatch} />  {/* Not Found para quando a pessoa coloca uma URL que não existe */}
      </Switch>
    </div>
  );
};

// Repare que, para efeito de aprendizado, temos mais de um componente dentro do arquivo App.js , por isso o export default no componente App . Os outros componentes, que estão sendo exportados acima do component App , também terão os seus respectivos exports . Lembrando que isso não é uma boa prática . Estamos fazendo dessa forma para diminuirmos a complexidade da aplicação, com o intuito de facilitar o entendimento.

// Outro ponto de atenção é que, quando utilizamos o export default e o export , a maneira de importar os componentes sofre uma pequena alteração - que veremos na hora de realizar os testes.