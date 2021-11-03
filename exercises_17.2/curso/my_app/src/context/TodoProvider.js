import React, { useState } from 'react';

import TodoContext from './TodoContext';

//children esta passando como props, e são todos os filhor so meu TodoProvider que esta dentro do App.js
function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]); //passo esses components para os filhos que queiram acessar, via o Provider..

  //toda vez que eu quiser escrever uma novo tarefa, essa função é chamada
  const addTodo = (newTodo) => {
    setTodos(todos.concat(newTodo))
  }

  return (
    <main>
      <TodoContext.Provider value={{ todos, addTodo }}>
         {children} {/* recebe todos os filhos passado para o TodoContext.Provider la no App.js */}
      </TodoContext.Provider>
    </main>
  )
}

export default TodoProvider;