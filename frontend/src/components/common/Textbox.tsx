import { useState } from "react";
import styled from "styled-components";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Container = styled.div`
  background: transparent;
  border: 1px solid ${({ theme }) => `${theme.textSecondary}50`};
  border-radius: 12px;
  padding: 14px 14px;
  font-family: 1rem;
  color: white;
  display: flex;
  gap: 0.25rem;
  position: relative;
  flex-grow: 1;
  transition: 0.3s ease all;
  width: 100%;
  cursor: text;
  & > label {
    color: ${({ theme }) => theme.textSecondary};
    background-color: ${({ theme }) => theme.background};
    padding: 0 6px;
    position: absolute;
    top: 13px;
    transition: 0.3s ease all;
    cursor: text;
    &.shrinked {
      font-size: 13px;
      transform: translateY(-70%);
      top: 0;
      left: 0.75rem;
    }
  }
  &.active,
  &:hover {
    border-color: ${({ theme }) => theme.primary};
    & > label {
      color: ${({ theme }) => theme.primary};
    }
  }
  &.active {
    outline: 1px solid ${({ theme }) => theme.primary};
  }
`;

const Input = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  color: ${({ theme }) => (theme.mode === "dark" ? "#ffffff" : "#000000")};
  height: 100%;
  font-family: "Roboto";
  font-weight: 410;
  font-size: 15px;
  flex-grow: 1;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const Textbox = ({ label, id = "textfield", type = "text", ...rest }: IProps) => {
  const [isFocused, setIsFocused] = useState(false);
  
  return (
    <Container className={isFocused ? "active" : ""}>
      <label htmlFor={id} className={isFocused ? "shrinked" : ""}>
        {label}
      </label>
      <Input
        id={id}
        type={type}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...rest}
      />
    </Container>
  );
};

export default Textbox;
