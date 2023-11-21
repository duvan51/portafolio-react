import './App.css';


/** */

import PageServices from './pages/PageServices.js';
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
        <Route path="/" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;


