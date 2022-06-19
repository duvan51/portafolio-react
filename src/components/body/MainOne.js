import './mainOne.css';
import servicesDataInfo from '../servicesTabs/servicesDataInfo';
import Redes from '../redes/redes.js'
import image from '../images/pef.png'

import { useTranslation } from 'react-i18next';

const MainOne =()=>{

    const {t, i18n} = useTranslation(); 
    const nameUser = localStorage.getItem('user');

    return (
        <div className="mainOne" id="mainone">
            <div className="mainOne-container">
                <div className="nameFondo">
                    <h1 className="Namefondo">{servicesDataInfo.first_name} {servicesDataInfo.last_name}</h1>
                    <div className="mainOneContenido">
                        <Redes />
                        <div className="welcome">{t('mainOne.mainOneWelcome')} {nameUser}</div>
                        <div className="mainOneContenidoName">
                            <h2>{t('mainOne.mainOneName')} {servicesDataInfo.first_name} {servicesDataInfo.last_name}</h2>
                        </div>
                        <div className="mainOneContenidoDescripcion">
                            <p>{t('mainOne.mainOneDescription')}</p>      
                        </div>
                        <div className="mainOneContenidoOpciones">
                            <div> {t('mainOne.mainOneButtonMyPortafolio')} </div>
                            <div> {t('mainOne.mainOneButtonMyVideos')} </div>
                        </div>
                    </div>
                </div>
                <div className="mainOnephoto">
                    <img src={image} alt='' />
                </div>
            </div>
            
        </div>
    )    
}
export default MainOne