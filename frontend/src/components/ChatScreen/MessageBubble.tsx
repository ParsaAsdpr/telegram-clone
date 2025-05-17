import styled from "styled-components";
import Appendix from "../common/Appendix";

const MessageGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0 12px;
  gap: 4px;
`;

const Bubble = styled.div`
  background-color: ${({ theme }) => theme.primary};
  min-width: 100px;
  max-width: 80%;
  border-radius: 20px;
  border-end-end-radius: 8px;
  border-start-end-radius: 8px;
  padding: 6px 10px;
  position: relative;
  & .appendix {
    display: none;
    path.corner {
      fill: ${({ theme }) => theme.primary};
    }
  }
  &:first-child {
    border-start-end-radius: 20px;
  }
  &:last-child {
    border-end-end-radius: 0px;
    & .appendix {
      display: block !important;
    }
  }
`;

const MessageBubble = () => {
  return (
    <MessageGroup>
      <Bubble>
        <Appendix />
        <p>same</p>
      </Bubble>
      <Bubble>
        <Appendix />
        <p>same</p>
      </Bubble>
      <Bubble>
        <Appendix />
        <p>same</p>
      </Bubble>
    </MessageGroup>
  );
};

export default MessageBubble;
