import styled from "styled-components";
import RippleCard from "../common/RippleCard";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  active?: boolean;
}

const Card = styled(RippleCard)`
  display: flex;
  gap: 10px;
  border-radius: 10px;
  padding: 8px;
  cursor: pointer;
  flex-grow: 1;
  user-select: none;
  &:hover {
    background-color: ${({ theme }) =>
      theme.mode === "dark" ? "#ffffff09" : "#00000020"};
  }
  &.active {
    background-color: ${({ theme }) => theme.primary};
  }
  &.active p,
  &.active span {
    color: ${({ theme }) =>
      theme.mode === "dark" ? "#ffffff" : "#000000"} !important;
  }
  & img {
    border-radius: 1000px;
    width: 54px;
    height: 54px;
    flex-shrink: 0;
  }
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4px;
    flex-grow: 1;
    padding-right: 3px;
    min-width: 0;
    & p {
      color: ${({ theme }) => theme.textSecondary};
      font-size: 15px;
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    & .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 5px;
     & h3 {
        color: ${({ theme }) =>
          theme.mode === "dark" ? "#ffffff" : "#111111"};
        font-size: 16px;
        font-weight: 550;
        margin: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      & span {
        color: #686c72;
        font-size: 12px;
      }
    }
  }
`;

const ChatCard = ({ active, ...rest }: IProps) => {
  return (
    <Card className={active ? "active" : ""} {...rest}>
      <img src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />

      <div>
        <div className="card-header">
          <h3>Telegram</h3>
          <span>12:13</span>
        </div>
        <p>
          Telegram Web A Digest Many new features and useful optimizations have
          been added in recent months. Here is a brief overview of what's been{" "}
        </p>
      </div>
    </Card>
  );
};

export default ChatCard;
