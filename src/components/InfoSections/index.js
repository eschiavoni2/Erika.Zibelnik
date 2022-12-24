import React from 'react';
import { Button } from '../Button';
import Cards from '../Cards';
import { cardOne, cardThree, cardTwo } from '../Cards/CardData';
import ResumeButton from '../ResumeButton';
import { ImgWrap, InfoContainer, InfoRow, Date, CardWrapper, JobTitle,DescriptionWrap, Company, InfoWrapper, ColumnOne, ColumnTwo, TextWrapper, Top, Heading, Subtitle, BtnWrap, Img, JobDescription } from './InfoElements';

const InfoSections = ({ lightBg, id, date, company, bullet1, resumeButtonLabel, bullet2, bullet3, bullet4, bullet5, primary, top, dark, jobTitle, img, imgStart, lightText, headline, darkText, description, topLine, buttonLabel, alt }) => {
  
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <ColumnOne>
              <TextWrapper>
                <Top>{topLine}</Top>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  {buttonLabel ? 
                    <Button
                      to='resume'
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact="true"
                      offset={-80}
                      primary={primary ? 0 : 1}
                      dark={dark ? 0 : 1}
                    >{buttonLabel}
                    </Button> : resumeButtonLabel ? 
                    <ResumeButton
                      primary={primary ? 0 : 1}
                      dark={dark ? 0 : 1}
                  ></ResumeButton> : ''
                  }
                </BtnWrap>
              </TextWrapper>
            </ColumnOne>
            <ColumnTwo>
              {img ?
                <ImgWrap>
                  <Img src={img} alt={alt}>
                  </Img>
                </ImgWrap> : jobTitle ?
                <TextWrapper>
                  <Top>{top}</Top>
                  <JobTitle lightText={lightText}>{jobTitle}</JobTitle>
                  <Company lightText={lightText}>{company}</Company>
                  <Date lightText={lightText}>{date}</Date>
                  <DescriptionWrap>
                    <JobDescription lightText={lightText}>{bullet1}</JobDescription>
                    <JobDescription lightText={lightText}>{bullet2}</JobDescription>
                    <JobDescription lightText={lightText}>{bullet3}</JobDescription>
                    <JobDescription lightText={lightText}>{bullet4}</JobDescription>
                    <JobDescription lightText={lightText}>{bullet5}</JobDescription>
                  </DescriptionWrap>
                </TextWrapper> :
              <CardWrapper>
                    <Cards {...cardOne} />
                    <Cards {...cardTwo} />
                    <Cards {...cardThree} />
              </CardWrapper>
              }
            </ColumnTwo>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSections;
