import React, {useState} from 'react';
import IconoUbicacion from '../../Imagenes/iconoUbicacion.png';
import Favorito from '../Favoritos';
import IconoSup from '../../Imagenes/Iconos/IconoSup';
import IconoAmb from '../../Imagenes/Iconos/IconoAmb';
import IconoDormitorio from '../../Imagenes/Iconos/IconoDormitorios';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { formatMoney } from '../../Helps';
import './estilos.css';
import { Link } from 'react-router-dom';


function CardFavorito({ id, direccionF, cantCocheras, dormitorios, operacion, imagenes, tituloPublicacion, ambientes, unidadMedida, tipo}) {

    //estado para el hover
    const [showDetail, setShowDetail] = useState(false);

    return (
        <div className='card-fav'>
            {/* img + fav */}
            <div className='cont-img-fav' >
                <Link to={`/detalle/${id}`} className='img-fav'>
                    {/* img + animacion + abre detalle */}
                    <div
                        onMouseEnter={() => setShowDetail(true)}
                        onMouseLeave={() => setShowDetail(false)} className='img-fav'
                    >
                        {/* imagen */}
                        <div className='img-fav'>
                            <img src={imagenes[0].original} alt='not found' className='img-fav' />
                        </div>

                        {/* msj detalle si hay hover */}
                        <div className={`detail ${showDetail ? 'show' : ''}`}>
                            <p className='palabra-abre-detalle'>Detalle</p>
                        </div>
                    </div>
                </Link>
                {/* btn fav */}
                <div className='cont-btn-card-fav'>
                        <Favorito 
                            id={id}
                            direccionF={direccionF}
                            cantCocheras={cantCocheras}
                            operacion={operacion}
                            imagenes={imagenes}
                            tituloPublicacion={tituloPublicacion}
                            ambientes={ambientes}
                            dormitorios={dormitorios}
                            unidadMedida={unidadMedida}
                            tipo={tipo}
                        />
                </div>
            </div>
            {/* Data prop */}
            <div className='cont-data-prop-fav'>
                {/* descripcion */}
                <div className='cont-titulo-card-fav'>
                    <p className='p-titulo-card-fav'>{tituloPublicacion}</p>
                </div>
                {/* dirección y precio*/}
                <div className='cont-direcc-card-fav'>
                    <div className='cont-info1'>
                        <img src={IconoUbicacion} alt='iconoUbi' style={{ width: '30px', height: '30px' }} />
                        <span className='direccion-card'>
                            {/* Barrio: {ubicacion.barrio} | */} {direccionF}
                        </span>
                    </div>
                    <p className='p-precio-card-fav'>PRECIO: {operacion[0].precios[0].moneda} {formatMoney(operacion[0].precios[0].precio)}</p>
                </div>
                {/* cont-info-inferior */}
                <div className='cont-info-inferior'>
                    <div className='col1-info-inferior'>
                        <IconoSup />
                        <p className='info-inferior'>Superficie</p>
                        <p className='info-inferior'>{unidadMedida}</p>
                    </div>

                    {
                        tipo.name !== "Terreno" && (
                            <>
                                <div className='col1-info-inferior'>
                                    <IconoAmb />
                                    <p className='info-inferior'>Ambientes</p>
                                    <p className='info-inferior'>{ambientes}</p>
                                </div>

                                <div className='col1-info-inferior'>
                                    <IconoDormitorio />
                                    <p className='info-inferior'>Dormitorios</p>
                                    <p className='info-inferior'>{dormitorios}</p>
                                </div>

                                <div className='col1-info-inferior'>
                                    <DirectionsCarIcon sx={{ color: 'rgba(171, 132, 94, 1)', width: '28px', height: '28px' }} />
                                    <p className='info-inferior'>Cocheras</p>
                                    <p className='info-inferior'>{cantCocheras}</p>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default CardFavorito;
