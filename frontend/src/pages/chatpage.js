import React from "react";
import axios from "axios";
import MyChat from "../component/MyChat";
import SideDrawer from "../component/misellaneous/SideDrawer";
import { ChatState } from "../context/ChatProvider";
import ChatBox from "../component/ChatBox";
import { Box } from "@chakra-ui/react";

const Chatpage = () => {
  const { user } = ChatState();
  const [fetchAgain, setFetchAgain] = React.useState(false);
  // console.log(user);

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box
        display="flex"
        justifyContent={"space-between"}
        w="100%"
        h="91.5vh"
        p="10px"
      >
        {user && <MyChat fetchAgain={fetchAgain} />}
        {user && (
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default Chatpage;
