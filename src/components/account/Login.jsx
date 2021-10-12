import {
  Box,
  Dialog,
  withStyles,
  makeStyles,
  Typography,
  List,
  ListItem,
} from "@material-ui/core";
import React, { useContext } from "react";
import GoogleLogin from "react-google-login";
import { AccountContext } from "../../context/AccountProvider";
import { clientId } from "../../constants/data";
import { addUser } from "../../services/api";

const useStyles = makeStyles({
  component: {
    display: "flex",
  },
  leftComponent: {
    padding: "56px 0 56px 56px",
  },
  qrCode: {
    height: 264,
    width: 264,
  },
  title: {
    fontSize: 26,
    marginBottom: 25,
    color: "#525252",
    fontFamily:
      "Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif",
    fontWeight: 300,
  },
  list: {
    "& > *": {
      fontSize: 18,
      padding: 0,
      marginTop: 15,
      lineHeight: "26px",
      color: "#4a4a4a",
    },
  },
});

const style = {
  dialogPaper: {
    height: "95%",
    width: "60%",
    marginTop: "12%",
    boxShadow: "none",
    borderRadius: 0,
    maxHeight: "100%",
    maxWidth: "100%",
    overFlow: "hidden",
  },
};
const Login = ({ classes }) => {
  const { account, setAccount } = useContext(AccountContext);
  const classname = useStyles();
  const qrurl = "https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg";
  

  const onLoginSuccess = async(res) => {
    console.log("login success", res.profileObj);
    setAccount(res.profileObj);
    await addUser(res.profileObj);
  };
  const onLoginFailure = () => {
    console.log("login failure");
  };
  return (
    <Dialog
      open={true}
      classes={{ paper: classes.dialogPaper }}
      BackdropProps={{ style: { backgroundColor: "unset" } }}
    >
      <Box className={classname.component}>
        <Box className={classname.leftComponent}>
          <Typography className={classname.title}>
            Open Whats app on your computer
          </Typography>
          <List className={classname.list}>
            <ListItem>1.Open Whats app on your phone</ListItem>
            <ListItem>
              2.Tap Menu or settings and select Linked Devices
            </ListItem>
            <ListItem>
              3.Point your phone to this screen to capture the code
            </ListItem>
          </List>
        </Box>
        <Box style={{ position: "relative" }}>
          <img src={qrurl} alt="qr" className={classname.qrCode}></img>
          <Box
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-24px, -41px)",
            }}
          >
            <GoogleLogin
              clientId={clientId}
              buttonText=""
              isSignedIn={true}
              onSuccess={onLoginSuccess}
              onFailure={onLoginFailure}
              cookiePolicy={"single_host_origin"}
            />
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
};

export default withStyles(style)(Login);
