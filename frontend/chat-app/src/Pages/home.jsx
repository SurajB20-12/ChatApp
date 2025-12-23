import React, { useState, useEffect } from "react";
import axios from "axios";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

import {
  Container,
  Box,
  Text,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";

function home() {
  return (
    <Container maxW={"xl"} centerContent>
      <Box
        d={"flex"}
        justifyContent={"center"}
        p={3}
        bg={"white"}
        w={"100%"}
        m={"40px 0 15px 0"}
        borderRadius={"lg"}
        borderWidth={"1px"}
      >
        <Text
          fontSize={"4xl"}
          fontFamily={"Work sans"}
          color={"black"}
          textAlign={"center"}
        >
          Talk-A-Tive
        </Text>
      </Box>
      <Box
        w={"100%"}
        p={4}
        borderRadius={"lg"}
        borderWidth={"1px"}
        bg={"white"}
        color={"black"}
      >
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
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
}

export default home;
