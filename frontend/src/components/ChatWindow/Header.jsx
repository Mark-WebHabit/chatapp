import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <UserInfo>
        <Profile src="/images/man.png" alt="Profile" />
        <Username>@johndoe</Username>
      </UserInfo>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  height: 100px;
  background-color: #d9d9d9;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Profile = styled.img`
  height: 70px;
  width: 70px;
  border-radius: 35px;
  margin: 0 1em;
`;

const Username = styled.p`
  font-size: 1.8rem;
`;
