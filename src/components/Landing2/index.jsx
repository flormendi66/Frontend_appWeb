import React  from 'react'
import logo from '../../Imagenes/LogoHome.png';
import { Link } from 'react-router-dom';
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
                    <Link to={'/venta'}>
                        <button className='btn-landing'>Quirero Comprar</button>
                    </Link>
                    <Link to={'/alquiler'}>
                        <button className='btn-landing'>Quiero Alquilar</button>
                    </Link>
                    <Link></Link>
                    
                    <button className='btn-landing'>Quiero Vender</button>
                </div>
            </div>

        </div>
    )
}

export default LandingPage2;

