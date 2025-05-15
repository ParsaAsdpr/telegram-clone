import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import styled from "styled-components";

const InputContainer = styled.div`
  border-radius: 1000px;
  border: none;
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.textSecondary};
  padding: 8px 15px;
  display: flex;
  align-items: center;
  border: 2px solid transparent;
  flex-grow: 1;
  & svg {
    opacity: 0.6;
  }
  & input {
    border: none;
    background-color: transparent;
    color: ${({ theme }) => (theme.mode === "dark" ? "#ffffff" : "#000000")};
    font-size: 16px;
    margin-left: 10px;
    outline: none;
    min-width: 100px;
    width: 100%;
    font-family: "Roboto";
    &::placeholder {
      color: ${({ theme }) => theme.textSecondary};
    }
  }
  & .active {
    border-color: ${({ theme }) => theme.primary};
  }
`;

const SidebarSearchInput = () => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <InputContainer className={isFocused ? "focused" : ""}>
      <IoSearch size={23} />
      <input
        placeholder="Search"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </InputContainer>
  );
};

export default SidebarSearchInput;
