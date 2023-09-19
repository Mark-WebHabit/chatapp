import React from "react";
import { styled } from "styled-components";

// components
import SearchPeople from "./SearchPeople";
import RecentConvo from "./RecentConvo";

const Sidebar = () => {
  return (
    <Container>
      <SearchPeople />
      <RecentConvoWrapper>
        <RecentConvo />
      </RecentConvoWrapper>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  background-color: #004766;
  padding: 1em;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const RecentConvoWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
