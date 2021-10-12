import React, { useState } from "react";
import Header from "./Header";
import Search from "./Search";
import Conversations from "./Conversations";
const Menu = () => {
  const [text, setText] = useState("");
  return (
    <>
      <Header></Header>
      <Search setText={setText}></Search>
      <Conversations text={text}></Conversations>
    </>
  );
};

export default Menu;
