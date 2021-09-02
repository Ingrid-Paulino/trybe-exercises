// import React, { Component } from 'react';
// import AddTask from '../Components/AddTask';
// import Task from '../Components/Task';

// export default class Home extends Component {
//   render() {
//     // caso nao exista vais ser falsy vai fazer oq eu mandar
//     if (!localStorage.getItem('task-list'))
//       localStorage.setItem('task-list', JSON.stringify([]));

//      //JSON.parse - transformou meu array em um array 
//     const taskList = JSON.parse(localStorage.getItem('task-list'));

//     return (
//       <>
//         <AddTask />
//         <form>
//           <button
//             type="submit"
//             onClick={() => {
//               localStorage.setItem('task-list', JSON.stringify([]));
//               //JSON.stringify - transformou o meu array em uma string, pois o localStorage so aceita string
//             }}
//           >
//             Limpar
//           </button>
//         </form>
//         <ul>

//         <ul>
//         { /*taskList.map(({title, task},index) => poderiamos distruturar */}
//           {taskList.map((taskInfo, index) => (
//             <Task {...taskInfo} key={index} />
//              //<Task { ...taskInfo} key={ index } podiamos fazer assim tbm/>
//           ))}
//         </ul>
//       </>
//     );
//   };
// };

import React, { Component } from 'react';
import AddTask from '../Components/AddTask';
import Task from '../Components/Task';

export default class Home extends Component {
  render() {
    if (!localStorage.getItem('task-list'))
      localStorage.setItem('task-list', JSON.stringify([]));

    const taskList = JSON.parse(localStorage.getItem('task-list'));

    return (
      <>
        <AddTask />
        <form>
          <button
            type="submit"
            onClick={() => {
              localStorage.setItem('task-list', JSON.stringify([]));
            }}
          >
            Limpar
          </button>
        </form>
        <ul>
          {taskList.map((taskInfo, index) => (
            <Task {...taskInfo} key={index} />
          ))}
        </ul>
      </>
    );
  }
}