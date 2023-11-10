import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const Chatpage = () => {
  const [chats, setChats] = useState([]);

  const fetchChat = async () => {
    const data = await axios.get("/api/chat");
    console.log(data.data);
    setChats(data.data);
  };

  useEffect(() => {
    fetchChat();
  }, []);

  return (
    <div>
      {chats.length > 0 &&
        chats.map((item, index) => <div key={index}>{item.chatName}</div>)}
    </div>
  );
};

export default Chatpage;
