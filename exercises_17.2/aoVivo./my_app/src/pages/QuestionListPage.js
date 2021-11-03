import React from 'react';

import QuestionList from '../components/QuestionList';
import QuestionsContext from '../context/QuestionsContext';

class QuestionListPage extends React.Component {
  //chama a api
  componentDidMount() {
    //fetch
    //atualizar o estado global
    const { fetchQuestions } = this.context;
    fetchQuestions();
  }

  render() {
    const { isLoading } = { isLoading: false };
    const { history } = this.props;
    return !isLoading ? (
      <section>
        <QuestionList />
        <button
          type="button"
          onClick={ () => history.push('/new-question') }
        >
          Nova Pergunta
        </button>
      </section>
    ) : <span>Carregando...</span>;
  }
}

//define esse componente como padrao para esse contexto
QuestionListPage.contextType = QuestionsContext;

export default QuestionListPage;