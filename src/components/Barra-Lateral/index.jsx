import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getProps, } from '../../Redux/Actions';
import './estilos.css'; 
import FiltraPrecio from '../FIltroRangoPrecio';


const BarraLateral = () => {

    //estado para check venta/alq
    const [operacion, setTipo] = useState(''); 
    const dispatch = useDispatch();
    
    const handleFilterChange = (event) => {
        const { value } = event.target;
        setTipo(value === operacion ? '' : value);
    };

    const handleClick = (e) => {
        switch (e.target.id) {
            case 'depto':
                dispatch(getProps({operacion, tipo:'Departamento'}));
                break;
            case 'casa':
                
                break;
            case 'ph':
                
                break;
            case 'local':
                
                break;
            case 'terreno':
                
                break;
            case 'oficina':
                
                break;
            case 'cochera':
                
                break;
            case 'destacada':
                
                break;
            case 'todas':
                dispatch(getProps());
                break;
            default:
                break;
        }
    };

    useEffect(() => {        
            if(operacion === ''){ 
                dispatch(getProps()); 
            }
            if(operacion !== ''){ 
                dispatch(getProps(operacion));                
            }
    }, [dispatch, operacion]);

    return (
        <div className='cont-barra' >
            <div className='cont-titulo-filtro'>
                <p>Filtros</p>
            </div>

            <div className='opc-venta-alq'>
                <label>VENTA</label>
                <input 
                    id='venta'
                        type="checkbox" 
                        value="venta" 
                        checked={operacion === 'Venta'} 
                        onChange={handleFilterChange}
                        className='input-check-venta'
                    />
                <label> - ALQUILER</label>
                <input 
                    id='alquiler'
                        type="checkbox" 
                        value="alquiler" 
                        checked={operacion === 'Alquiler'} 
                        onChange={handleFilterChange}
                        className='input-check-alq' 
                />
                <label> - ALQUILER Temp.</label>
                <input
                    id='alquilerTemp'
                    type="checkbox"
                    value="alquilerTemp"
                    checked={operacion === "Alquiler temporal"}
                    onChange={handleFilterChange}
                    className='input-check-alq'
                />
            </div>

            <div className='cont-btn-filtros'>
                <button className='boton-filtros' id='depto' onClick={(e) => handleClick(e)}>Deptos</button>
                <button className='boton-filtros' id='casa' onClick={(e) => handleClick(e)}>Casas</button>
                <button className='boton-filtros' id='ph' onClick={(e) => handleClick(e)}>PH</button>
                <button className='boton-filtros' id='local' onClick={(e) => handleClick(e)}>Locales</button>
                <button className='boton-filtros' id='terreno' onClick={(e) => handleClick(e)}>Terrenos</button>
                <button className='boton-filtros' id='oficina' onClick={(e) => handleClick(e)}>Oficinas</button>
                <button className='boton-filtros' id='cochera' onClick={(e) => handleClick(e)}>Cocheras</button>
                <button className='boton-filtros'  id='destacada' onClick={(e) => handleClick(e)}>Destacadas</button>
                <button className='boton-filtros' id='todas'  onClick={(e) => handleClick(e)}>Todas</button>
            </div>

            <FiltraPrecio operacion={operacion}/>
        </div>        
    );
};

export default BarraLateral;
