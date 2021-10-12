import { createContext, useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

export const AccountContext = createContext(null);

const AccountProvider = ({ children }) => {
  const [account, setAccount] = useState();
  const [activeUsers, setactiveUsers] = useState([]);
  const [newMessageFlag, setnewMessageFlag] = useState(false);
  console.log(account);
  const socket = useRef();

  useEffect(() => {
    socket.current = io(`ws://localhost:9000`);
  }, []);

  return (
    <AccountContext.Provider
      value={{
        account,
        setAccount,
        socket,
        activeUsers,
        setactiveUsers,
        newMessageFlag,
        setnewMessageFlag,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};
export default AccountProvider;
