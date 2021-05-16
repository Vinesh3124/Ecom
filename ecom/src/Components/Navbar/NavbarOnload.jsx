import React from 'react'
import styled from "styled-components"
import { AppBar, IconButton, Toolbar, Button, Drawer, Avatar, Divider, Badge, Grid, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { makeStyles } from '@material-ui/core/styles';
import SettingsIcon from '@material-ui/icons/Settings';
import {useDispatch, useSelector} from "react-redux"

const Searchbox = styled.div`
    width: 30%;
    height: 18px;
    padding: 5px;
    margin-left: 12%;
    border: 1px solid inherit;
    background-color: white;
    border-radius: 5px;
    display: flex;
    margin-top: -1%;
`

const NavButtonContainer = styled.div`
    width: 12%;
    margin-left: 32%;
    display: flex;
    justify-content: space-between;
    margin-top: -1%;
`

const SearchInput = styled.input`
    width: 85%;
    height: 100%;
    margin-top: 0%;
    background-color: inherit;
    border: none;
    outline: none;
    color: black;
    font-size: 18px;
    margin-left: 2%;
`

const AvBox = {
    width: 130, 
    height: 130,
    margin: "auto",
    marginTop: "15%"
}
const bar = {
    backgroundColor: "grey",
    marginTop: "10%",
    marginBottom: "10%"
}

const bar1 ={
    backgroundColor: "grey",
    marginTop: "82%",
    marginBottom: "5%"
}

const useStyles = makeStyles((theme) => ({
    drawerPaper:{
        backgroundColor: "#505050"
    }
}))

const NavbarOnload = () => {

    const classes = useStyles()
    const Auth = useSelector((state)=>state.login.isAuth)
    const userData = useSelector((state)=>state.login.data)
    const [open, setOpen] = React.useState(false)
    console.log(userData)
    const handleDrawerOpen = () =>  {
        setOpen(true)
    }

    const handleDrawerClose = () => {
        setOpen(false)
    }

    const handleOpenSettings = () => {
        alert("Hello")
    }

    return (
        <AppBar style={{height: 50}} position="sticky">

            <Toolbar>
                {Auth && 
                    <IconButton style={{marginTop: "-1%"}} edge="start" onClick={handleDrawerOpen} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                }

                <Drawer 
                    onClick={handleDrawerClose} 
                    anchor="left" 
                    open={open}
                    classes={{
                        paper: classes.drawerPaper
                    }}
                >
                    <div style={{padding: 5, width: 250, color: "white", textAlign: "center"}}>
                        <Avatar style={AvBox}></Avatar>
                        <Divider style={bar}/>
                        <Grid>
                            <Typography>{userData?.map(el=>el.name)}</Typography>
                        </Grid>
                        <Grid style={{marginTop: "10%"}}>
                            <Typography>{userData?.map(
                                el=>el.address.House + " " + el.address.Street +
                                " " + el.address.city + " " + el.address.State +
                                " " + el.address.Pincode
                                )}</Typography>
                        </Grid>
                    </div>
                    <Divider style={bar1}/>
                    <IconButton onClick={handleOpenSettings} color="secondary" aria-label="settings">
                        <SettingsIcon />
                        <Typography style={{marginLeft: "2%"}} >Settings</Typography>
                    </IconButton>
                </Drawer>

                <IconButton>
                    <div style={{marginLeft: "25%", marginTop: "-12%"}}>
                        <img style={{width: 60, height: 30, borderRadius: 50}} src="https://assets.hongkiat.com/uploads/psd-text-svg/logo-example.jpg"/>
                    </div>
                </IconButton>
                <Searchbox>
                    <SearchInput />
                    <IconButton>
                        <SearchIcon style={{color: "blue"}}/>
                    </IconButton>
                </Searchbox>

                {!Auth && <NavButtonContainer>
                    <Button style={{backgroundColor: "white", color: "black"}}>Sign Up</Button>
                    <Button style={{backgroundColor: "white", color: "black"}}>Login</Button>
                </NavButtonContainer>}

                {Auth && <IconButton style={{marginLeft: "38%", marginTop: "-1%"}} color="inherit">
                    <Badge badgeContent={0} color="secondary">
                        <FavoriteIcon />
                    </Badge>
                </IconButton>}
                {Auth && <IconButton style={{marginLeft: "1%", marginTop: "-1%"}} color="inherit">
                    <Badge badgeContent={0} color="secondary">
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton>}

            </Toolbar>
        </AppBar>
    )
}

export {NavbarOnload}
