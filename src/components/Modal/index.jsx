import React from 'react'
import { useDispatch } from 'react-redux';
import { isOpenModalPicture } from '../../Redux/Actions';
import CarruselModal from '../CarruselModal';
import './styles.css';

function Modal({imagenes}) {

    const dispatch = useDispatch();

    const handleOnclickClose = () =>{
        dispatch(isOpenModalPicture());
    };

    return (
        <div className='contModal'>
            <p className='mesaj-pos-horizontal'>Gira el telefono a posición horizontal</p>
            <div className='cont-btn-cierra-modal'>
                <button
                    className='btn-close-modal'
                    onClick={() => handleOnclickClose()}
                >
                    <b>X</b>
                </button>
            </div>

            {/* carrusel de imgs */}
            <CarruselModal imagenes={imagenes}/>
        </div>
    )
}

export default Modal