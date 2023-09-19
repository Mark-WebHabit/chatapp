import React from "react";
import { styled } from "styled-components";

// compoennts
import Header from "./Header";
import ChatBox from "./ChatBox";
import MessageBox from "./MessageBox";
import NoOpenConvo from "./NoOpenConvo";

const ChatWindow = () => {
  return (
    <Conatiner>
      {/* <NoOpenConvo /> */}
      <Wrapper>
        <Header />
        <ChatBox />
        <MessageBox />
      </Wrapper>
    </Conatiner>
  );
};

export default ChatWindow;
const Conatiner = styled.div`
  background-color: #b2b2b2;
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
