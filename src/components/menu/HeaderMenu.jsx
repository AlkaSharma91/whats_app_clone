import { MoreVert } from '@material-ui/icons'
import {Menu,MenuItem} from '@material-ui/core'
import React,{useState} from 'react'

const HeaderMenu = () => {
    const [open, setOpen] = useState(false)
    const handleClick = (e) =>{
        setOpen(e.currentTarget)

    }
    const handleClose = () =>{
        setOpen(false)

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
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
        </>
    )
}

export default HeaderMenu

