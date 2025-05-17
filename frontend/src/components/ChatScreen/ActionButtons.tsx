import { HiDotsVertical } from "react-icons/hi";
import styled from "styled-components";
import { IoSearch } from "react-icons/io5";
import IconButton from "../common/IconButton";

const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 5px;
  align-items: center;
  color: ${({ theme }) => theme.textSecondary};
`;

const ActionButtons = () => {
  return (
    <Container>
      <IconButton>
        <HiDotsVertical size={22} />
      </IconButton>
      <IconButton>
        <IoSearch size={22} />
      </IconButton>
    </Container>
  );
};

export default ActionButtons;
