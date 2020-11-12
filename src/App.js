import logo from './logo.svg';
import './App.css';
import SuperButton from './conponents/SuperButton';
import ButtonRow from './conponents/ButtonRow';

function App() {
  return (
    <div className="App">
      <h1>Meine (JK) erste React App</h1>
      <ButtonRow/>
      <SuperButton/>
      <ButtonRow/>
      <ButtonRow/>
      <ButtonRow/>
      <p>hier ist mein Teil fertig</p>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header>
    </div>
  );
}

export default App;
