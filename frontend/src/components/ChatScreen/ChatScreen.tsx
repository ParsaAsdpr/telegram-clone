import styled from "styled-components";

const Container = styled.div`
    background: ${({ theme }) =>
      theme.bodyBackground} url(/assets/images/bg-pattern-${({ theme }) => theme.mode === "dark" ? "dark" : "light"}.png) repeat fixed center;
    background-size: 500px auto;
    flex-grow: 1;
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
      display: ${({ theme }) => (theme.mode === "light" ? "block" : "none")};
    }
    @media screen and (max-width: 700px) {
        width: 100vw;
        height: 100vh;
    }
`

const ChatScreen = () => {
    return (
        <Container>
            
        </Container>
    );
};

export default ChatScreen;