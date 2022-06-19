import React from 'react'
import ServicesTabs from '../servicesTabs/ServicesTabs'
import './mainServices.css'

import { useTranslation } from 'react-i18next';

const MainServices = () => {
    const{t, i18n}=useTranslation();
    
  
  return (
    <>
        <div className="servicesInfo" id="services">
            <div className="servicesInfoTitle">{(t('mainServices.mainService')).toUpperCase()}</div>
            <div className="servicesInfoTitle">{t('mainServices.mainServiceTitle')}</div>
            <div className="servicesInfoPharraf">
               {t('mainServices.mainServiceDescription')}
            </div>
            <div className="line"></div>
        </div>
        <div className="servicesTabs">
            <ServicesTabs />
        </div>
    </>
  )
}

export default MainServices