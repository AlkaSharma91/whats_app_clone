import { Box } from "@material-ui/core";
import { Chat } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import React, { useContext, useState } from "react";
import { AccountContext } from "../../context/AccountProvider";
import InfoDrawer from "../drawer/InfoDrawer";
import HeaderMenu from "./HeaderMenu";

const useStyles = makeStyles({
  header: {
    height: 35,
    background: "#ededed",
    padding: "10px 16px",
    display:'flex',
    alignItems:'center'
  },
  avatar: {
    height: 37,
    width: 37,
    borderRadius: "50%",
  },
  icon:{
      marginLeft:'auto',
      '& > *':{
          marginLeft:2,
          padding:8,
          color:'#919191'
      },
      '&:first-child':{
          fontSize:22,
          marginLeft:8,
          marginTop:3
      }

  }
});
const Header = () => {
  const [open, setOpen] = useState()
  const { account } = useContext(AccountContext);
  const classes = useStyles();
  const toggleDrawer =() =>{
    setOpen(true)
    
  }
  return (
    <>
    <Box className={classes.header}>
      <img onClick={toggleDrawer} className={classes.avatar}src={account.imageUrl} alt="display pic" />
      <Box className={classes.icon}>
        <Chat />
        <HeaderMenu/>
      </Box>
    </Box>
    <InfoDrawer open={open} setOpen={setOpen}/>
    </>
  );
};

export default Header;
