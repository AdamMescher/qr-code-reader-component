import styled from "styled-components";
import QR from "../QR";

const App = () => {
  return (
    <Wrapper>
      <QR />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background: var(--lightGray);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
