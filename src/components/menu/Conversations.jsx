import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useContext, useEffect, useState } from "react";
import { Socket } from "socket.io-client";
import { AccountContext } from "../../context/AccountProvider";
import { getUsers } from "../../services/api";
import Conversation from "./Conversation";

const useStyles = makeStyles({
  component: {
    height: "87vh",
    overflow: "overlay",
  },
});

const Conversations = ({ text }) => {
  const classes = useStyles();
  const [users, setUsers] = useState([]);
  const { account, socket, setactiveUsers } = useContext(AccountContext);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getUsers();
      const filteredData = data.filter((user) => {
        return user.name.toLowerCase().includes(text.toLowerCase());
      });
      console.log(filteredData);
      setUsers(filteredData);
    };
    fetchData();
  }, [text]);

  useEffect(() => {
    socket.current.emit("addUser", account.googleId);
    socket.current.on("getUsers", (users) => {
      setactiveUsers(users);
    });
  }, account);

  return (
    <Box className={classes.component}>
      {users?.map(
        (user) =>
          user.googleId !== account.googleId && <Conversation user={user} />
      )}
    </Box>
  );
};

export default Conversations;
