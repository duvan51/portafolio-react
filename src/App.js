import './App.css';
import Nav from './components/nav/Nav.js'
import MainOne from './components/body/MainOne.js'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="colors">Themes</div>
        <Nav />
      </header>
      <MainOne />
    </div>
  );
}

export default App;
