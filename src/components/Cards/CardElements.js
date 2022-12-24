import styled from 'styled-components';

export const CardText = styled.div`
  display: grid;
  z-index: 1;
  margin-right: auto;
  margin-left: auto;
  padding: 10px;
  justify-content: center;
  color: ${({ lightText }) => (lightText ? '#FFFFFF' : '#010101')};
`;

export const CardTitle = styled.h3`
  font-size: 24px;
  line-height: 1.1;
  font-weight: 600px;
  color: ${({ lightText }) => (lightText ? '#FFFFFF' : '#010101')};

  @media screen and (max-width: 480px){
    font-size: 16px;
  };
`;

export const CardSubtitle = styled.h3`
  font-size: 18px;
  line-height: 1.1;
  font-weight: 600px;
  color: ${({ lightText }) => (lightText ? '#FFFFFF' : '#010101')};

  @media screen and (max-width: 480px){
    font-size: 14px;
  };
`;

export const ButtonWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;


export const CardImg = styled.img`
  height: 200px;
`;

export const CardBody = styled.div`
  display: block;
  padding: 20px;
`;