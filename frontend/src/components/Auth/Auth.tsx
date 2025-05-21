import styled from "styled-components";
// import EnterPhoneNumber from "./EnterPhoneNumber";
import EnterCode from "./EnterCode";

const Page = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.background};
  display: flex;
  align-items: center;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 360px;
  padding: 6rem 1.5rem;
  margin: auto;
`;

const Auth = () => {
  return (
    <Page>
      <Container>
        {/* <EnterPhoneNumber /> */}
        <EnterCode />
      </Container>
    </Page>
  );
};

export default Auth;
