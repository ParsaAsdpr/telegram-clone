import { MdOutlineModeEdit } from "react-icons/md";
import styled from "styled-components";
import Textbox from "../common/Textbox";
import { useState } from "react";

const Image = styled.img`
  width: 170px;
  height: 170px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 13px;
  margin: 40px 0 20px 0;
  display: flex;
  align-items: center;
  gap: 10px;
  & h4 {
    font-size: 30px;
    font-weight: 520;
    color: ${({ theme }) => (theme.mode === "dark" ? "#ffffff" : "#000000")};

    & svg {
      color: ${({ theme }) => theme.textSecondary};
    }
  }

  & p {
    text-align: center;
    color: ${({ theme }) => theme.textSecondary};
    line-height: 1.5;
  }
`;

const EnterCode = () => {
  const [value, setValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isValid = /^\d*$/.test(value);

    if (isValid && value.length <= 6) {
      setValue(value);
    }
  };

  return (
    <>
      <Image src="/assets/images/monkey.png" alt="img" />
      <Container>
        <h4>
          +49 178 123 45 67 <MdOutlineModeEdit size={24} />
        </h4>
        <p>
          We've sent the code to the <b>Telegram app</b> on your other device.
        </p>
      </Container>
      <Textbox label="Code" onChange={handleChange} value={value} />
    </>
  );
};

export default EnterCode;
