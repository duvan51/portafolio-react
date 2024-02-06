import './App.css';


/** */

import PageServices from './pages/PageServices.js';
import Tutorials from './pages/tutorials/Tutorials.js'
import TutorialsId from './pages/tutorialbyid/TutorialbyId.js';
import Form from './pages/Form';
/** */

import { Route, Routes } from 'react-router-dom';


function App() {

  return (
    <div className="App" > 
    
      <Routes>
        {/* routes publics */}
        {/*<Route path="/pdf" element={<Pdf />}/>*/ }
        <Route path="/services" element={<PageServices />} />
        <Route  path="/tutorials" element={<Tutorials/>}/>
        <Route  path="/tutorials/:id" element={<TutorialsId/>}/>
        <Route path="/" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;


