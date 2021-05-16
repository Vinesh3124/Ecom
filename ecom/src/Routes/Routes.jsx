import React from 'react'
import {Route, Switch} from "react-router-dom"
import { Homepage } from '../Components/HomePage/Homepage'
import { LoginPage } from '../Components/Login/LoginPage'
import { NavbarOnload } from '../Components/Navbar/NavbarOnload'

const Routes = () => {
    return (
        <div>
            <NavbarOnload />
            <Switch>
                <Route path="/" exact>
                    <Homepage />
                </Route>
                <Route path="/login">
                    <LoginPage />
                </Route>
            </Switch>
        </div>
    )
}

export default Routes
