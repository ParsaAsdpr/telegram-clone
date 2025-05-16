import { HiDotsVertical } from "react-icons/hi";
import styled from "styled-components";
import { IoSearch } from "react-icons/io5";

const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 5px;
  align-items: center;
  color: ${({ theme }) => theme.textSecondary};
`;

const ActionButton = styled.div`
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  transition: all 0.1s;
  &:hover {
    background-color: ${({ theme }) =>
      theme.mode === "dark" ? "#ffffff09" : "#00000020"};
  }
`;

const ActionButtons = () => {
  return (
    <Container>
      <ActionButton>
        <HiDotsVertical size={22} />
      </ActionButton>
      <ActionButton>
        <IoSearch size={22} />
      </ActionButton>
    </Container>
  );
};

export default ActionButtons;
