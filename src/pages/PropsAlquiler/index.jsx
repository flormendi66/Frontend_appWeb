import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProps } from '../../Redux/Actions';
import Loading from '../../components/Loading';
import BarraLateral from '../../components/Barra-Lateral';
import ListaPropiedades from '../../components/ListaPropiedades';
import WhatsAppButton from '../../components/BotonWhastApp';
import Paginacion from '../../components/Paginacion';


function PropsAlquiler() {

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

    //efecto para iniciar la Pag desd la parte SUPERIOR
    useEffect(() => {
        // Desplaza la página hacia la parte superior cuando el componente se monta
        window.scrollTo(0, 0);
      }, []); // El array vacío asegura que se ejecute solo al montar el componente
    
    useEffect(()=>{
        dispatch(getProps(limit, offset, "Alquiler", tipoPropiedad));
    },[dispatch, limit, offset, tipoPropiedad]);


    return (
        <div>
            {
                loading ? (
                    <>
                        <Loading />
                    </>
                ) : (
                    <div className='cont-Venta'>
                        {/* contenedor filtros y lista props */}
                        <div className='cont-titulo-y-props-venta'>
                            {/* titulo */}
                            <div className='cont-titulo-venta'>
                                <p className='titulo-props-venta'>Propiedades en Alquiler</p>
                            </div>

                            {/* barra lat */}
                            <div className='cont-barraLateral-Y-listaProps-venta'>
                                <div className='cont-barraLateral-venta' >
                                    <BarraLateral
                                            muestraVentaAlq={'false'}
                                            limit={limit}  // Aquí pasamos el valor de limit al componente BarraLateral
                                            offset={offset} // También pasamos el offset
                                            setCurrentPage={setCurrentPage}
                                            /* setOperacion={setOperacion} */
                                            setTipoPropiedad={setTipoPropiedad}  // Nuevo prop para manejar tipoPropiedad
                                        />
                                </div>
                                {/* lista props y pag */}
                                <div className='cont-listaProps-Y-paginacion-venta'>
                                    <ListaPropiedades allProps={allProps} id='listaProps' />
                                    {/* Paginación */}
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

export default PropsAlquiler;