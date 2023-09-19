import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const RedirectLink = ({ text, path }) => {
  const navigate = useNavigate();
  return <Text onClick={() => navigate(path)}>{text}</Text>;
};

export default RedirectLink;

const Text = styled.p`
  width: 90%;
  text-align: right;
  color: #ffffff;
  cursor: pointer;
  position: absolute;
  bottom: 1em;
`;
