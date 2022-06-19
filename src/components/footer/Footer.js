import React from 'react'
import './footer.css'
import servicesDataInfo from '../servicesTabs/servicesDataInfo'

const Footer = () => {
  return (
    <div className="footer" id="footer" >
        Copyright © 2021 {servicesDataInfo.first_name} All Rights Reserved by ThemeBing.
    </div>
  )
}

export default Footer