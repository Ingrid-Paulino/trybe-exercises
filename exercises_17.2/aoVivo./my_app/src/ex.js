//src/components/QuestionCard.js
import React from 'react';
function QuestionCard({ question }) {
  return (
    <section className="question-card">
      <header className="question-card-header">
        <img className="question-card-image" src="https://i.pinimg.com/564x/fe/43/dd/fe43dde6d650b6d31ab47a1e01714b65.jpg" alt="" />
        {question.user}
      </header>
      <p className="question-card-body">{question.question}</p>
    </section>
  );
}
export default QuestionCard;

//src/components/QuestionList.js
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

//rsc/context/QuestionsContext.js
import { createContext } from 'react';

const QuestionsContext = createContext();

export default QuestionsContext;

//rsc/context/QuestionsProvider.js
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

//src/pages/NewQuestionPage.js
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

//src/pages/QuestionListPage.js
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

//rsc/services/api.js
import data from './questionsData';

localStorage.setItem('questions', JSON.stringify(data));

const readQuestions = () => JSON.parse(localStorage.getItem('questions'));

const saveQuestions = (questions) => localStorage
  .setItem('questions', JSON.stringify(questions));

const ONE_SECOND = 1000;

export const getQuestions = () => (
  new Promise((resolve) => {
    setTimeout(() => {
      const questions = readQuestions();
      resolve(questions);
    }, ONE_SECOND);
  })
);

export const createQuestion = (questionData) => {
  let questions = readQuestions();
  const nextId = questions[questions.length - 1].id + 1;
  const newQuestion = { ...questionData, id: nextId };
  questions = [...questions, newQuestion];
  saveQuestions(questions);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('OK');
    }, 100);
  });
};

//src/services/questionsData.js
const movies = [ //ignore o nome movie, finge que é questionss
  {
    id: 1,
    question: "Como posso passar dados para um componente filho?",
    archive: false,
    user: "Hermione Granger"
  },
  {
    id: 2,
    question: "Como posso criar rotas no meu app react?",
    archive: false,
    user: "Hermione Granger"
  },
  {
    id: 3,
    question: "Travei no requisito 2",
    archive: false,
    user: "Hermione Granger"
  },
  {
    id: 4,
    question: "O teste não está passando no requisito 5",
    archive: false,
    user: "Hermione Granger"
  },
];
export default movies;

//src/App.js
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import QuestionListPage from './pages/QuestionListPage';
import NewQuestionPage from './pages/NewQuestionPage';
import './App.css';
import QuestionsProvider from './context/QuestionsProvider';

function App() {
  return (
    <QuestionsProvider>
      {/* o childrem do meu provider é o que recebe todos os components aqui dentro */}
      <main className="App">
        <header className="main-header">
          <section className="main-header-title">
            <h3>Trybe Questions - 14ALL </h3>
          </section>
        </header>
        <section className="main-section">
          <Switch>
            <Route
              path="/new-question"
              render={ (props) => <NewQuestionPage { ...props } /> }
            />
            <Route
              path="/"
              render={ (props) => <QuestionListPage { ...props } /> }
            />
          </Switch>
        </section>
      </main>   
    </QuestionsProvider>
  );
}
export default App;

//src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//src/serviceWorker.js
// This optional code is used to register a service worker.
// register() is not called by default.

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.

// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA

const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.0/8 are considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

export function register(config) {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    // The URL constructor is available in all browsers that support SW.
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
    if (publicUrl.origin !== window.location.origin) {
      // Our service worker won't work if PUBLIC_URL is on a different origin
      // from what our page is served on. This might happen if a CDN is used to
      // serve assets; see https://github.com/facebook/create-react-app/issues/2374
      return;
    }

    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

      if (isLocalhost) {
        // This is running on localhost. Let's check if a service worker still exists or not.
        checkValidServiceWorker(swUrl, config);

        // Add some additional logging to localhost, pointing developers to the
        // service worker/PWA documentation.
        navigator.serviceWorker.ready.then(() => {
          console.log(
            'This web app is being served cache-first by a service ' +
              'worker. To learn more, visit https://bit.ly/CRA-PWA'
          );
        });
      } else {
        // Is not localhost. Just register service worker
        registerValidSW(swUrl, config);
      }
    });
  }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker
    .register(swUrl)
    .then(registration => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        if (installingWorker == null) {
          return;
        }
        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              // At this point, the updated precached content has been fetched,
              // but the previous service worker will still serve the older
              // content until all client tabs are closed.
              console.log(
                'New content is available and will be used when all ' +
                  'tabs for this page are closed. See https://bit.ly/CRA-PWA.'
              );

              // Execute callback
              if (config && config.onUpdate) {
                config.onUpdate(registration);
              }
            } else {
              // At this point, everything has been precached.
              // It's the perfect time to display a
              // "Content is cached for offline use." message.
              console.log('Content is cached for offline use.');

              // Execute callback
              if (config && config.onSuccess) {
                config.onSuccess(registration);
              }
            }
          }
        };
      };
    })
    .catch(error => {
      console.error('Error during service worker registration:', error);
    });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: { 'Service-Worker': 'script' },
  })
    .then(response => {
      // Ensure service worker exists, and that we really are getting a JS file.
      const contentType = response.headers.get('content-type');
      if (
        response.status === 404 ||
        (contentType != null && contentType.indexOf('javascript') === -1)
      ) {
        // No service worker found. Probably a different app. Reload the page.
        navigator.serviceWorker.ready.then(registration => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        // Service worker found. Proceed as normal.
        registerValidSW(swUrl, config);
      }
    })
    .catch(() => {
      console.log(
        'No internet connection found. App is running in offline mode.'
      );
    });
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then(registration => {
        registration.unregister();
      })
      .catch(error => {
        console.error(error.message);
      });
  }
}

//src/setupTests.js
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';



