import { Box, makeStyles } from "@material-ui/core";
import React, { useContext, useEffect, useRef, useState } from "react";
import { AccountContext } from "../../context/AccountProvider";
import { getMessages, newMessage } from "../../services/api";

import Footer from "./Footer";
import Message from "./Message";

const useStyles = makeStyles({
  wrapper: {
    backgroundImage: `url(${"https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png"})`,
    // height: 'calc(100% - 114px)',
    backgroundSize: "50%",
  },
  footer: {
    height: "55px",
    background: "#ededed",
    // position: 'absolute',
    width: "100%",
    // bottom: 0
  },
  component: {
    height: "79vh",
    overflowY: "scroll",
  },
  container: {
    padding: "1px 80px",
  },
});

const Messages = ({ person, conversation }) => {
  const [incomingMessage, setincomingMessage] = useState(null);
  const classes = useStyles();
  const scrollRef = useRef();
  const [value, setValue] = useState();
  const { account, socket, newMessageFlag, setnewMessageFlag } =
    useContext(AccountContext);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView();
  }, [messages]);

  useEffect(() => {
    socket.current.on("getMessage", (data) => {
      setincomingMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    incomingMessage &&
      conversation?.members?.includes(incomingMessage.sender) &&
      setMessages((preVal) => [...preVal, incomingMessage]);
  }, [incomingMessage, conversation]);

  useEffect(() => {
    const getMessageDetails = async () => {
      const response = await getMessages(conversation?._id);

      console.log("response is", response);
      setMessages(response.data);
    };
    getMessageDetails();
  }, [conversation?._id, person?._id, newMessageFlag]);

  const receiverId = conversation?.members.find(
    (member) => member !== account.googleId
  );

  const sendText = async (e) => {
    if (!value) {
      return;
    }
    console.log(value);
    let code = e.keyCode || e.which;

    if (code === 13) {
      let message = {
        sender: account.googleId,
        conversationId: conversation._id,
        text: value,
      };

      socket.current.emit("sendMessage", {
        senderId: account.googleId,
        receiverId,
        text: value,
      });

      await newMessage(message);
      setValue("");
      setnewMessageFlag((pre) => !pre);
    }
  };
  return (
    <Box className={classes.wrapper}>
      <Box className={classes.component}>
        {messages &&
          messages.map((message) => (
            <Box className={classes.container}>
              <Message message={message}></Message>
            </Box>
          ))}
      </Box>
      <Footer sendText={sendText} value={value} setValue={setValue}></Footer>
    </Box>
  );
};

export default Messages;
