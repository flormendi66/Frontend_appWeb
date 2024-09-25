import React  from 'react'
import logo from '../../Imagenes/LogoHome.png';
import './estilos.css';

function LandingPage2() {

    return (
        <div className='contGralLanding'>   
            {/* cont logo */}
            <div className='cont-logo-landing'>
                <div className='sub-cont-logo-landing sub-cont-sup left-slide'>
                    <img src={logo} alt='' className='logo-landing'/>
                </div>
            </div>            
            
            {/* cont texto 2 */}            
            <div className='cont-inf'>
                <div className="sub-cont-infe right-slide">
                    <button className='btn-landing'>Quirero Comprar</button>
                    <button className='btn-landing'>Quiero Alquilar</button>
                    <button className='btn-landing'>Quiero Vender</button>
                </div>
            </div>

        </div>
    )
}

export default LandingPage2;

