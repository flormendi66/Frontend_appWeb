import React, { useEffect, useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const MapProp = ({ geoLat, geoLong }) => {
    const API_KEY = process.env.REACT_APP_API_GOOGLE_MAP;

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: API_KEY // Reemplaza con tu API Key de Google Maps
    });

    // Inicializamos el estado de coordenadas en null
    const [coordinates, setCoordinates] = useState(null);

    useEffect(() => {
        // Convertimos geoLat y geoLong a números flotantes si son válidos
        const lat = parseFloat(geoLat);
        const lng = parseFloat(geoLong);

        if (!isNaN(lat) && !isNaN(lng)) {
            setCoordinates({ lat, lng });
        }
    }, [geoLat, geoLong]); // Dependemos de geoLat y geoLong

    if (!isLoaded) return <div>Loading...</div>;

    return (
        <GoogleMap
            center={coordinates || { lat: -38.0257007, lng: -57.5616034 }}  // Usamos coordenadas predeterminadas si coordinates es null
            zoom={15}
            mapContainerStyle={{ width: '100%', height: '400px', position: 'relative' }}
        >
            {coordinates && (
                <Marker
                    position={coordinates}  // Solo mostramos el marcador cuando coordinates es válido
                />
            )}
        </GoogleMap>
    );
};

export default MapProp;
