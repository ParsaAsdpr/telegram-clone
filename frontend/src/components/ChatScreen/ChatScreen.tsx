import styled from "styled-components";
import ChatHeader from "./ChatHeader";
import MessageInputContainer from "./MessageInputContainer";
import ChatContainer from "./ChatContainer";

const Container = styled.div`
    background: ${({ theme }) =>
      theme.bodyBackground} url(/assets/images/bg-pattern-${({ theme }) => theme.mode === "dark" ? "dark" : "light"}.png) repeat fixed center;
    background-size: 500px auto;
    flex-grow: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100dvh;
    &::before{
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: url(/assets/images/bg-gradient.png) no-repeat fixed center;
      background-size: cover;
      opacity: 0.6;
      z-index: 1;
      display: ${({ theme }) => (theme.mode === "light" ? "block" : "none")};
    }
    @media screen and (max-width: 700px) {
        width: 100vw;
        height: 100dvh;
    }
`

const Centered = styled.div`
    width: 100%;
    margin: 0 auto;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    @media screen and (min-width: 1280px) {
        max-width: 700px;
    }
`

const ChatScreen = () => {
    return (
        <Container>
            <ChatHeader />
            <Centered>
                <ChatContainer />
                <MessageInputContainer />
            </Centered>
        </Container>
    );
};

export default ChatScreen;