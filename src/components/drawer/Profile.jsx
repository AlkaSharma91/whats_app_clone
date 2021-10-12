import { Box, makeStyles, Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { AccountContext } from '../../context/AccountProvider'


const useStyles=makeStyles({
    imageConatiner:{
        display:'flex',
        justifyContent:'center'

    },
    displayPicture:{
        width:180,
        height:180,
        borderRadius:'50%',
        padding:'18px 0'

    },
     nameContainer:{
        background: '#FFFFFF',
        padding: '12px 30px 2px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
        '& :first-child': {
            fontSize: 14   ,
            color:'#009688' 
        },
        '& :last-child': {
            margin: '14px 0',
            color: '#4A4A4A'
        }

    },
    description:{
        padding:'10px 20px 28px 30px',
        '& > *':{
            fontSize:12,
            color:'rgba(0,0,0,0.45)'
        }
    }
})
const Profile = () => {
    const classes=useStyles();
    const {account,setAccount} = useContext(AccountContext)
    return (
        <>
        <Box className={classes.imageConatiner}>
        <img src={account.imageUrl} className={classes.displayPicture} alt="" />

        </Box>
        <Box className={classes.nameContainer}>
        <Typography>Your name</Typography>
        <Typography>{account.name}</Typography>

        </Box>
        <Box className={classes.description}>
            <Typography>This is not username or pin. This name will be visible to your whats app contacts</Typography>
        </Box>
        <Box className={classes.nameContainer}>
           <Typography>About</Typography>
           <Typography>Om Namah Shivay</Typography>
        </Box>
        </>
    )
}

export default Profile
