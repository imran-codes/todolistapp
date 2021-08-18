import './App.css';
import Joke from './components/Joke';
import Todo from './components/Todo';

function App() {
  return (
    <div className="app">
     <h1>Welcome to my TODO List</h1>
      <Todo />
      <h1>Random Joke Generator</h1>
      <Joke />
    </div>
  );
}

export default App;
