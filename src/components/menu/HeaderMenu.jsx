import { MoreVert } from '@material-ui/icons'
import {Menu,MenuItem,makeStyles} from '@material-ui/core'
import React,{useContext, useState} from 'react'
import { GoogleLogout } from 'react-google-login'
import { clientId } from '../../constants/data'
import { AccountContext } from '../../context/AccountProvider'
import InfoDrawer from '../drawer/InfoDrawer'

const styles=makeStyles({
    menuItem:{
        fontSize:14,
        padding:'15px 60px 5px 24px',
        color:'#4A4A4A'
    },
    logout:{
        border:'none!important',
        boxShadow:'none!important',
        '&>*':{
            padding:'0px!important'
        }
    }

})

const HeaderMenu = () => {
    const [openDrawer, setOpenDrawer] = useState()
    const classes=styles();
    const {setAccount} = useContext(AccountContext)
    
    const [open, setOpen] = useState(false)
    const handleClick = (e) =>{
        setOpen(e.currentTarget)

    }
    const handleClose = () =>{
        setOpen(false)

    }
    const onLogoutSuccess =() =>{
        alert('You have successfully logged out');
        console.log("successfully logged out")
        setAccount(null);
        console.clear();
    }

    const onLogoutFailure =() =>{
        console.log("failed to logout")
        
    }
    const toggleDrawer =() =>{
        setOpenDrawer(true)
        
      }
    return (
        <>
        <MoreVert  onClick={handleClick}/>
        <Menu
        id="basic-menu"
        anchorEl={open}
        open={open}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical:'bottom',
            horizontal:'center'
        }}
        transformOrigin={{
            vertical:'top',
            horizontal:'right'

        }}
       
      >
        <MenuItem className={classes.menuItem} onClick={()=>{handleClose();toggleDrawer()}}>Profile</MenuItem>
        <MenuItem className={classes.menuItem} onClick={handleClose}>
            <GoogleLogout
              clientId={clientId}
              buttonText="Logout"
              isSignedIn={true}
              onLogoutSuccess={onLogoutSuccess}
              onFailure={onLogoutFailure}
              cookiePolicy={"single_host_origin"}
              className={classes.logout}>
             
                
            </GoogleLogout>
        </MenuItem>
      </Menu>
      <InfoDrawer open={openDrawer} setOpen={setOpenDrawer}/>
        </>
    )
}

export default HeaderMenu

