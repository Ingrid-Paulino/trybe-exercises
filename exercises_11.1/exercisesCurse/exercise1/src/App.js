import Hello from './components/Hello';
import WorkingRender from './components/WorkingRender';
import ListTask from './components/ListTask';
import './App.css';

function App() {
  return (
    <div className="App">
      <Hello />
      <WorkingRender />
      <ListTask />
      <tasksDynamic />
    </div>
  );
}

export default App;
