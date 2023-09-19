import React from "react";
import styled from "styled-components";

const TextSender = () => {
  return (
    <Conatiner>
      <Content>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        quibusdam! Natus doloremque quam totam enim alias voluptatibus hic
        aliquam atque.
      </Content>
    </Conatiner>
  );
};

export default TextSender;

const Conatiner = styled.div`
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: right;
  max-width: 50%;
  margin: 1em;
  background-color: #b9b9b9;
`;

const Content = styled.p`
  padding: 1em;
`;
