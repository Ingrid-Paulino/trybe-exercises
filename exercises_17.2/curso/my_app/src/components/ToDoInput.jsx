import React, { useState } from 'react';

function ToDoInput({ addTodo }) {
  const [ newTodo, setNewTodo] = useState('');

  const handleChange = ({ target }) => {
    setNewTodo(target.value);
  }

  const handleClick = () => {
    addTodo(newTodo);
    setNewTodo('');
  }

    return (
      <section>
        <label htmlFor="addTodo">
          Insira uma tarefa:
          <input
            type="text"
            name="newTodo"
            id="newTodo"
            onChange={handleChange}
            value={newTodo}
          />
        </label>
        <button onClick={handleClick}>Adicionar tarefa</button>
      </section>
    )
  }

export default ToDoInput;
