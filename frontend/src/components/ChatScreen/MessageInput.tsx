import styled from "styled-components";

const Input = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  color: ${({ theme }) => (theme.mode === "dark" ? "#ffffff" : "#000000")};
  font-size: 17px;
  height: 100%;
  font-weight: 540;
  flex-grow: 1;
  &::placeholder {
    color: ${({ theme }) => theme.textSecondary};
  }
`;

const MessageInput = () => {
  return <Input placeholder="Message" />;
};

export default MessageInput;
