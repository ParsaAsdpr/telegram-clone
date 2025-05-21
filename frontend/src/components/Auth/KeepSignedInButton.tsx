import { IoMdCheckmark } from "react-icons/io";
import styled from "styled-components";

const Checkbox = styled.label`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border-radius: 12px;
  cursor: pointer;
  user-select: none;
  display: flex;
  gap: 2.5rem;
  transition: 0.1s;
  &:hover {
    background: ${({ theme }) =>
      theme.mode === "dark" ? "#ffffff09" : "#00000020"};
  }
  & div {
    display: block;
    position: relative;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    & input {
      position: absolute;
      opacity: 0;
      height: 0;
      width: 0;
    }
    & span {
      position: absolute;
      top: 0;
      left: 0;
      height: 15px;
      width: 15px;
      border-radius: 3px;
      background-color: transparent;
      border: 2px solid
        ${({ theme }) => (theme.mode === "dark" ? "#ffffff50" : "#00000050")};
      display: flex;
      align-items: center;
      justify-content: center;
      & svg {
        display: none;
        color: #ffffff;
      }
    }
    & input:checked ~ span {
      background-color: ${({ theme }) => theme.primary};
      border-color: ${({ theme }) => theme.primary};
      & svg {
        display: block;
      }
    }
  }
`;

const KeepSignedInButton = () => {
  return (
    <Checkbox htmlFor="checkbox">
      <div>
        <input id="checkbox" name="checkbox" type="checkbox" />
        <span>
          <IoMdCheckmark />
        </span>
      </div>
      <p>Keep me signed in</p>
    </Checkbox>
  );
};

export default KeepSignedInButton;
