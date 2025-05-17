import styled from "styled-components";
import Appendix from "../common/Appendix";
import { BiCheckDouble } from "react-icons/bi";

const MessageGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0 12px;
  gap: 4px;
`;

const Bubble = styled.div`
  background-color: ${({ theme }) => theme.primary};
  color: #ffffff;
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
  & > p{
    float: left;
  }
  & span {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 3px;
    align-self: flex-end;
    transform: translateY(20%);
    float: right;
    padding-left: 8px;
    & p {
      font-size: 12px;
      color: #ffffffaa;
    }
  }
`;

const MessageBubble = () => {
  return (
    <MessageGroup>
      <Bubble>
        <Appendix />
        <p>
          Lorem ipsum dolor sit amet consectetur 
        </p>
        <span>
          <p>12:13</p>
          <BiCheckDouble size={20} />
        </span>
      </Bubble>
      <Bubble>
        <Appendix />
        <p>same</p>
        <span>
          <p>12:13</p>
          <BiCheckDouble size={20} />
        </span>
      </Bubble>
      <Bubble>
        <Appendix />
        <p>same</p>
        <span>
          <p>12:13</p>
          <BiCheckDouble size={20} />
        </span>
      </Bubble>
    </MessageGroup>
  );
};

export default MessageBubble;
