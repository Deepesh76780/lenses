import { createContext, useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
const chatContext = createContext(null);

const ChatProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("userInfo");
    if (data) {
      setUser(JSON.parse(data));
    } else {
      <Redirect to="/" />;
    }
  }, []);

  return (
    <chatContext.Provider value={{ user, setUser }}>
      {children}
    </chatContext.Provider>
  );
};

export const ChatState = () => {
  return useContext(chatContext);
};

export default ChatProvider;
