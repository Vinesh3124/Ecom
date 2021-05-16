import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} from "./actiontype"

const initValue = {
    isLoading: false,
    isError: false,
    data: null,
    isAuth: null
}

export const loginReducer = (state=initValue, {type, payload}) => {
    switch(type){
        case LOGIN_REQUEST:{
            return{
                ...state,
                isLoading: true,
                isError: false
            }
        }
        case LOGIN_SUCCESS:{
            return{
                ...state,
                data: payload,
                isAuth: true,
                isLoading: false,
                isError: false
            }
        }
        case LOGIN_FAILURE:{
            return{
                ...state,
                isAuth: false,
                isError: true,
                isLoading: false
            }
        }
        default: return state
    }
}