import './mainOne.css'

const MainOne =()=>{
    return (
        <div className="mainOne">
            <div className="nameFondo">
                <h1 className="Namefondo">Duvan APonte</h1>
                <div className="mainOneContenido">
                    <div className="mainOneContenidoRedes">
                        <ul className="listRedes">
                            <li><i class="fi fi-brands-linkedin"></i></li>
                            <li><i class="fi fi-brands-facebook"></i></li>
                            <li><i class="fi fi-brands-whatsapp"></i></li>
                            <li><i class="fi fi-brands-github"></i></li>
                            <li><i class="fi fi-sr-phone-call"></i></li>
                        </ul>
                    </div>
                    <div className="mainOneContenidoName">
                        <h2>i am Duvan Aponte</h2>
                    </div>
                    <div className="mainOneContenidoDescripcion">
                        <p>I'm duvan aponte, full stack web developer, eager to learn and with different projects on the table</p>      
                    </div>
                    <div className="mainOneContenidoOpciones">
                        <div>   mi portafolio </div>
                        <div> videos </div>
                    </div>
                </div>
            </div>
        </div>
    )    
}
export default MainOne