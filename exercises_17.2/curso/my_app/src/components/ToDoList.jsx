import React, { useContext } from 'react'
import TodoContext from '../context/TodoContext'

function ToDoList() {
  //forma 2, usando função
  //use context elimina o uso do Consumer
  const { todos } = useContext(TodoContext); //usando dessa forma eu não precido mais do consumer

  //forma 1 , usando class
  // recomento usar o Consumer so com class, em component funcional, podemos usar o hook useContext.
    // <TodoContext.Consumer> 
      // {/* dessa forma não recebo o 'todos' via props. Provider prover os dados de forma que eu consiga usar o consumer, para consumir os dados */}
      // {/* return (
    //     {
    //       ({ todos }) => (
    //         <ul>
    //           {todos.map(todo => <li>{todo}</li>)}
    //         </ul>
    //       )
    //     }
    // )
    // </TodoContext.Consumer> */}

    //forma 2 usando função
    return (
      //obs: dessa forma não preciso usar uma função dentro do return
        <ul>
          {todos.map(todo => <li>{todo}</li>)}
        </ul>
      )
}
export default ToDoList;
