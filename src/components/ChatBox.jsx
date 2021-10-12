import { Dialog, withStyles, makeStyles, Box } from "@material-ui/core";
import React, { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import Chat from "./chat/Chat";
import EmptyChat from "./chat/EmptyChat";
import Menu from "./menu/Menu";

const useStyles = makeStyles({
  component: {
    display: "flex",
    overFlow: "hidden",
  },
  leftComponent: {
    minWidth: 380,
  },
  rightComponent: {
    borderLeft: `1px solid rgba(0,0,0,0.14)`,
    width: "70%",
    minWidth: 300,
    height: "100%",
  },
});
const style = {
  dialogPaper: {
    height: "95%",
    width: "90%",
    boxShadow: "none",
    borderRadius: 0,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
};
const ChatBox = ({ classes }) => {
  const { person } = useContext(UserContext);
  const classname = useStyles();
  return (
    <Dialog
      open={true}
      classes={{ paper: classes.dialogPaper }}
      BackdropProps={{ style: { backgroundColor: "unset" } }}
    >
      <Box className={classname.component}>
        <Box className={classname.leftComponent}>
          <Menu></Menu>
        </Box>
        <Box className={classname.rightComponent}>
          {Object.keys(person).length ? <Chat /> : <EmptyChat></EmptyChat>}
        </Box>
      </Box>
    </Dialog>
  );
};

export default withStyles(style)(ChatBox);
