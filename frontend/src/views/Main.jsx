import React from "react";
import { styled } from "styled-components";

// components
import Sidebar from "../components/SideBar/Sidebar";
import ChatWindow from "../components/ChatWindow/ChatWindow";

// custome hook
import { useAuth } from "../context/AuthContext";

const Main = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <Container>
      <Sidebar />
      <ChatWindow />
    </Container>
  );
};

export default Main;

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 20% 1fr;
`;
