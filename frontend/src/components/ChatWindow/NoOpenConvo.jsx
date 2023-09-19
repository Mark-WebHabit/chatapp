import React from "react";
import styled from "styled-components";

const NoOpenConvo = () => {
  return (
    <Conatiner>
      <Image src="/images/info.png" alt="Info" />
      <Text>Open a conversation or start one with other user</Text>
    </Conatiner>
  );
};

export default NoOpenConvo;

const Conatiner = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
`;

const Image = styled.img``;

const Text = styled.p`
  font-family: "Itim", cursive;
  font-size: 4.5rem;
`;
