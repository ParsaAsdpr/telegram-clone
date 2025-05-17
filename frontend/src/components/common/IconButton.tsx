import styled from "styled-components";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Button = styled.div`
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
const IconButton = ({ children, ...rest }: IProps) => {
  return <Button {...rest}>{children}</Button>;
};

export default IconButton;
