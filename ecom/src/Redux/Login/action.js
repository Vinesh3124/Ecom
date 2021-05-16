import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} from "./actiontype"
import axios from "axios"

const LoginAuth = (payload) => (dispatch) => {
    dispatch(loginRequest())
    axios.get(`https://ecommock.herokuapp.com/users?email=${payload.email}&password=${payload.password}`)
    .then(resp => {
        if(resp.data.length > 0){
            dispatch(loginSuccess(resp.data))
        }
        else if(resp.data.length === 0){
            dispatch(loginFailure())
        }
    })
    .catch(err => dispatch(loginFailure()))
}

const loginRequest = () => {
    return{
        type: LOGIN_REQUEST
    }
}

const loginSuccess = (payload) => {
    return{
        type: LOGIN_SUCCESS,
        payload
    }
}

const loginFailure = () => {
    return{
        type: LOGIN_FAILURE
    }
}

export {LoginAuth}