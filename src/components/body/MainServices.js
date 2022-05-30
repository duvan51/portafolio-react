import React from 'react'
import ServicesTabs from '../servicesTabs/ServicesTabs'
import './mainServices.css'

const MainServices = () => {
    
    
  
  return (
    <>
        <div className="servicesInfo">
            <div className="servicesInfoTitle">SERVICES</div>
            <div className="servicesInfoTitle">My Services</div>
            <div className="servicesInfoPharraf">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum standard dummy text.
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