import React from 'react'
import './aboutme.css'

import image from '../images/pef.png'
import servicesDataInfo from '../servicesTabs/servicesDataInfo'
import { useTranslation } from 'react-i18next'

export const AboutMe = () => {

    const {t, i18n}= useTranslation();

      return (
    <div className="aboutme" id="aboutme">
        <div>{t('mainAboutMe.aboutMeTitle')}</div>
        <div>{t('mainAboutMe.aboutMePhrase')}</div>
        <div className="line"></div>
        <div className='aboutmeInfoPhoto'>
            <div className="photo">
                <div className="photoDecoration">
                    <img src={image} alt='' />
                    <div className="redondo"><div className="decoration"></div></div>
                </div>
            </div>
            <div className="aboutmeInfoPerson" >
            <div className="aboutmeInfo">
                <h1>{(t('mainAboutMe.aboutMeDescriptionTitle')).toUpperCase()}</h1>
                <div>{t('mainAboutMe.aboutMeDescriptionDescription')}</div>   
            </div>
            <div className="aboutInfoPerson">
                <div> <div> {t('mainAboutMe.Name').toUpperCase()}</div> <div> {servicesDataInfo.first_name} {servicesDataInfo.last_name}</div> </div>
                <div> <div> {t('mainAboutMe.Email').toUpperCase()}</div> <div> {servicesDataInfo.email}</div> </div>
                <div> <div> {t('mainAboutMe.Phone').toUpperCase()} </div> <div> {servicesDataInfo.telephone} </div> </div>
                <div> <div> {t('mainAboutMe.Linkendln').toUpperCase()} </div> <a href="https://www.linkedin.com/in/duvan-aponte-269738189"> @Duvan_Aponte</a> </div>
            </div>
            </div>
            
        </div>
            
    </div>
  )
}
