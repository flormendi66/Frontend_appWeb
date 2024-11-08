import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProps, resetPropiedades } from '../../Redux/Actions';
import ListaPropiedades from '../../components/ListaPropiedades';
import LandingA from '../../components/LandingA';
import Loading from '../../components/Loading';
import BarraLateral from '../../components/Barra-Lateral';
import WhatsAppButton from '../../components/BotonWhastApp';
import Paginacion from '../../components/Paginacion';
import LandingB from '../../components/LandingB';
import './styles.css';
import LandingC from '../../components/LandingC';

function Home() {
    const loading = useSelector(state => state.loading);
    const [operacion, setOperacion] = useState('');
    const [tipoPropiedad, setTipoPropiedad] = useState('todas');
    const [currentPage, setCurrentPage] = useState(1);
    const allProps = useSelector(state => state.propiedades);
    const totalPropiedades = useSelector(state => state.totPropiedades);
    const dispatch = useDispatch();
    //const prevFilters = useRef({ operacion: '', tipoPropiedad: 'todas' });
    const propiedadesPorPagina = 12;
    const limit = propiedadesPorPagina;    
    const offset = (currentPage - 1) * limit;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        dispatch(getProps(limit, offset, operacion, tipoPropiedad));
        return () => {
            dispatch(resetPropiedades());
        };
    }, [limit, offset, operacion, tipoPropiedad, dispatch]);

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
                                soloVenta={'true'}
                                soloAlq={'true'}
                                setCurrentPage={setCurrentPage}
                                setOperacion={setOperacion}
                                setTipoPropiedad={setTipoPropiedad}
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