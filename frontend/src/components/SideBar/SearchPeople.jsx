import React from "react";
import { styled } from "styled-components";

const SearchPeople = () => {
  return (
    <Container>
      <SearchInput placeholder="Search people ID" />
      <Image src="/images/search.png" alt="Search icon" />
    </Container>
  );
};

export default SearchPeople;

const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: #00364d;
  border-radius: 1em;
  display: flex;
  align-items: center;
  padding: 1em;
  box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.75) inset;
`;

const SearchInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: none;
  font-size: 1.2rem;
  color: #ffffff;
  margin-right: 1em;
  max-width: 100%; /* Add this line */
  width: 100%; /* Add this line */

  &:focus {
    outline: none;
  }
`;

const Image = styled.img`
  width: 35px;
  max-width: 100%;
  height: auto;
`;
