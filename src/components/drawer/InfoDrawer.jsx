import { Box, Drawer, Typography } from '@material-ui/core'
import { ArrowBack } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import Profile from './Profile'
const useStyles=makeStyles({
    header:{
        display:'flex',
        background:'#00bfa5',
        height:97,
        color:'#fff',
        '& >*':{
            marginTop:'auto',
            padding:15,
            fontWeight:600
        }

    },
    component:{
        background:'#ededed',
        height:'85%'

    }
})
const InfoDrawer = ({open,setOpen}) => {
    const classes=useStyles();
    const handleClose =() =>{
        setOpen(false)
    }
    return (
       <Drawer  open={open} onClose={handleClose}>
           <Box className={classes.header}>
           <ArrowBack onClick={handleClose}/>
           <Typography>Profile</Typography>

           </Box>
           <Box className={classes.component}>
           <Profile></Profile>
           </Box>
       </Drawer>
    )
}

export default InfoDrawer
