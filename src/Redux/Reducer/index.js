import { 
    GET_EMPRENDIMIENTO,
    GET_EMPRENDIMIENTOS,
    GET_PROPERTY, GET_PROPS, IS_OPEN_MODAL_PICTURE, LOADING,  RESET_EMPRENDIMIENTO,  RESET_PROPERTY,
    RESET_PROPS,   
} from "../Actions/ActionsType";

const initialState = {
    propiedades: [],
    totPropiedades: 0,
    propiedad: {},
    tipoOp: [],
    emprendimientos: [],
    emprendimiento: {},
    loading: true,
    isOpenModalPicture: false,
};


export default function rootReducer (state = initialState, action) {
    switch(action.type){
        case LOADING:
        return{
            ...state,
            loading: false
        };
        case GET_PROPS:
            return {
                ...state,
                loading: false,
                propiedades: action.payload.propiedades,
                totPropiedades: action.payload.total,
            };
        case GET_PROPERTY:
            return{
                ...state,
                propiedad: action.payload,
            };
        case RESET_PROPERTY:
            return{
                ...state,
                propiedad: {}
            };
        case IS_OPEN_MODAL_PICTURE:
            return{
                ...state,
                isOpenModalPicture: !state.isOpenModalPicture,
            };
        case RESET_PROPS:
            return{
                ...state,
                propiedades: []
            }
        case GET_EMPRENDIMIENTOS:
            return{
                ...state,
                emprendimientos: action.payload.empNormalizados,
                loading: false
            }
        case GET_EMPRENDIMIENTO:
            return{
                ...state,
                emprendimiento: action.payload,
                loading: false
            }
        case RESET_EMPRENDIMIENTO:
            return{
                ...state,
                emprendimiento: {}
            }
        default:
            return state;
    }
};