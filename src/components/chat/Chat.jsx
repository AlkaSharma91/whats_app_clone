import { Box } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../context/AccountProvider";
import { UserContext } from "../../context/UserProvider";
import { getConversation } from "../../services/api";

import ChatHeader from "./ChatHeader";
import Messages from "./Messages";

const Chat = () => {
  const [conversation, setConversation] = useState();
  const { person } = useContext(UserContext);
  const { account } = useContext(AccountContext);

  useEffect(() => {
    const getConversationDetails = async () => {
      const data = await getConversation({
        sender: account.googleId,
        receiver: person.googleId,
      });
      setConversation(data);
    };
    getConversationDetails();
  }, [person?.googleId]);
  return (
    <Box>
      <ChatHeader></ChatHeader>
      <Messages person={person} conversation={conversation}></Messages>
    </Box>
  );
};

export default Chat;
