import logo from './logo.svg';
import './App.css';
import SuperButton from './conponents/SuperButton';
import ButtonRow from './conponents/ButtonRow';
import List from './conponents/aufgabe-komponenten/List';
import Button from './conponents/aufgabe-komponenten/Button';
import Card from './conponents/aufgabe-komponenten/Card';
import Vote from './conponents/react-props/Vote';




function App() {
  return (
    <div className="App">
      <h1>Meine (JK) erste React App</h1>
      <ButtonRow/>
      <SuperButton/>
      <ButtonRow/>
      <ButtonRow/>
      <ButtonRow/>
      <h2>Aufgabe Komponenten</h2>
      <List/>
      <Button/>
      <Card/>
      <h2>React Props am Beispiel Votes</h2>
      <Vote candidate="Sepp" address="Dornbirn"/>
      <Vote candidate="Julia" address="Wien"/>
      <Vote candidate="Kein Wohnort" />
      <Vote candidate="Thomas" address="Egg"/>
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
