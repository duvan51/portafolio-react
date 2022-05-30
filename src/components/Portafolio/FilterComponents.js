import React from "react";


const FilterComponents = ({ style, i, styhove }) => {

  return (
    <>
      {i.proyects.map((p) => {
        return (
          <div className="proyectFrontOne" style={style} key={p.id}>
            <div className="cardName">
              <h1 className="cardNameTitle">{p.name}</h1>
            </div>
            <div className="CardInfo" style={styhove}>
              <h2 className="CardInfoTitle">{p.name}</h2>
              <div className="cardInfoText">sakjnskjsa ahasbjabshja</div>
              <div className="CardInfoImages">
                <div>Tecnologias ussed</div>
                <div className="CardInfoImag">
                  {p.images.map((img) => {
                    return <img key={img} src={img} alt="" />;
                  })}
                </div>
              </div>
              <div className="cardIcon">{i.icon}</div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FilterComponents;



  
