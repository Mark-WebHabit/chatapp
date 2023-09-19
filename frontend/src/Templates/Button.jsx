import React from "react";
import styled from "styled-components";

const Button = ({ submit }) => {
  return (
    <Container role="button" onClick={submit}>
      <Text>SUBMIT</Text>
    </Container>
  );
};

export default Button;

const Container = styled.div`
  width: 90%;
  height: 50px;
  background-color: #00364d;
  margin: 0.5em 0;
  border-radius: 1em;
  display: grid;
  place-items: center;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 12px black inset;
  }
`;

const Text = styled.p`
  font-weight: bold;
  color: #ffffff;
  font-size: 1.2rem;
`;
