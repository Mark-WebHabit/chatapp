import React from "react";
import styled from "styled-components";

const AuthInputBox = ({
  placeholder,
  type = "text",
  handleOnChange,
  value,
}) => {
  return (
    <Container>
      <Input
        type={type}
        placeholder={placeholder}
        maxLength={40}
        onChange={handleOnChange}
        value={value}
      />
    </Container>
  );
};

export default AuthInputBox;

const Container = styled.div`
  width: 90%;
  height: 50px;
  margin: 1m auto;
  background-color: #004766;
  border-radius: 1em;
  margin: 0.5em 0;
`;

const Input = styled.input`
  height: 100%;
  width: 100%;
  background: transparent;
  border: none;
  font-size: 1.2rem;
  color: #ffffff;
  padding: 0 1em;

  &:focus {
    outline: none;
  }
`;
