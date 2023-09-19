import React from "react";
import styled from "styled-components";

// components
import StarterText from "./StarterText";
import TextReciever from "./TextReciever";
import TextSender from "./TextSender";

const ChatBox = () => {
  return (
    <Conatiner>
      <StarterText />
      <TextReciever />
      <TextSender />
      <TextReciever />
    </Conatiner>
  );
};

export default ChatBox;

const Conatiner = styled.div`
  flex: 1;
  padding: 1em 0;
  background-color: #ffffff;
  box-shadow: 0px 0px 5px black;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
