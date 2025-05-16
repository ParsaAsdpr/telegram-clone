import styled from "styled-components";
import ChatCard from "./ChatCard";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex-grow: 1;
  padding: 8px;
`;

const ChatList = () => {
  const [activeChat, setActiveChat] = useState<number | null>(null);
  return (
    <Container>
      {[0, 1, 2, 3, 4].map((_, index) => (
        <ChatCard
          key={index}
          active={activeChat === index}
          onClick={() => setActiveChat(index)}
        />
      ))}
    </Container>
  );
};

export default ChatList;
