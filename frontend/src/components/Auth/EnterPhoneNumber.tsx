import styled from "styled-components";
import CountrySelect from "./CountrySelect";
import PhoneNumberInput from "./PhoneNumberInput";
import KeepSignedInButton from "./KeepSignedInButton";

const Logo = styled.img`
  width: 170px;
  height: 170px;
`;
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 13px;
  margin: 40px 0;
`;
const Heading = styled.h1`
  font-size: 35px;
  font-weight: 550;
  color: ${({ theme }) => (theme.mode === "dark" ? "#ffffff" : "#000000")};
  text-align: center;
`;
const Typography = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSecondary};
  text-align: center;
  line-height: 1.4;
`;
const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.05rem;
`;
const QRCodeButton = styled.button`
  width: 100%;
  border: none;
  background: none;
  cursor: pointer;
  text-align: center;
  padding: 0.8rem;
  border-radius: 12px;
  font-size: 16px;
  transition: 0.3s ease all;
  color: ${({ theme }) => theme.primary};
  margin-top: 2rem;
  &:hover {
    background-color: ${({ theme }) => `${theme.primary}10`};
  }
`;

const EnterPhoneNumber = () => {
  return (
    <>
      <Logo src="/assets/images/logo.svg" alt="logo" />
      <HeaderContainer>
        <Heading>Telegram</Heading>
        <Typography>
          Please confirm your country code and enter your phone number
        </Typography>
      </HeaderContainer>
      <InputsContainer>
        <CountrySelect />
        <PhoneNumberInput />
        <KeepSignedInButton />
      </InputsContainer>
      <QRCodeButton>LOG IN BY QR CODE</QRCodeButton>
    </>
  );
};

export default EnterPhoneNumber;
