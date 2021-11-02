import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Context from '../context/Context';

function Gallery() {
  const { dogs } = useContext(Context);
  const [raca, setRaca] = useState('Todas');
  const [name, setName] = useState('');

  const filterRaca = () => {
    //[...dogs] - o sprad operaitor aqui é para que não altere o meu estado oiginal, é como se foce um clone. 
    let dogsFiltered = [...dogs];
    if (raca !== 'Todas') {
      dogsFiltered = dogsFiltered.filter((dog) => dog.raca === raca);
    }
    if (name !== '') {
      dogsFiltered = dogsFiltered.filter((dog) => dog.dog === name);
    }
    return dogsFiltered;
  };

  return (
    <>
      <header>
        <h1>Gallery</h1>
        <nav>
          <Link to="/register">Resgiter</Link>
        </nav>
      </header>
      <main>
        <select name="raca" onChange={ ({ target: { value } }) => setRaca(value) }>
          <option value="Todas">Todas</option>
          <option value="Golden Retriever">Golden Retriever</option>
          <option value="Maltês">Maltês</option>
          <option value="Dachshund">Dachshund</option>
        </select>
        <input type="text" onChange={ ({ target: { value } }) => setName(value) } />
        <button type="button" onClick={ filterRaca }>Filtrar</button>
        {
          filterRaca().map(({ dog, friend, photo }, index) => (
            <div key={ index } className="card">
              <img src={ photo } alt={ `${dog}` } className="image-card" />
              <h2 className="dog-card">{dog}</h2>
              <p className="friend-card">{`${friend}' friend`}</p>
            </div>
          ))
        }
      </main>
    </>
  );
}

export default Gallery;