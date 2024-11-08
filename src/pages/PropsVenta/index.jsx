import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProps, resetPropiedades } from '../../Redux/Actions';
import Loading from '../../components/Loading';
import BarraLateral from '../../components/Barra-Lateral';
import ListaPropiedades from '../../components/ListaPropiedades';
import WhatsAppButton from '../../components/BotonWhastApp';
import Paginacion from '../../components/Paginacion';
import './estilos.css';

function PropsVenta() {
    const loading = useSelector(state => state.loading);
    const [initialLoad, setInitialLoad] = useState(true);
    const [tipoPropiedad, setTipoPropiedad] = useState('todas');
    const [currentPage, setCurrentPage] = useState(1);
    const allProps = useSelector(state => state.propiedades);
    const totalPropiedades = useSelector(state => state.totPropiedades);
    const dispatch = useDispatch();
    const prevFilters = useRef({ operacion: '', tipoPropiedad: 'todas' });
    const propiedadesPorPagina = 12;
    const limit = propiedadesPorPagina;    
    const offset = (currentPage - 1) * limit;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (initialLoad) {
            dispatch(getProps(limit, offset, "Venta", tipoPropiedad));
            setInitialLoad(false);
        } else {
            dispatch(getProps(limit, offset, "Venta", tipoPropiedad));
        }

        if (tipoPropiedad !== prevFilters.current.tipoPropiedad) {
            dispatch(getProps(12, 0, tipoPropiedad));
            prevFilters.current = { tipoPropiedad };
        }

        return () => {
            dispatch(resetPropiedades());
        };
    }, [initialLoad, limit, offset, tipoPropiedad, dispatch]);

    return (
        <div className='cont-Venta'>
            <div className='cont-titulo-y-props-venta'>
                <div className='cont-titulo-venta'>
                    <p className='titulo-props-venta'>Propiedades en Venta</p>
                </div>
                <div className='cont-barraLateral-Y-listaProps-venta'>
                    <div className='cont-barraLateral-venta'>
                        <BarraLateral
                            muestraVentaAlq={'false'}
                            limit={limit}
                            offset={offset}
                            setCurrentPage={setCurrentPage}
                            setTipoPropiedad={setTipoPropiedad}
                        />
                    </div>
                    <div className='cont-listaProps-Y-paginacion-venta'>
                        <ListaPropiedades allProps={allProps} id='listaProps' />
                        {allProps[0] && (
                            <Paginacion
                                allProps={allProps}
                                currentPage={currentPage}
                                onPageChange={setCurrentPage}
                                totalPropiedades={totalPropiedades}
                                propiedadesPorPagina={propiedadesPorPagina}
                            />
                        )}
                    </div>
                </div>
            </div>
            <WhatsAppButton />
        </div>
    );
}

export default PropsVenta;