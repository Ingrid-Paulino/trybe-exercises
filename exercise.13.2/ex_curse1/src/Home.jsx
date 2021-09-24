import React from 'react';
// import About from './About';
// import HowTo from './HowTo';
// import Profile from './Profile';
// import { Route} from 'react-router-dom'
import { Link } from 'react-router-dom'

export default class Home extends React.Component {
  render() {
    return (
    <div>
      {/* Links para acessar de uma pagina para outra */}
      <Link to="/about">About</Link>
      <Link to="/howto">HowTo</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/profileEx2">ProfileEx2</Link>


      <h1>Minha homepage</h1>
      {/* Dessa forma sempre que eu renderizar a minha tela com um desses caminhos, aparecera tanto o conteudo do home quando to do caminho, por esse motivo vamos caminhar com esse conteudo para o componente app */}
       {/* <Route path="/about" component={About} />  {/* Leia: se eu navegar for por esse path, renderize este component */}
      {/* <Route path="/howTo" component={HowTo} />
      <Route path="/profile"> <Profile /> </Route> forma 2  -  componente como filho */}
    </div>
    );
  }
}

// Todas as outras paginas serão acessadas atraves da pagina Home