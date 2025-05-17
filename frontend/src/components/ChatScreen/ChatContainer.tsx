import styled from "styled-components";
import MessageBubble from "./MessageBubble";

const Container = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  z-index: 2;
  display: flex;
  flex-direction: column;
`;

const Top = styled.div`
  flex-grow: 1;
`;

// const Messages = styled.div`

// `

const ChatContainer = () => {
  return (
    <Container>
      <Top />
      <MessageBubble />
    </Container>
  );
};

export default ChatContainer;
