import styled from "styled-components";
import MessageBubble from "./MessageBubble";
import { useEffect, useRef } from "react";

const Container = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 6px;

  &::-webkit-scrollbar {
    width: 7px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 100px;
  }
  &:hover::-webkit-scrollbar-thumb {
    background: #ffffff19;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #666;
  }
`;

const Top = styled.div`
  flex-grow: 1;
`;

const ChatContainer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "auto" });
  }, []);
  return (
    <Container ref={containerRef}>
      <Top />
      <MessageBubble />
      <span ref={bottomRef}></span>
    </Container>
  );
};

export default ChatContainer;
