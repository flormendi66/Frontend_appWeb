import React  from 'react'
import { Link } from 'react-router-dom';
import logo from '../../Imagenes/LogoHome.png';
import './estilos.css';

function LandingPage2() {

    return (
        <div className='contGralLanding'>   
            {/* cont logo */}
            <div className='cont-logo-landing'>
                <div className='sub-cont-logo-landing sub-cont-sup left-slide'>
                    <img src={logo} alt='not found' className='logo-landing'/>
                </div>
            </div>            
            
            {/* cont texto 2 */}            
            <div className='cont-inf'>
                <div className="sub-cont-infe right-slide">
                    <Link to={'/venta'}>
                        <button className='btn-landing'>Comprar</button>
                    </Link>
                    <Link to={'/alquiler'}>
                        <button className='btn-landing'>Alquilar</button>
                    </Link>
                    <Link to={'/vender'}>
                        <button className='btn-landing'>Vender</button>
                    </Link>
                    <Link to={'/emprendimiento'}>
                        <button className='btn-landing'>Emprendimientos</button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default LandingPage2;

