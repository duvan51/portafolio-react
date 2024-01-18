import React, { useEffect, useState } from 'react'
import info from './servicesData'
import './cardServices.css'



const ServicesTabs = () => {
    
    const[datos , setDatos] = useState ([])
    

    useEffect(()=>{
        if(info){
            setDatos(info)
        }
    },[info])
   console.log(datos)
    

    const f = info.map((i)=> {
        return (
            <div className="cardServices hover"  key={i.id}>
                    <div className="cardLogo">
                        {i.icon}
                    </div>
                    <div className="cardName">{i.name}</div>
                    <div className="cardDescription">{i.description}</div>
            </div>  
        )
    })

    return (
        <>
        {f}
        </>
    )
}

export default ServicesTabs