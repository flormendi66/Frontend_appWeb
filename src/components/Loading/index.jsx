import React from 'react';
import './estilos.css';

function Loading() {
    return (
        <div className='cont-loading'>
            <div class="spinner">
                <div class="spinnerin"></div>
            </div>
            <p>Cargando propiedades ...</p>
        </div>
    )
}

export default Loading