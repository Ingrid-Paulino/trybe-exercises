import React, { useState } from 'react';
import { createQuestion, getQuestions } from '../services/api';
import QuestionsContext from './QuestionsContext';
// criação do Provider
//prro destruturar essa props, colocando {children}
function QuestionsProvider(props) {

  //usando estado
  const [ question, setQuestion ] = useState([]);  //retorna um array sempre, o 1° é o valor da variavel, o 2° é  função que troca o valor dessa variavel
  const [ isLoading, setIsLoading ] = useState(false); //dentro do () -> parentese coloco o valor que vai iniciar o meu estado, posso colocar '', number, string, boleano ...
  //ex:
  // const [ name, setName ] = useState('');
  // setName('Maite') // estou mudando o nome da minha variavel name.
  // //nunca posso mudar o valor direto da variavel name. ex: name = 'maite

  async function fetchQuestions() {
    //chamar api
    //setar o resultado no estado
    setIsLoading(true);
    const questions = await getQuestions(); //simula a chamada da api
    setQuestion(questions);
    setIsLoading(false);
  }

  const createNewQuestion = async (newQuestion) => {
    setIsLoading(true);
    await createQuestion(newQuestion);
    setQuestion([ ...question, newQuestion]);
    setIsLoading(false);
  }

  
  return(
    <QuestionsContext.Provider value={ { question, isLoading, fetchQuestions, createNewQuestion }}>
       {props.children} {/* //nn posso usar this.props aqui por isso vou usar por parametro, meu primeiro parametro é props, posso destruturar colocando varias */}
      </QuestionsContext.Provider>
    );
}

export default QuestionsProvider;