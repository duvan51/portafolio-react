import './nav.css'
import Logo from '../logo/Logo'

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';


const Nav = ()=>{
    
    

    const {t} = useTranslation();   
    
    
    
    /** button del menu  */
    const [buttonMenu, setbuttonMenu] = useState(0);
    /* variabe global para accionar varias cosas*/
    localStorage.setItem('button',buttonMenu);
    
    


    const [screenwidthMenu, setscreenwidthMenu] = useState(window.innerWidth);
    
    useEffect(()=>{
        const changeWidth =()=>{
            setscreenwidthMenu(window.innerWidth);
        }
        window.addEventListener("resize", changeWidth)
        return ()=> (
            window.removeEventListener("resize", changeWidth)
        )
    },[])
    
    
    /** end butto menu */
    
    
    return (
        <div className="navComplet">
           <div className="nav">
                <Logo />
                <div className="menuNavbar">
                    <i className="fi fi-br-list" id="btnRes" onClick={()=> setbuttonMenu(!buttonMenu)} ></i>
                </div>
            </div>
            {(buttonMenu || screenwidthMenu > 767 )&& (
                <div className="navList" id="res">
                    <ul>    
                            <a href="#mainone">{(t('headersMenu.home')).toUpperCase()} </a> {/* interpolamos y convertimos a mayuscula  */}
                            <a href="#services" >{(t('headersMenu.menuServices')).toUpperCase()}</a>
                            <a href="#aboutme">{(t('headersMenu.menuAbout')).toUpperCase()}</a>
                            <a href="#portafolio">{(t('headersMenu.menuProyects')).toUpperCase()}</a>
                            <a>{(t('headersMenu.menuBlog')).toUpperCase()}</a>
                            <a href="#cont">{(t('headersMenu.menuContact')).toUpperCase()}</a>
                    </ul>

                </div>
            )}
             
        </div>
        )
}
export default Nav