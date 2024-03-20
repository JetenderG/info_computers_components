import logo from './logo.svg';
import NavBar from './components/navbar/index.js'
import Footer from './components/footer';
import Main from './components/main/Main';
import './App.css';

function App() {
  return (
    <div className="App">
      <body className='flex_order_section'>
      <NavBar/>
      <Main/>
      <Footer/>

      </body>
    </div>

    
  );
}

export default App;
