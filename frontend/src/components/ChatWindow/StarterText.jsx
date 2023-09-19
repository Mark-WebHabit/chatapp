import React from "react";
import styled from "styled-components";

const StarterText = () => {
  return (
    <StarterWrapper>
      <Line />
      <Text>Start a conversation...</Text>
      <Line />
    </StarterWrapper>
  );
};

export default StarterText;

const StarterWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 1em 0;
`;

const Line = styled.div`
  flex: 1;
  border: 1px solid black;
`;

const Text = styled.p`
  font-size: 1.5rem;
`;
