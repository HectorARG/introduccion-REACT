import logo from './logo.svg';
import './App.css';
//Este es un componente y es invisible para HTML
function App(prop) {
  return (
    //Este div es un elemento y es el que renderiza REACT
    //Estamos usando una sintaxis JSX
    <div className="App">
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
          Learn React with Platzi
        </a>
        <span>{ prop.saludo }</span>
      </header>
    </div>
  );
}

export default App;
