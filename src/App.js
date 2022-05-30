import './App.css';
import Nav from './components/nav/Nav.js'
import MainOne from './components/body/MainOne.js'
import MainServices from './components/body/MainServices';
import { AboutMe } from './components/aboutMe/AboutMe';
import { Portafolio } from './components/Portafolio/Portafolio';



function App() {

  const setTheme = theme => document.documentElement.className = theme; //manipular el dom html para cambiar de estilos el document

  return (
    <div className="App" > 
      <header className="App-header">
        <div className="colors">
          <button className="dark" onClick={()=> setTheme('dark')}>Dark</button>
          <button className="pink" onClick={()=> setTheme('pink')}>Pink</button>
          <button className="purple" onClick={()=> setTheme('purple')}>Purple</button>
          <button className="Ligth" onClick={()=> setTheme('ligth')}>Ligth</button>
          <button>Purple</button>
        </div>
        <Nav />
      </header>
      <MainOne />
      <MainServices />
      <AboutMe />
      <Portafolio />
    </div>
  );
}

export default App;
