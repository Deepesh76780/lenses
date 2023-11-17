import React from "react";
import axios from "axios";
import MyChat from "../component/MyChat";
import SideDrawer from "../component/misellaneous/SideDrawer";
import { ChatState } from "../context/ChatProvider";
import { Box } from "@chakra-ui/react";

const Chatpage = () => {
  const { user } = ChatState();
  console.log(user);

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box
        d="flex"
        justifyContent={"space-between"}
        w="100%"
        h="91.5vh"
        p="10px"
      >
        {user && <MyChat />}
        {/* {user && <ChatBox />} */}
      </Box>
    </div>
  );
};

export default Chatpage;
