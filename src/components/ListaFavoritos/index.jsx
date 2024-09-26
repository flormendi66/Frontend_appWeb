import React from 'react';
import NoHayProps from '../NoHayProps';
import CardFavorito from '../CardFavorito';
import './estilos.css';

function ListaFavoritos({allProps}) {

    return (
        <div className='cont-listaProps-fav'>
                {
                    allProps[0] ?
                    allProps.map(p => {
                        return (
                            <div className='cont-card-listaFav' key={p.id}>
                                <CardFavorito 
                                    key={p.id}
                                    id={p.id}
                                    direccionF={p.direccionF}
                                    cantCocheras={p.cantCocheras}
                                    operacion={p.operacion}
                                    imagenes={p.imagenes}
                                    tituloPublicacion={p.tituloPublicacion}
                                    ambientes={p.ambientes}
                                    dormitorios={p.dormitorios}
                                    unidadMedida={p.unidadMedida}
                                    tipo={p.tipo}
                                />
                            </div>
                        )
                    }) : (
                        <div className='no-props'>
                            <NoHayProps/>
                        </div>
                    )
                }
            
        </div>
    )
}

export default ListaFavoritos;