import './nav.css'

const Nav = ()=>{


    return (
        
        <div className="navComplet">
           <div className="nav">
            <div className="nameLog">
                    <div className="name">
                        <div>D</div>
                        <div>v</div>
                        <div>N</div>
                        <div></div>
                        <div>A</div>     
                    </div>
                </div>
                <div className="menuNavbar">
                    <i class="fi fi-br-list"></i>
                </div>
            </div>
            <div className="navList">
                <ul>
                        <li>HOME</li>
                        <li>SERVICES</li>
                        <li>ABOUT</li>
                        <li>SKILLS</li>
                        <li>PORTAFOLIO</li>
                        <li>BLOG</li>
                        <li>CONTACT</li>
                 </ul>

            </div> 
        </div>
        )
}
export default Nav