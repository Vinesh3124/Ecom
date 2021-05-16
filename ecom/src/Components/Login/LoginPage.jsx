import { Box, Button, Container, TextField } from '@material-ui/core'
import React from 'react'
import {LoginAuth} from "../../Redux/Login/action"
import {useDispatch, useSelector} from "react-redux"
import { Redirect } from 'react-router'

let initState = {
    email: "",
    password: ""
}

const LoginPage = () => {

    const dispatch = useDispatch()
    const [login, setLogin] = React.useState(initState)
    const {email, password} = login
    const userData = useSelector((state)=>state.login.data)
    const Auth = useSelector((state)=>state.login.isAuth)
    const [errAlert, setErrAlert] = React.useState(false)

    const handleChange = (e) => {
        const {name, value} = e.target
        setLogin({
            ...login, [name]:value
        })
    }
    
    const handleLogCheck = () => {
        dispatch(LoginAuth(login))
    }

    console.log(userData)

    React.useEffect(()=>{
        if(Auth === false){
            setErrAlert(true)   
        }
        else if(Auth == true){
            setErrAlert(false)
        }
    },[Auth])

    if(Auth){
        return(<Redirect to={"/"} push/>)
    }

    return (
        <Box>
            <Container maxWidth="xs" style={{border: "1px solid", marginTop: "10%", padding: 10}}>
                <TextField name="email" error={errAlert} value={email} onChange={handleChange} style={{marginTop: 15}} variant="outlined" label="Email" size="small" fullWidth={true}/>
                <TextField name="password" error={errAlert} value={password} onChange={handleChange} style={{marginTop: 15}} variant="outlined" label="Password" type="password" size="small" fullWidth={true}/>
                {
                    (errAlert && !Auth) && <p>Email or Password Incorrect...</p>
                }
                <Button onClick={()=>handleLogCheck()} style={{marginTop: 15, marginBottom: 15}} variant="contained" color="default">Login In</Button>
            </Container>
        </Box>
    )
}

export {LoginPage}
