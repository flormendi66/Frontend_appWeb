import React from 'react'
import NoHayProps from '../NoHayProps';
import CardEmprendimiento from '../Card-Emprendimiento';


function ListaEmprendimientos({allEmp}) {

    return (
        <div className='contGralListaP lista-emp'>       
            <div className='contListaP'>
                {
                    allEmp[0] ?
                    allEmp.map(p => {
                        return (
                            <div className='cont-card' key={p.id}>
                                <CardEmprendimiento className='card' key={p.id}
                                    id={p.id}
                                    codigoReferencia={p.codigoReferencia}
                                    direccionF={p.fake_address}
                                    locacion={p.location.full_location}
                                    tituloPublicacion={p.publication_title}
                                    tipo={p.type.name} 
                                    imagen={p.photos[0].image}                                  
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
        </div>
    )
}

export default ListaEmprendimientos