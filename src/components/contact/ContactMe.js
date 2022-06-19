import React from 'react'
import servicesDataInfo from '../servicesTabs/servicesDataInfo';

import './contactMe.css';
import { useTranslation } from 'react-i18next';



const ContactMe = () => {

    const {t, i18n} = useTranslation(); 
    




  return (
    <div className="contactMe" id="cont">
         <div className="line"></div>
        <div className="contactMeDescription">
            <div className="contactMeDescriptionText">
                <div>{t('contactMe.contactTitle')}</div>
                <div>{t('contactMe.contactTitle2')}</div>
                <div>{t('contactMe.contactDescription')}</div>
            </div>
        </div>
        <div className="contactMeInformation" >
            <div className="contactMeInformationLocate">
                <div className="contactMeInformationLocateIcon">
                     <i className="fi fi-sr-marker"></i>
                </div>
                <div className="contactMeInformationLocateInfo">
                    <div className="contactMeInformationLocateInfo"> {t('contactMe.contactMenuLocate')} </div>
                    <div className="contactMeInformationLocateInfo"> {servicesDataInfo.country},{servicesDataInfo.city} </div>
                </div>
            </div>
            <div className="contactMeInformationCall">
                <div className="contactMeInformationCallIcon">
                    <i className="fi fi-sr-phone-call"></i>
                </div>
                <div className="contactMeInformationCallInfo">
                    <div className="contactMeInformationCallInfo"> {t('contactMe.contactMenuNumber')} </div>
                    <div className="contactMeInformationCallInfo"> {servicesDataInfo.telephone} </div>
                </div>
            </div>
            <div className="contactMeInformationMessage">
                <div className="contactMeInformationMessageIcon">
                    <i className="fi fi-sr-envelope"></i>
                </div>
                <div className="contactMeInformationMessageInfo">
                    <div className="contactMeInformationMessageInfo"> {t('contactMe.contactMenuEmail')} </div>
                    <div className="contactMeInformationMessageInfogmail"> {servicesDataInfo.email} </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactMe