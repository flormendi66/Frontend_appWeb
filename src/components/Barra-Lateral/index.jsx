import React, { useState } from 'react';
import './estilos.css'; 

const BarraLateral = ({ soloVenta, setCurrentPage, setOperacion, setTipoPropiedad, soloAlq }) => {
    const [operacion, setOperacio] = useState(''); 
    const [tipoP, setTipoP] = useState('todas');

    const handleFilterChange = (event) => {
        const { value } = event.target;
        const nuevaOperacion = value === operacion ? '' : value;
        setOperacio(nuevaOperacion);
        setOperacion(nuevaOperacion);
    };

    const handleClick = (e) => {
        setCurrentPage(1);
        const tipoPropiedad = e.target.id;
        setTipoPropiedad(tipoPropiedad);
        setTipoP(tipoPropiedad);
    };

    return (
        <div className='cont-barra'>
            <div className={soloVenta && soloAlq === 'true' ? 'cont-titulo-filtro' : 'cont-titulo-filtro-Sin-muestrVentaAlq'}>
                <p className='titulo-filtros'>Filtros Propiedades</p>
            </div>

            <div className='opc-venta-alq'>
                <div className='cont-venta-alq'>
                    {soloVenta === 'true' && (
                        <>
                            <label className='label-filtro-tipo-operacion'>VENTA</label>
                            <input
                                id='Venta'
                                type="checkbox"
                                value="Venta"
                                checked={operacion === 'Venta'}
                                onChange={handleFilterChange}
                                className='input-check-venta'
                            />
                        </>
                    )}
                    {soloAlq === 'true' && (
                        <>
                            <label className='label-filtro-tipo-operacion'>ALQUILER</label>
                            <input
                                id='Alquiler'
                                type="checkbox"
                                value="Alquiler"
                                checked={operacion === 'Alquiler'}
                                onChange={handleFilterChange}
                                className='input-check-alq'
                            />
                        </>
                    )}
                </div>
                {soloAlq === 'true' && (
                    <div className='cont-venta-alq'>
                        <label className='label-filtro-tipo-ope-Alq-Temp'>ALQUILER TEMPORAL</label>
                        <input
                            id='Alquiler temporario'
                            type="checkbox"
                            value="Alquiler temporario"
                            checked={operacion === "Alquiler temporario"}
                            onChange={handleFilterChange}
                            className='input-check-alq'
                        />
                    </div>
                )}
            </div>
                
            <div className='cont-btn-filtros'>
                {
                    ['Departamento', 'Casa', 'PH', 'Local', 'Terreno', 'Oficina', 'Cochera', 'todas'].map(tipo => (
                        <button
                            key={tipo}
                            className='boton-filtros'
                            id={tipo}
                            onClick={handleClick}
                        >
                            {tipo}
                        </button>
                    ))
                }
            </div>
        </div>
    );
};

export default BarraLateral;
