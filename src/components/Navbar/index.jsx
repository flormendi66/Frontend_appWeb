import React, { useEffect, useState, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import IconoUbicacion from '../../Imagenes/iconoUbicacion.png';
import IconoMail from '../../Imagenes/iconoMail.png';
import IconoInsta from '../../Imagenes/icononInstagram.png';
import IconoWhatssApp from '../../Imagenes/iconoWhatsApp.png';
import Logo from '../../Imagenes/logoTexto.png';
import './styles.css';


function NavbarConRedes() {

    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null); // Referencia para el menú hamburguesa
    const menuItemsRef = useRef([]); // Referencia para los elementos del menú

    //abrcierra menú hamburguesa
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Cierra el menú hamburguesa al hacer clic o tocar fuera de él
    useEffect(() => {
        function handleClickOutside(event) {
            // Verificar si el clic o toque es fuera del menú
            if (
                menuRef.current && !menuRef.current.contains(event.target) && 
                !menuItemsRef.current.some(item => item.contains(event.target))
            ) {
                setIsOpen(false); // Cierra el menú si no es clic en el menú
            }
        }

        // Escuchar el evento pointerdown (compatible con mouse y táctil)
        document.addEventListener('pointerdown', handleClickOutside);
        return () => {
            // Limpiar el evento cuando el componente se desmonta
            document.removeEventListener('pointerdown', handleClickOutside);
        };
    }, []);


    return (
        <nav>
            <div className='cont-principal-nav'>
                {/* logo */}
                <div className='cont-logo'>                    
                    <NavLink to='/' >
                        <img src={Logo} alt='img not found' className='logo-nav' />
                    </NavLink>
                </div>
                <div className='cont-nav-sup-inf'>
                    <div className='nav-sup'>
                        <div className='cont-data-nav-sup-direcc'>
                            <img src={IconoUbicacion} alt='ubi' className='iconoInstaNew' />
                            <p className='texto-barra-sup'>San lorenzo 4056</p>
                        </div>
                        <div className='cont-data-nav-sup-tel'>
                            <LocalPhoneIcon className='iconoContact' />
                            <p className='texto-barra-sup'>2234422665</p>
                        </div>
                        <div className='cont-data-nav-sup-email'>
                            <img src={IconoMail} alt='ubi' className='iconoInstaNew' />
                            <p className='texto-barra-sup'>florenciamendive@gmail.com</p>
                        </div>
                        <div className='cont-data-nav-sup-insta'>
                            <a href='https://www.instagram.com/florm.bienesraices/'>
                                <img src={IconoInsta} alt='icoInsta' className='iconoInstaNew' />
                            </a>
                        </div>
                        <div className='cont-data-nav-sup-whatsApp'>
                            <a href='http://api.whatsapp.com/send?phone=2234422665'>
                                <img src={IconoWhatssApp} alt='icoInsta' className='iconoInstaNew' />
                            </a>
                        </div>
                    </div>

                    <div className='nav-inf'>
                        <ul className='ul-nav-inf'>
                            <li>
                                <NavLink to='/venta' >
                                    Venta
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/alquiler' >
                                    Alquileres
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/alqtemp'>
                                    Alq. temporarios
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/contacto' >
                                    Contacto
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/nosotros' >
                                    Nosotros
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/favoritos' >
                                    Favoritos
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* menu hambur y desplegable P.Chica */}
                <div className='cont-menu-hambur'>
                    {/* menu hambur P.Chica */}
                    <div
                        className={`menu-icon ${isOpen ? 'open' : ''}`}
                        onClick={toggleMenu}
                        ref={menuRef}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    {/* menu desplegable P.chica*/}
                    <div className="menu-desplegable">
                        {
                            isOpen && (
                                <ul className='ul-lista-pChica'>
                                    <li className='items-pChica'>
                                        <Link to='/' className='link-navbar' ref={el => menuItemsRef.current[0] = el}>Home</Link>
                                    </li>
                                    <li className='items-pChica'>
                                        <Link to='/venta' className='link-navbar' ref={el => menuItemsRef.current[1] = el}>Venta</Link>
                                    </li>
                                    <li className='items-pChica'>
                                        <Link to='/alquiler' className='link-navbar' ref={el => menuItemsRef.current[2] = el}>Alquiler</Link>
                                    </li>
                                    <li className='items-pChica'>
                                        <Link to='/alqTemp' className='link-navbar' ref={el => menuItemsRef.current[3] = el}>Alq. temporario</Link>
                                    </li>
                                    <li className='items-pChica'>
                                        <Link to='/favoritos' className='link-navbar' ref={el => menuItemsRef.current[4] = el}>Favoritos</Link>
                                    </li>
                                    <li className='items-pChica'>
                                        <Link to='/contacto' className='link-navbar' ref={el => menuItemsRef.current[5] = el}>Contacto</Link>
                                    </li>
                                    <li className='items-pChica'>
                                        <Link to='/nosotros' className='link-navbar' ref={el => menuItemsRef.current[6] = el}>Nosotros</Link>
                                    </li>
                                </ul>
                            )
                        }
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavbarConRedes;


