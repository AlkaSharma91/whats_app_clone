import { Box, Typography } from "@material-ui/core";
import { MoreVert, Search } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import React, { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";
import { UserContext } from "../../context/UserProvider";

const useStyles = makeStyles({
  header: {
    display: "flex",
    height: 35,
    background: "#ededed",
    padding: "10px 16px",
    alignItems: "center",
  },
  dp: {
    borderRadius: "50%",
    width: 37,
    height: 37,
    padding: "0px 2px",
  },
  name: {
    marginLeft: 10,
  },
  status: {
    marginLeft: 10,
    fontSize: 12,
    color: "rgba(0,0,0,0.6)",
  },
  rightContainer: {
    marginLeft: "auto",
    "&>*": {
      padding: 8,
      fontSize: 22,
    },
  },
});
const ChatHeader = () => {
  const classes = useStyles();
  const { person } = useContext(UserContext);
  const { activeUsers } = useContext(AccountContext);
  console.log("active users are", activeUsers);

  return (
    <Box className={classes.header}>
      <img src={person.imageUrl} alt="" className={classes.dp} />
      <Box>
        <Typography className={classes.name}>{person.name} </Typography>
        <Typography className={classes.status}>
          {activeUsers?.find((user) => user.userId === person.googleId)
            ? "online"
            : "offline"}
        </Typography>
      </Box>
      <Box className={classes.rightContainer}>
        <Search />
        <MoreVert />
      </Box>
    </Box>
  );
};

export default ChatHeader;
