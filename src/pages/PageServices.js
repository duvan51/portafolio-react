import React, { useEffect } from 'react';
import Nav from '../components/nav/Nav.js'
import MainOne from '../components/body/MainOne.js'
import MainServices from '../components/body/MainServices';
import { AboutMe } from '../components/aboutMe/AboutMe';
import { Portafolio } from '../components/Portafolio/Portafolio';
import ContactForm from '../components/contact/contact';
import ContactMe from '../components/contact/ContactMe';
import HabilitiesBlands from '../components/habilityesBlands/habilitiesBlands';
import Footer from '../components/footer/Footer';

import './PageServices.css'
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Body = () => {

  /* cambiar los themas*/
  const [ theme, setThemes ]=useState(
    localStorage.getItem('theme')
  );
  localStorage.setItem("theme", theme);
  
  const them = localStorage.getItem("theme")
  
  document.documentElement.className = them; //manipular el dom html para cambiar de estilos el document
  /**end de cambiar los temas*/
  

  /**  use navigate */
  const navigate = useNavigate(); 
  const exit = () => {
    localStorage.removeItem('user')
    navigate('/');

  }
  /**----- end use navogate */
    
  
  /*   ------   lenguajes   ------- */ 
 // !guardar idioma con el localstorage
  const [buttonLng, setButtonLng] = useState(false);
    const {i18n}= useTranslation();
  
    const changeLanguage = (lng) => {  
        localStorage.setItem('idioma', lng);
        const lengu = localStorage.getItem('idioma')
        i18n.changeLanguage(lengu);  
    }


  /*------------------------------------*/

  return (
    <div className="App" > 
    <header className="App-header">
      <div className="AppHeadersColorsTranslation">
        <div className='exit'>
          <button onClick={exit}><i className="fi fi-sr-sign-out-alt"></i></button>
        </div>
        <div className="colors" >
          <button className="black" onClick={()=> setThemes('black')}>Black</button>
          <button className="pink" onClick={()=> setThemes('pink')}>Pink</button>
          <button className="purple" onClick={()=> setThemes('purple')}>Purple</button>
          <button className="Ligth" onClick={()=> setThemes('ligth')}>Ligth</button>
          <button className='dark' onClick={()=> setThemes('dark')}>Dark</button>
        </div>
        <div className="translation" >
          <div className="translationIcon" onClick={()=>setButtonLng(!buttonLng)}>
            lng{/** aqui vamos a poner el idioma actual */}
            <i className="fi fi-sr-globe"></i>
          </div>
          {( buttonLng ) && ( 
            <div className="optionTranslation">
              <div onClick={()=> changeLanguage('en')}>EN</div>
              <div onClick={()=> changeLanguage('es')}>ES</div>
          </div>  
           )}
          
        </div>
      </div>
      <Nav />
    </header>
    <MainOne />
    <MainServices />
    <AboutMe />
    <Portafolio />
    <ContactMe />
    <ContactForm />
    <HabilitiesBlands />
    <Footer />
  </div>
  )
}

export default Body