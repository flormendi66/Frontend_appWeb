import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProps } from '../../Redux/Actions';
import Loading from '../../components/Loading';
import BarraLateral from '../../components/Barra-Lateral';
import ListaPropiedades from '../../components/ListaPropiedades';
import WhatsAppButton from '../../components/BotonWhastApp';
import Paginacion from '../../components/Paginacion';
import './estilos.css';

function PropsVenta() {

    const loading = useSelector(state => state.loading);
    //const [operacion, setOperacion] = useState('');
    const [tipoPropiedad, setTipoPropiedad] = useState('todas');
    const [currentPage, setCurrentPage] = useState(1);
    const allProps = useSelector(state => state.propiedades);
    const totalPropiedades = useSelector(state => state.totPropiedades);
    const dispatch = useDispatch();

    const propiedadesPorPagina = 12;
    const limit = propiedadesPorPagina;    
    const offset = (currentPage - 1) * limit;

    useEffect(()=>{
        dispatch(getProps(limit, offset, "Venta", tipoPropiedad));
    },[dispatch, limit, offset, tipoPropiedad]);

    return (
        <div>
            {
                loading ? (
                    <>
                        <Loading/>
                    </>
                ) : (
                    <div className='cont-prop-Venta'>
                        {/* contenedor filtros y lista props */}
                            <div className='cont-titulo-props-venta'>
                            <div className='cont-titulo-conoce-propiedades'>
                                <p className='titulo-props-venta'>Propiedades en Venta</p>
                            </div>

                                <div className='cont-filtros-listaProps-venta'>
                                    <div className='cont-barraL'>
                                        <BarraLateral
                                            muestraVentaAlq={'false'}
                                            limit={limit}  // Aquí pasamos el valor de limit al componente BarraLateral
                                            offset={offset} // También pasamos el offset
                                            setCurrentPage={setCurrentPage}
                                            /* setOperacion={setOperacion} */
                                            setTipoPropiedad={setTipoPropiedad}  // Nuevo prop para manejar tipoPropiedad
                                        />
                                    </div>

                                    <div className='cont-listaProps'>
                                        <ListaPropiedades allProps={allProps} id='listaProps' />
                                        {
                                            allProps[0] &&
                                            <Paginacion
                                            allProps={allProps}
                                            currentPage={currentPage}
                                            onPageChange={setCurrentPage}
                                            totalPropiedades={totalPropiedades}
                                            propiedadesPorPagina={propiedadesPorPagina}
                                        />
                                        }
                                    </div>
                                </div>
                            </div>

                        {/* botón WhatsApp */}
                        <WhatsAppButton />
                    </div>
                )
            }
        </div>
    )
}

export default PropsVenta