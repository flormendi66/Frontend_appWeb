import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProps } from '../../Redux/Actions';
import ListaPropiedades from '../../components/ListaPropiedades';
import LandingA from '../../components/LandingA';
import Loading from '../../components/Loading';
import BarraLateral from '../../components/Barra-Lateral';
import WhatsAppButton from '../../components/BotonWhastApp';
import Paginacion from '../../components/Paginacion';
import LandingB from '../../components/LandingB';
import LandingC from '../../components/LandingC';
import './styles.css';

function Home() {
    const loading = useSelector(state => state.loading);
    const [operacion, setOperacion] = useState('');
    const [tipoPropiedad, setTipoPropiedad] = useState('todas');
    const [precioMin, setPrecioMin] = useState(10000);
    const [precioMax, setPrecioMax] = useState(1000000);
    const [currentPage, setCurrentPage] = useState(1);
    const allProps = useSelector(state => state.propiedades);
    const totalPropiedades = useSelector(state => state.totPropiedades);
    const dispatch = useDispatch();
    const propiedadesPorPagina = 12;
    const limit = propiedadesPorPagina;
    const offset = (currentPage - 1) * limit;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Efecto para manejar la paginación y los filtros
    useEffect(() => {
        dispatch(getProps(limit, offset, operacion, tipoPropiedad, precioMin, precioMax));
    }, [dispatch, limit, offset, operacion, tipoPropiedad, precioMin, precioMax]);

    return (
        <div>
            {loading ? (
                <Loading />
            ) : (
                <div className='cont-home'>
                    <LandingA />
                    <LandingB />
                    <LandingC />
                    <div className='cont-barraLateral-Y-listaProps'>
                        <div className='cont-barraLateral'>
                        <BarraLateral
                            muestraVentaAlq={'true'}
                            soloAlq={'true'}
                            setCurrentPage={setCurrentPage}
                            setOperacion={setOperacion}
                            setTipoPropiedad={setTipoPropiedad}
                            precioMin={precioMin}
                            setPrecioMin={setPrecioMin}
                            precioMax={precioMax}
                            setPrecioMax={setPrecioMax}
                        />
                        </div>
                        <div className='cont-listaProps-Y-paginacion'>
                            <h1 className='titulo-lista-props'>Conocé nuestras Propiedades</h1>
                            <ListaPropiedades allProps={allProps} id='listaProps' />
                            {allProps.length > 0 && (
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
                    <WhatsAppButton />
                </div>
            )}
        </div>
    );
}

export default Home;