import React, { useEffect } from "react";
import { styled } from "styled-components";
import { instance } from "../api/instance";

// components
import Sidebar from "../components/SideBar/Sidebar";
import ChatWindow from "../components/ChatWindow/ChatWindow";

const Main = () => {
  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const resposne = await instance.post("/user");

        console.log(resposne.data);
      } catch (error) {
        // Handle errors from the server here
        console.log(error);
        // if (error.response) {
        //   // The server responded with a non-2xx status code
        //   setError(error.response.data.message);
        // } else if (error.request) {
        //   // The request was made, but no response was received
        //   console.error("Request Error:", error.request);
        //   setError("An error occurred during request, try reloading the page");
        // } else {
        //   // Something else happened
        //   console.error("Error:", error.message);
        //   setError("Something went wrong, try reloading the page");
        // }
        console.log(error.message);
      }
    };
    getCurrentUser();
  }, []);
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
