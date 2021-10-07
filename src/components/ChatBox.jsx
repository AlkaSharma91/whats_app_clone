import { Dialog, withStyles, makeStyles, Box } from "@material-ui/core";
import React from "react";
import Menu from "./menu/Menu";

const useStyles = makeStyles({
  component: {
    display: "flex",
  },
  leftComponent: {
    minWidth: 380,
  },
  rightComponent: {
    borderLeft: `1px solid rgba(0,0,0,0.14)`,
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
    overFlow: "hidden",
  },
};
const ChatBox = ({ classes }) => {
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
        <Box className={classname.rightComponent}>Hi</Box>
      </Box>
    </Dialog>
  );
};

export default withStyles(style)(ChatBox);
