import React from "react"
import { applyMiddleware, combineReducers, createStore } from "redux"
import { compose } from "redux"
import thunk from "redux-thunk"
import {loginReducer} from "./Login/loginreducer"


const rootreducer = combineReducers({
    login: loginReducer
})

const store = createStore(rootreducer, compose(applyMiddleware(thunk)))

export {store}