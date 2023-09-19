import React from "react";
import styled from "styled-components";

const RecentConvo = () => {
  return (
    <Container>
      <Wrapper>
        <Profile src="/images/man.png" alt="Profile" />
        <Username>@johndoe</Username>
      </Wrapper>
    </Container>
  );
};

export default RecentConvo;

const Container = styled.div`
  background-color: #d9d9d9;
  height: 60px;
  border-radius: 1em;
  width: 95%;
  display: flex;
  align-items: center;
  padding-left: 0.5em;
  cursor: pointer;

  &:hover {
    transition: 200ms;
    transform: scale(1.1);
  }
`;

const Profile = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 1em;
`;

const Username = styled.p`
  font-size: 1.2rem;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
