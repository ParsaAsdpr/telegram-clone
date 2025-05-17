import styled from "styled-components";

const Input = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  color: ${({ theme }) => (theme.mode === "dark" ? "#ffffff" : "#000000")};
  font-size: 16px;
  height: 100%;
  font-family: "Roboto";
  font-weight: 410;
  flex-grow: 1;
  &::placeholder {
    color: ${({ theme }) => theme.textSecondary};
  }
`;

const MessageInput = () => {
  return <Input placeholder="Message" />;
};

export default MessageInput;
