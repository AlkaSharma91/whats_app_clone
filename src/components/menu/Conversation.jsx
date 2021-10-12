import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../context/AccountProvider";
import { UserContext } from "../../context/UserProvider";
import { getConversation, setConversation } from "../../services/api";
const useStyles = makeStyles({
  component: {
    display: "flex",
    height: 40,
    padding: "13px 0",
    cursor: "pointer",
  },
  displayPicture: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    padding: "0 14px",
  },
  timestamp: {
    fontSize: 12,
    marginLeft: "auto",
    marginRight: 20,
    color: "#00000099",
  },
  text: {
    color: "rgba(0,0,0,0.6)",
    fontSize: 14,
  },
});
const Conversation = ({ user }) => {
  const { setPerson } = useContext(UserContext);
  const { account, newMessageFlag } = useContext(AccountContext);
  const [message, setMessage] = useState();
  const classes = useStyles();

  useEffect(() => {
    const getConversationMessage = async () => {
      const data = await getConversation({
        sender: account.googleId,
        receiver: user.googleId,
      });
      console.log("data is", data);
      data&&setMessage({ text: data.message, timestamp: data.updatedAt });
    };
    getConversationMessage();
  }, [newMessageFlag]);

  const setUser = async () => {
    setPerson(user);
    await setConversation({
      senderId: account.googleId,
      receiverId: user.googleId,
    });
  };

  return (
    <Box className={classes.component} onClick={() => setUser()}>
      <Box>
        <img src={user.imageUrl} alt="dp" className={classes.displayPicture} />
      </Box>
      <Box style={{ width: "100%" }}>
        <Box style={{ display: "flex" }}>
          <Typography>{user.name}</Typography>
          {message?.text && (
            <Typography className={classes.timestamp}>
              {new Date(message.timestamp).getHours()}:
              {new Date(message.timestamp).getMinutes()}
            </Typography>
          )}
        </Box>
        <Box>
          <Typography className={classes.text}>{message?.text}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Conversation;
