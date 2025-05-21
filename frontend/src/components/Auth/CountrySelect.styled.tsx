import styled from "styled-components";

export const SelectWrapper = styled.div`
  position: relative;
  flex-grow: 1;
  font-family: "Roboto";
`;

export const InputBox = styled.div`
  background: transparent;
  border: 1px solid ${({ theme }) => `${theme.textSecondary}50`};
  border-radius: 12px;
  padding: 11px 14px;
  font-family: 1rem;
  color: white;
  display: flex;
  justify-content: space-between;
  position: relative;
  & > svg {
    transition: 0.3s ease all;
  }
  & > label {
    color: ${({ theme }) => theme.textSecondary};
    background-color: ${({ theme }) => theme.background};
    padding: 0 6px;
    position: absolute;
    top: 13px;
    transition: 0.3s ease all;
    &.shrinked {
      font-size: 13px;
      transform: translateY(-70%);
      top: 0;
      left: 0.75rem;
    }
  }
  &.focused {
    border-color: ${({ theme }) => theme.primary};
    & > label {
      color: ${({ theme }) => theme.primary};
    }
    & > svg {
      transform: scaleY(-1);
      color: ${({ theme }) => theme.primary};
    }
  }
`;

export const Dropdown = styled.ul`
  background: ${({ theme }) => `${theme.background}`};
  box-shadow: 0 3px 6px 0 #00000050;
  border-radius: 12px;
  list-style: none;
  padding: 6px 4px;
  margin: 4px 0 0;
  max-height: 200px;
  overflow-y: auto;
  position: absolute;
  transform: translateY(5px);
  width: 100%;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
    padding: 2px 0;
  }
  &::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 100px;
  }
  &:hover::-webkit-scrollbar-thumb {
    background: #ffffff10;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #ffffff20;
  }
`;

export const DropdownItem = styled.li`
  padding: 3px 15px 3px 5px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 560;
  align-items: center;
  color: ${({ theme }) => (theme.mode === "dark" ? "#ffffff" : "#000000")};
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.bodyBackground};
  }
`;

export const CountryInfo = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 5px;
`;

export const DialCode = styled.span`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 14px;
`;

export const Flag = styled.span`
  & img {
    width: 30px;
    height: 30px;
  }
`;
