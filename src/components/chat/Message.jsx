import { Box, makeStyles, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";
const useStyles = makeStyles({
  wrapper: {
    background: "#FFFFFF",
    padding: 5,
    maxWidth: "60%",
    display: "flex",
    borderRadius: 10,
    width: "fit-content",
    wordBreak: "break-word",
  },
  own: {
    background: "#dcf8c6",
    padding: 5,
    maxWidth: "60%",
    display: "flex",
    borderRadius: 10,
    width: "fit-content",
    wordBreak: "break-word",
    marginLeft: "auto",
  },
  text: {
    fontSize: "14px",
    padding: "0 25px 0px 5px",
  },
  time: {
    fontSize: "10px",
    marginTop: "auto",
    marginTop: "6px",
    wordBreak: "keep-all",
    color: "#919191",
  },
});

const Message = ({ message }) => {
  const classes = useStyles();
  const { account } = useContext(AccountContext);

  const formatDate = (date) => {
    return date < 10 ? "0" + date : date;
  };
  return (
    <Box
      className={
        account.googleId === message.sender ? classes.own : classes.wrapper
      }
    >
      <Typography className={classes.text}>{message.text}</Typography>
      <Typography className={classes.time}>
        {formatDate(new Date(message.createdAt).getHours())}:
        {formatDate(new Date(message.createdAt).getMinutes())}
      </Typography>
    </Box>
  );
};

export default Message;
