import React from 'react'
import './aboutme.css'

import image from '../images/pef.png'


export const AboutMe = () => {
  
  
    return (
    <div className="aboutme">
        <div>About Me</div>
        <div> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.</div>
        <div className="line"></div>
        <div className="photo">
            <div className="photoDecoration">
                <img src={image} alt='' />
                <div className="redondo"><div className="decoration"></div></div>
            </div>
        </div>
        
        <div className="aboutmeInfo">
            <h1>HI THERE</h1>
            <div>In id nulla magna. Nullam posuere fermentum mattis. 
                Nunc id dui at sapien faucibus fermentum ut vel diam. 
                Nullam tempus, nunc id efficitur sagittis, urna est ultricies eros, 
                ac porta sem turpis
                nunc id efficitur sagittis, urna est ultricies eros, 
                ac porta sem turpis porta sem turpis quis leo. Nulla in feugiat elit
            </div>   
        </div>
        <div className="aboutInfoPerson">
            <div> <div> Name: </div> <div> Duvan Aponte Ramirez</div> </div>
            <div> <div> Email: </div> <div> duvanaponteramirez@gmail.com</div> </div>
            <div> <div> Phone: </div> <div> +57 31320127989 </div> </div>
            <div> <div> Likendln: </div> <a href="https://www.linkedin.com/in/duvan-aponte-269738189"> @Duvan_Aponte</a> </div>
        </div>    
    </div>
  )
}
