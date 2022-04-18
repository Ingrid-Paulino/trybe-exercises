import React, { useContext } from 'react';
import QuestionsContext from '../context/QuestionsContext';

import QuestionCard from './QuestionCard';

function QuestionList() {
  const { question } = useContext(QuestionsContext);
  //eu poderia colocar mais valores do estado, ex:
      //const{ question, isLoading} = useContext(QuestionsContext);
  
  // useContext(QuestionsContext); //useContext retorna o objeto value do Provider
  // const{ name } = useContext(outroContexto); // posso usar varios contextos


  return (
    <section>
      {
        question
          .map((question, index) => <QuestionCard key={ index } question={ question } />)
      }
    </section>
  );
}

export default QuestionList;