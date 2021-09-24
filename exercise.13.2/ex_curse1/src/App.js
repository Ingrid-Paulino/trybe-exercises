import React from 'react';
import './App.css';
import Home from './Home';
import About from './About';
import HowTo from './HowTo';
import Profile from './Profile';
import ProfileEx2 from './ProfileEx2';

import {BrowserRouter, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      {/*{filhos de BrowserRouter} */}
      <Route path="/about" component={About} />  {/* Leia: se eu navegar por esse path, renderize este component */}

      {/* Passando props para o route */}
      <Route path="/profile" render={ (props) => <Profile {...props} name="Barbaruiva, o bucaneiro da web"/>} /> {/*o render ali, recebe um arrai de props -- tendo outras informaçoes que o route dar para nos. (history, location e match)*/} {/* :ship - sig. que qualquer palavra que vier depois de profile, vai chegar no componente com a chave ship */}

      <Route path="/profileEx2/:ship" render={(props) => <ProfileEx2 {...props} name="Barbaruiva, o bucaneiro da web"/>}

      // {/*forma 2  -  componente como filho*/}
      <Route path="/howto"><HowTo /></Route> 

      <Route exact path="/" component={Home} /> {/*barra se emcaixa com todos, pois ele é comum com a barra de todos.   --   exact é para que não apareça o conteudo home junto com os outros caminhos*/} 
    </BrowserRouter>
  );
}

export default App;
