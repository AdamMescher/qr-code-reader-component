import styled from "styled-components";

const QR = () => {
  return (
    <Wrapper>
      <ImageContainer>
        <img src="/assets/images/image-qr-code.png" alt="qr code" />
      </ImageContainer>
      <Title>Improve your front-end skills by building projects</Title>
      <Copy>
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </Copy>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: var(--white);
  width: 320px;
  padding: 16px;
  border-radius: 12px;
`;
const ImageContainer = styled.div`
  img {
    width: 100%;
    border-radius: 12px;
  }
`;
const Title = styled.h3`
  font-size: 20px;
  color: var(--darkBlue);
  margin-top: 30px;
  padding-left: 18px;
  padding-right: 18px;
  text-align: center;
`;
const Copy = styled.p`
  margin-top: 26px;
  color: var(--grayishBlue);
  padding-left: 18px;
  padding-right: 18px;
  margin-bottom: 20px;
  text-align: center;
`;

export default QR;
