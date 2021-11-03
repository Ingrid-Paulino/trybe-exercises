import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router';
import QuestionsContext from '../context/QuestionsContext';

//forma de fazer mudanças no formulario -- salvar os dados no estado
function NewQuestionPage() {
  const [name, setName] = useState('');
  const [question, setQuestion] = useState('');
  
  const { createNewQuestion: createNewQuestionApi } = useContext(QuestionsContext);
  const history = useHistory(); //outro rook useHistory

  async function createNewQuestion(ev) {
    //nn deixa enviar as informaçoes para a url e nn atualiza
    ev.preventDefault();
    const newQuestion = { user: name, question };
    await createNewQuestionApi(newQuestion); //so estou agrardando ele carregar, n preciso retornar nada
    history.push('/'); //isso acontece por causa do hook 
  }

  return (
    <section className="question-section">
      {/* <form onSubmit={ (ev) => createNewQuestion(ev) }> //forma 1 */}
       <form onSubmit={ createNewQuestion }> {/*//forma 2 */}
       <label htmlFor="question">
          Digite a sua pergunta:
          <textarea
            onChange={ (ev) => setQuestion(ev.target.value)}
            value={question}
            name="question"
            placeholder="Escreva aqui sua pergunta"
            id="question"
            cols="30"
            rows="10"
          />
        </label>
        <label htmlFor="user">
          Digite o seu nome:
          <input
            onChange={ ev => setName(ev.target.value)}
            value={name}
            type="text"
            name="name"
            placeholder="Maria"
            id="user"
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default NewQuestionPage;