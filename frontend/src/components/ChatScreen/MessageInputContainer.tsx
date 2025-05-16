import styled from "styled-components";
import MessageInput from "./MessageInput";
import Appendix from "../common/Appendix";

const Container = styled.div`
  padding: 10px 50px 20px 50px;
  display: flex;
  gap: 4px;
`;

const InputContainer = styled.div`
  border-radius: 15px;
  border-end-end-radius: 0;
  background-color: ${({ theme }) => theme.background};
  padding: 8px;
  color: ${({ theme }) => theme.textSecondary};
  flex-grow: 1;
  position: relative;

  & .appendix {
    path.corner {
      fill: ${({ theme }) => theme.background};
    }
  }
`;
const Button = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.background};
`;

const MessageInputContainer = () => {
  return (
    <Container>
      <InputContainer>
        <Appendix />
      </InputContainer>
      <MessageInput />
      <Button />
    </Container>
  );
};

export default MessageInputContainer;
