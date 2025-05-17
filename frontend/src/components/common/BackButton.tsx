import { LuArrowLeft } from "react-icons/lu";
import IconButton from "./IconButton";
import styled from "styled-components";

const Button = styled(IconButton)`
  color: ${({ theme }) => theme.textSecondary};
`;

const BackButton = ({ ...rest }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <Button {...rest}>
      <LuArrowLeft size={28} />
    </Button>
  );
};

export default BackButton;
