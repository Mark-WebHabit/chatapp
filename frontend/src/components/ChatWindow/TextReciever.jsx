import React from "react";
import styled from "styled-components";

const TextReciever = () => {
  return (
    <Conatiner>
      <Profile src="/images/man.png" alt="Profile" />
      <Content>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad inventore
        earum adipisci veritatis at ut consequatur reiciendis facere
        reprehenderit quod.
      </Content>
    </Conatiner>
  );
};

export default TextReciever;

const Conatiner = styled.div`
  display: flex;
  align-items: center;
  max-width: 50%;
`;

const Profile = styled.img`
  height: 50px;
  width: 50px;
  margin: 1em;
`;

const Content = styled.p`
  background-color: #0047b3;
  color: #ffffff;
  padding: 1em;
`;
