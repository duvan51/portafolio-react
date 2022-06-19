import React, { useEffect } from "react";
import "./portafolio.css";
import { useState } from "react";

import info from "../servicesTabs/servicesData.js";
import FilterBycomponent from "./FilterBycomponent.js";

import _, { } from "underscore"; //libreria para saber si un objeto esta vacio
import FilterComponents from "./FilterComponents.js";
import { useTranslation } from "react-i18next";

export const Portafolio = () => {
 
  
  const [button, setButtom] = useState([]);
  const [proyectFilter, setProyectByFilter] = useState({});

  const {t}= useTranslation();


  useEffect(() => {
    if (info) {
      setButtom(info); //enviamos la informacion de los botones que queremos

    }
  }, [info]);
  console.log(button)
  
  return (
    <div className="sectionPortafolio" id="portafolio">
      <div className="portafolio">
        <div className="portafolioProyect">
          <h1>{(t('mainProyects.proyectsTitle').toUpperCase())}</h1>
          <div>{t('mainProyects.proyectsDescription')}</div>
        </div>
        <div className="line"></div>
        <div className="proyects">
          <div className="proyectsFilter">
            <button onClick={() => setProyectByFilter({})}>All</button>
            {info.map((b) => {
              return (
                <button onClick={() => setProyectByFilter(b.proyects)} key={b.id}>
                  {b.name}
                </button>
              );
            })}
          </div>
          <div className="proyectsComplet">
                <div className="proyectsFront" >
                  {(_.isEmpty(proyectFilter) === false) ? (
                    <>
                      <FilterBycomponent data={proyectFilter} />
                    </>
                    ): info.map((x)=> <FilterComponents info={x.proyects} key={x.id} />)                    
                  }
                  
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};
