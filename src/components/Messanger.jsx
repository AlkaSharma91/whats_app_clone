import { AppBar, Box, makeStyles, Toolbar } from "@material-ui/core";
import React, { useContext } from "react";
import { AccountContext } from "../context/AccountProvider";
import Login from "./account/Login";
import ChatBox from "./ChatBox";

const useStyles = makeStyles({
  component: {
    background: "#DCDCDC",
    height: "100vh",
  },
  loginHeader: {
    height: 200,
    background: "#00bfa5",
    boxShadow: "none",
  },
  header: {
    height: 118,
    background: "#00bfa5",
    boxShadow: "none",
  },
});
const Messanger = () => {
  const { account } = useContext(AccountContext);
  const classes = useStyles();
  return (
    <>
      <Box className={classes.component}>
        <AppBar className={account ? classes.header : classes.loginHeader}>
          <Toolbar></Toolbar>
        </AppBar>
        {account ? <ChatBox /> : <Login />}
      </Box>
    </>
  );
};

export default Messanger;
