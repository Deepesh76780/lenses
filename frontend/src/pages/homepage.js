import React, { useEffect } from "react";
import { Box, Container, Text } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Redirect } from "react-router-dom";
import Signup from "../component/Authentication/signup";
import Login from "../component/Authentication/login";

const Homepage = () => {
  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) {
      <Redirect to="/chat" />;
    }
  }, []);

  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent={"center"}
        p={"3"}
        bg={"rgb(71, 70, 70)"}
        borderRadius={"md"}
        shadow={"white"}
        w="100%"
        m="40px 0 15px 0"
      >
        <Text fontFamily={"work sans"} textAlign={"center"} fontSize={"4xl"}>
          lensechat
        </Text>
      </Box>
      <Box p={"3"} bg={"rgb(71, 70, 70)"} borderRadius={"md"} w="100%">
        <Tabs variant="enclosed">
          <TabList mb="1em">
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;
