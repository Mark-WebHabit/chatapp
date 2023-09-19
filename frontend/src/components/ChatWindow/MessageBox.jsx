import React from "react";
import styled from "styled-components";

const MessageBox = () => {
  return (
    <Conatiner>
      {/* put a 2 hidden input file that wil be trigger when the image icon and folder icon is clikced */}
      <ImageIcon src="/images/image.png" alt="Image Icon" />
      <FolderIcon src="/images/folder.png" alt="Fodler icon" />
      <InputSection>
        <MessageInput placeholder="type a message" />
        <SendIcon src="/images/send-message.png" />
      </InputSection>
    </Conatiner>
  );
};

export default MessageBox;

const Conatiner = styled.div`
  height: 100px;
  margin: 0.5em;
  background-color: #ffffff;
  border-radius: 0.5em;
  display: flex;
  align-items: center;
`;

const ImageIcon = styled.img`
  height: 50px;
  width: 50px;
  margin: 0 1em;
  cursor: pointer;
  user-select: none;
`;

const FolderIcon = styled(ImageIcon)``;

const InputSection = styled.form`
  display: flex;
  align-items: center;
  padding: 0 1em;
  min-width: 50%;
  max-width: 100%;
  height: 65px;
  background-color: #d9d9d9;
  border-radius: 1em;
`;

const MessageInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: none;
  font-size: 1.2rem;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #625a5a;
  }
`;

const SendIcon = styled.img`
  height: 30px;
  width: 30px;
  cursor: pointer;
`;
