import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../context/Context';

function Register() {
  //forma 1 de usar o estado
  //Vantagem dessa forma: cada estado, é atualizado, individualmente
  // const [dog, setDog] = useState('');
  // const [friend, setFriend] = useState('');
  // const [photo, setPhoto] = useState('');

  // forma 2 usando o estado. Passei todos os objetos de uma vez so.
  //Desvantagem dessa forma: Os etados serao atualizados todo juntos
  /* const [register, setRegister] = useState({
      dog: '',
      friend: '',
      photo: '',
      raca: '',
    });*/

  //forma 3 de usar o estado, parecido com a forma 2
  // criei um objeto fora e mando ele pra o meu estado
  //Desvantagem dessa forma: Os etados serao atualizados todo juntos
  const INITIAL_STATE = {
    dog: '',
    friend: '',
    photo: '',
    raca: '',
  };

  const { addDog } = useContext(Context);

  // forma 3 de usar estado, passando o objeto criado acima
  //Desvantagem dessa forma: Os etados serao atualizados todo juntos
  const [register, setRegister] = useState(INITIAL_STATE);

  //destruturei e o meu register, que é quem esta com as respostas das variaveis
  //passo essa resposta para o meu value do input 
  const { photo, dog, friend, raca } = register;

  //forma 2 - onChange
  //forma dinamica 
  const handleChange = ({ target: { name, value } }) => {
    setRegister({ ...register, [name]: value });
  };

  return (
    <>
      <header>
        <h1>Register</h1>
        <nav>
          <Link to="/">Gallery</Link>
        </nav>
      </header>
      <main className="register">
        <form>
          <input
            type="text"
            placeholder="Dog's name"
            name="dog"
            value={ dog }
            // forma 1 - onChange
            // Desvantagem: codigo muito grande, terei que passar para todos os eventos onChange e não é dinamico 
            // onChange={ ({ target: { value } }) => setRegister({ ...register, dog: value }) }

            //forma 2 - onChange
            //Vantagem: é dinamico e o codigo fica mais legivel e sucinto
            onChange={ handleChange }

          />
          <input
            type="text"
            placeholder="Friend's name"
            name="friend"
            value={ friend }
            onChange={ handleChange }
          />
          <input
            type="text"
            placeholder="Photo URL"
            name="photo"
            value={ photo }
            onChange={ handleChange }
          />
          <input
            type="text"
            placeholder="Raça"
            name="raca"
            value={ raca }
            onChange={ handleChange }
          />
          <button type="button" onClick={ () => addDog(register) }>Add</button>
        </form>
      </main>
    </>
  );
}

export default Register;