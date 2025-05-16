import styled from "styled-components";
import ActionButtons from "./ActionButtons";

const Container = styled.div`
  background: ${({ theme }) => theme.background};
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0 4px 0 #00000020;
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100% - 40px);
  z-index: 10;
  padding: 8px 20px;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  & > img {
    width: 40px;
    height: 40px;
    border-radius: 100px;
  }
  & > div {
    display: flex;
    flex-direction: column;
    & > h2 {
      font-weight: 570;
      font-size: 18px;
    }
    & > span {
      font-weight: 400;
      font-size: 14px;
      color: ${({ theme }) => theme.textSecondary};
    }
  }
`;

const ChatHeader = () => {
  return (
    <Container>
      <Profile>
        <img src="https://i.pravatar.cc/300" alt="user avatar" />
        <div>
          <h2>SGShop Group</h2>
          <span>225 members, 98 online</span>
        </div>
      </Profile>

      <ActionButtons />
    </Container>
  );
};

export default ChatHeader;
