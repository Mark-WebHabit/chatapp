import React from "react";
import styled from "styled-components";

const AuthBackground = ({ children, page, error }) => {
  return (
    <Container>
      <FormContainer>
        <Image src="/images/man.png" alt="Profile Icon" />
        <PageText>{page}</PageText>
        <ErrorMessage $error={error}>{error || "error"}</ErrorMessage>
        {children}
      </FormContainer>
    </Container>
  );
};

export default AuthBackground;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(
    45deg,
    #00364d 0%,
    #00364d 50%,
    #004766 50%,
    #004766 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const FormContainer = styled.form`
  width: 25%;
  height: 47%;
  background-color: #006b99;
  border-radius: 1em;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50px;
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
`;

const PageText = styled.p`
  font-size: 1.4rem;
  color: #ffffff;
  font-weight: bold;
  margin-top: 50px;
  margin-bottom: 1.5em;
  text-transform: uppercase;
`;

const ErrorMessage = styled.span`
  display: block;
  text-align: center;
  margin: 1.5em;
  opacity: ${(props) => (props.$error ? "1" : "0")};
  font-size: 0.9rem;
  color: white;
`;
