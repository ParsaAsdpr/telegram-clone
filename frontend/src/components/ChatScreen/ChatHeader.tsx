import styled from "styled-components";
import ActionButtons from "./ActionButtons";
import BackButton from "../common/BackButton";

const Container = styled.div`
  background: ${({ theme }) => theme.background};
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0 4px 0 #00000020;
  width: calc(100% - 40px);
  z-index: 10;
  padding: 8px 20px;
  @media screen and (max-width: 700px) {
    padding: 8px 13px;
    width: calc(100% - 26px);
  }
  @media screen and (max-width: 450px) {
    padding: 7px;
    width: calc(100% - 14px);
  }
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

const StyledBackButton = styled(BackButton)`
  @media screen and (min-width: 700px) {
    display: none !important;
  }
`;

const ChatHeader = () => {
  return (
    <Container>
      <Profile>
        <StyledBackButton />
        <img src="https://i.pravatar.cc/300" alt="user avatar" />
        <div>
          <h2>Parsa</h2>
          <span>Online</span>
        </div>
      </Profile>

      <ActionButtons />
    </Container>
  );
};

export default ChatHeader;
