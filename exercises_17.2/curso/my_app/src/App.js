import React from 'react';
import ToDoList from './components/ToDoList';
import ToDoInput from './components/ToDoInput';

import TodoProvider from './context/TodoProvider';

function App() {
    return (
    //O exemplo anterior, dentro do app o estado eu passava via props, mas agr com o provider isso não é mais necessario.
    //Entao como acesso as informaçoes agr? 
      //
    // TodoProvider é um componente esterno que faz a configuraçaõ da minha api de contexto
    <TodoProvider> 
      <main>
        <ToDoInput />  {/* quando declaro childrem, é tudo que esta dentro do component TodoProvider */}
        <ToDoList />
      </main>
    </TodoProvider>
    )
  }

export default App;
