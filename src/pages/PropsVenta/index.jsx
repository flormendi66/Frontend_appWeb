import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProps } from '../../Redux/Actions';
import ListaPropiedades from '../../components/ListaPropiedades';
import BarraLateral from '../../components/Barra-Lateral';
import Loading from '../../components/Loading';
import Paginacion from '../../components/Paginacion';
import WhatsAppButton from '../../components/BotonWhastApp';
import './estilos.css';


function PropsVenta() {

    const loading = useSelector(state => state.loading);
    const props = useSelector(state => state.propiedades);   
    const [currentPage, setCurrentPage] = useState(1);  // Estado para la página actual
    const propiedadesPorPagina = 20;  // Definimos el límite de propiedades por página
    const dispatch = useDispatch();

    useEffect(() => {
        const offset = (currentPage - 1) * propiedadesPorPagina;
        dispatch(getProps(propiedadesPorPagina, offset));
    }, [dispatch, currentPage]);

    //filtro solo venta
    const soloEnVenta = props.filter(p => p.operacion[0].operacion === 'Venta');

    return (
        <div className='cont-prop-Venta'>
            <h1>Propiedade en venta</h1>
            {
                loading ? (
                    <Loading/>
                ) : (
                    <>
                        {/* contenedor filtros y lista props */}
                        <div className='cont-filtros-listaProps'>
                                {/* filtros */}
                                <div className='cont-barraL'>                                    
                                    <BarraLateral muestraVentaAlq={false}/>
                                </div>                               

                                {/* lista props */}
                                <div className='cont-listaProps'>
                                    <ListaPropiedades allProps={soloEnVenta} id='listaProps'/>

                                    <Paginacion 
                                        allProps={soloEnVenta}
                                        currentPage={currentPage} 
                                        onPageChange={setCurrentPage} 
                                        totalPropiedades={soloEnVenta.length}
                                    />
                                </div>
                            </div> 

                            {/* botón whatsApp */}
                            <WhatsAppButton/>
                    </>
                )
            }
        </div>
    )
}

export default PropsVenta