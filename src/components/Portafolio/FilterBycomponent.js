import React from "react";
import { useEffect, useState } from "react";


import image from "../images/pef.png";

const FilterBycomponent = ({ data }) => {
  
  const style = {
    backgroundImage: `url(${image})`,
  };
  const styhove = {
    display: "none",
  };

  
  return (
    <>
    {data ? (
        <>
        {  data.map((x) => {
        return (
          <div className="proyectFrontOne" style={style} key={x.id}>
            <div className="cardName">
              <h1 className="cardNameTitle">{x.name}</h1>
            </div>
            <div className="CardInfo" style={styhove}>
              <h2 className="CardInfoTitle">{x.name}</h2>
              <div className="cardInfoText">sakjnskjsa ahasbjabshja</div>
              <div className="CardInfoImages">
                <div>Tecnologias ussed</div>
                <div className="CardInfoImag">
                  {x.images.map((img) => {
                    return <img key={img} src={img} alt="" />;
                  })}
                </div>
              </div>
              <div className="cardIcon">{x.icon}</div>
            </div>
          </div>
        );
      })}
        
        </>
    ): null}  
    </>
  );
};

export default FilterBycomponent;
