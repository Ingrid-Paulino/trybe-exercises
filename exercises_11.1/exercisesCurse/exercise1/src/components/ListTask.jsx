import React from 'react';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tarefas = ['Escolher roupa','Escolher sapato','Arrumar Unha', 'Lavar cabelo', 'Fazer Make', 'Comer', 'Vestir Roupa', 'Chamar Uber', 'Chegar na festa', 'Se divertir até o amanhecer!!!', ]

class ListTask extends React.Component {

  render() {
    return(
      <section>
        <h3>Lista de tarefas:</h3>
        <ul>
          {Task('Fazer compra')}
          {tarefas.map((tarefa) => Task(tarefa))}
        </ul>
      </section>
      
    );
  }
}

export default ListTask;