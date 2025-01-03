import axios from "axios";
import { 
    GET_PROPERTY,  GET_PROPS, IS_OPEN_MODAL_PICTURE, LOADING, MUESTRA_DESTACADAS, 
    RESET_PROPS, RESET_PROPERTY, GET_EMPRENDIMIENTOS, GET_EMPRENDIMIENTO,
    RESET_EMPRENDIMIENTO,
} from "./ActionsType";
import { actual } from "../../urls";


//trae props
export const getProps = (limit, offset, operacion, tipo, precioMin, precioMax) => {
    return async function (dispatch) {
        dispatch({ type: LOADING }); // loading

        // Construimos los parámetros dinámicamente
        let queryParams = `?limit=${limit}&offset=${offset}`;

        if (operacion) queryParams += `&operacion=${operacion}`;
        if (tipo) queryParams += `&tipo=${tipo}`;
        if (precioMin) queryParams += `&precioMin=${precioMin}`;
        if (precioMax) queryParams += `&precioMax=${precioMax}`;

        try {
            const resp = await axios.get(`${actual}/propiedades${queryParams}`); 
            dispatch({ type: GET_PROPS, payload: resp.data });
        } catch (error) {
            console.error('Error fetching properties:', error);
            // Puedes manejar el error aquí si lo necesitas
        }
    };
};  

//trae propiedad por ID
export const getProperty = (id) => {
    return async function(dispatch) {
        dispatch({type: LOADING});
        
        try {
            const resp = await axios.get(`${actual}/propiedades/${id}`);
            dispatch({type: GET_PROPERTY, payload: resp.data});
        } catch (error) {
            console.log(error);
        }
    }
};

//reset detalle
export const resetProperty = () => {
    return function(dispatch) {
        dispatch({ type: RESET_PROPERTY });
    }
};

//muestra props destacadas
export const muestraDestacadas = (obj) => {
    return function(dispatch){
        dispatch({type:MUESTRA_DESTACADAS, payload:obj});
    }
};

//cierra Modal imagen prop
export const isOpenModalPicture = () => {
    return function(dispatch){
        dispatch({type: IS_OPEN_MODAL_PICTURE});
    }
};

//reset propiedades
export const resetPropiedades = () => {
    return function(dispatch){
        dispatch({type: RESET_PROPS});
    }
}

//--EMPRENDIMIENTOS------------------------------
//trae emprendimientos
export const getEmprendimientos = () => {
    return async function(dispatch) {
        dispatch({type: LOADING});

        try {
            const resp = await axios.get(`${actual}/emprendimientos`); 
            dispatch({type: GET_EMPRENDIMIENTOS, payload: resp.data});
        } catch (error) {
            console.log(error);
        }
    }
}

//trae emprendimiento por ID
export const getEmprendimiento = (id) => { 
    return async function(dispatch) {
        dispatch({type: LOADING});
        const resp = await axios.get(`${actual}/emprendimientos/${id}`);
        dispatch({type: GET_EMPRENDIMIENTO, payload: resp.data});
    }
}

//reset emprendimientos
export const resetEmprendimientos = () => {
    return function(dispatch){
        dispatch({type: RESET_EMPRENDIMIENTO});
    }
}
