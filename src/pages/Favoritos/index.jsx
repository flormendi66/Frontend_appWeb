import React, {useEffect, useState} from 'react'
import ListaFavoritos from '../../components/ListaFavoritos';
import './estilos.css'

function FavoritosPage() {
    const [fav, setFav] = useState([]);

    // Desplaza la página hacia la parte superior cuando el componente se monta
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []); // El array vacío asegura que se ejecute solo al montar el componente

    useEffect(()=>{
        let listaFav = JSON.parse(localStorage.getItem('favorites')) || [];
        setFav(listaFav);
    },[]);


    return (
        <div className='cont-page-favoritos'>
            <h1 className='titulo-page-fav'>Tus propiedades favoritas</h1>
            <div className='cont-props-fav'>
                <ListaFavoritos allProps={fav} />
            </div>
        </div>
    )
}

export default FavoritosPage;