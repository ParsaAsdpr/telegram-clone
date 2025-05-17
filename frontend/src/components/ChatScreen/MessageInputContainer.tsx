import styled from "styled-components";
import MessageInput from "./MessageInput";
import Appendix from "../common/Appendix";
import { BsEmojiSmile } from "react-icons/bs";
import { ImAttachment } from "react-icons/im";
import { GrMicrophone } from "react-icons/gr";

const Container = styled.div`
  padding: 10px 20px 20px 20px;
  display: flex;
  gap: 10px;
  z-index: 2;
  @media screen and (max-width: 700px) {
    gap: 8px;
    padding: 10px 15px 12px 15px;
  }
  @media screen and (max-width: 450px) {
    gap: 6px;
    padding: 6px 8px;
  }
`;

const InputContainer = styled.div`
  border-radius: 15px;
  border-end-end-radius: 0;
  background-color: ${({ theme }) => theme.background};
  padding: 15px;
  color: ${({ theme }) => theme.textSecondary};
  flex-grow: 1;
  position: relative;
  display: flex;
  align-items: center;
  gap: 13px;
  & .appendix {
    path.corner {
      fill: ${({ theme }) => theme.background};
    }
  }
  @media screen and (max-width: 700px) {
    gap: 10px;
  }
  @media screen and (max-width: 450px) {
    gap: 8px;
  }
`;
const Button = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.textSecondary};
  background-color: ${({ theme }) => theme.background};
  @media screen and (max-width: 450px) {
    width: 45px;
    height: 45px;
  }
`;

const MessageInputContainer = () => {
  return (
    <Container>
      <InputContainer>
        <Appendix />
        <BsEmojiSmile size={22} />
        <MessageInput />
        <ImAttachment size={20} />
      </InputContainer>
      <Button>
        <GrMicrophone size={22} />
      </Button>
    </Container>
  );
};

export default MessageInputContainer;
