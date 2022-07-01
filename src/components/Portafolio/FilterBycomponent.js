import React from "react";

const FilterBycomponent = ({ data }) => {
  
  
  const styhove = {
    display: "none",
  };

  
  return (
    <>
    {data ? (
        <>
        {  data.map((x) => {
          const style = {
            backgroundImage: `url(${x.fondo})`,
          };
        return (
          <div className="proyectFrontOne" style={style} key={x.id}>
            <div className="cardName">
              <h1 className="cardNameTitle">{x.name}</h1>
            </div>
            <div className="CardInfo" style={styhove}>
              <h2 className="CardInfoTitle">{x.name}</h2>
              <div className="cardInfoText">{x.description}</div>
              <div className="CardInfoImages">
                <div>Tecnologias ussed</div>
                <div className="CardInfoImag">
                  {x.images.map((img) => {
                    return <img key={img} src={img} alt="" />;
                  })}
                </div>
              </div>
              <a className="cardIcon" href={x.link} target="_blank">
                <div className="iconLink">
                    <i class="fi fi-sr-play"></i>
                </div>
              </a>
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
