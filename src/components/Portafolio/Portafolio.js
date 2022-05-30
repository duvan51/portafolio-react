import React, { useEffect } from "react";
import "./portafolio.css";
import { useState } from "react";

import info from "../servicesTabs/servicesData.js";
import FilterBycomponent from "./FilterBycomponent.js";

import _, { } from "underscore"; //libreria para saber si un objeto esta vacio

export const Portafolio = () => {
 
  
  const [button, setButtom] = useState([]);
  const [proyectFilter, setProyectByFilter] = useState({});


  useEffect(() => {
    if (info) {
      setButtom(info); //enviamos la informacion de los botones que queremos
      setProyectByFilter(info[1])
   
    }
  }, [info, proyectFilter]);

  
 
  return (
    <div className="sectionPortafolio">
      <div className="portafolio">
        <div className="portafolioProyect">
          <h1>Portafolio Proyects</h1>
          <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum standard dummy text.
          </div>
        </div>
        <div className="line"></div>
        <div className="proyects">
          <div className="proyectsFilter">
            <button onClick={() => console.log(button)}>All</button>
            {button.map((b) => {
              
              return (
                <button onClick={() => setProyectByFilter(b.proyects)} key={b.id}>
                  {b.name}
                </button>
              );
            })}
          </div>
          <div className="proyectsComplet">
                <div className="proyectsFront" >
                  {(_.isEmpty(proyectFilter) == 0) ? (
                    <>
                      <FilterBycomponent proyectFilter={proyectFilter} />
                    </>
                    ):console.log("cargando")                    
                  }
                  
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};
