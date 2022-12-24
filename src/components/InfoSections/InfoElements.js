import styled from 'styled-components';

export const InfoContainer = styled.div`
  color: #FFFFFF;
  background: ${({ lightBg }) => (lightBg ? '#F2CEF0' : '#0C0D0C')};
  @media screen and (max-width: 768px){
    padding: 100px 0;
  };
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 100vh;
  width: 100%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  @media screen and (max-width: 768px){
      height: 100%;
  }
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
  @media screen and (max-width: 1010px){
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
  }
`;

export const ColumnOne = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
  display: flex;
    justify-content:center;
  @media screen and (max-width: 768px){
    display: flex;
    justify-content:center;
  }
`;

export const ColumnTwo = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
`;

export const Top = styled.p`
  color: #D989D3;
  font-size: 18px;
  line-height: 16px;
  font-weight: 700px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600px;
  color: ${({ lightText }) => (lightText ? '#FFFFFF' : '#010101')};

  @media screen and (max-width: 480px){
    font-size: 32px;
  };
`;

export const Subtitle = styled.p`
  max-width: 540px;
  margin-bottom: 35px;
  font-size: 20px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? '#010101' : '#F2CEF0')};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export const JobTitle = styled.h3`
  font-size: 24px;
  line-height: 1.1;
  font-weight: 600px;
  color: ${({ lightText }) => (lightText ? '#FFFFFF' : '#010101')};

  @media screen and (max-width: 480px){
    font-size: 16px;
  };
`;

export const Company = styled.h4`
  font-size: 18px;
  line-height: 1.1;
  font-weight: 600px;
  color: ${({ lightText }) => (lightText ? '#FFFFFF' : '#010101')};

  @media screen and (max-width: 480px){
    font-size: 16px;
  };
`;

export const Date = styled.h4`
  margin-bottom: 24px;
  font-size: 14px;
  line-height: 1.1;
  font-weight: 600px;
  color: ${({ lightText }) => (lightText ? '#FFFFFF' : '#010101')};

  @media screen and (max-width: 480px){
    font-size: 16px;
  };
`;

export const DescriptionWrap = styled.ul`
  align-items: left;
  text-align: left;
    margin-bottom: 16px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
      margin-bottom: 16px;

  }
`;

export const JobDescription = styled.li`
  font-size: 16px;
  font-weight: 300px;
  color: ${({ lightText }) => (lightText ? '#F2CEF0' : '#010101')};

  @media screen and (max-width: 480px){
    font-size: 16px;
  };
`;

export const CardWrapper = styled.div`
  max-width: 768px;
  height: 100%;
  display: flex;
  gap: 10px;

  @media screen and (max-width: 768px){
    display: flex;
    flex-direction: column;
    align-items: center;
  };
`;