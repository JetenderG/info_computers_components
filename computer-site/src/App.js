import logo from './logo.svg';
import NavBar from './components/navbar/index.js'
import Footer from './components/footer';
import Main from './components/main/Main';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar>
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
      </NavBar>
      <Main/>
      <Footer/>
    </div>

    
  );
}

export default App;
