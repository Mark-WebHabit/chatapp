import React from "react";
import { styled } from "styled-components";

// components
import Sidebar from "../components/SideBar/Sidebar";
import ChatWindow from "../components/ChatWindow/ChatWindow";

// custome hook
import useAuth from "../hooks/useAuth.js";
import { Navigate } from "react-router-dom";

const Main = () => {
  const [user, loading] = useAuth();

  if (loading) {
    return <div>Loading</div>;
  }
  // if there is no user found
  if (!user?.username) {
    return <Navigate to={"/"} />;
  }
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
